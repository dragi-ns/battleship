import PubSub from 'pubsub-js';
import { animate as atebitAnimate } from 'atebit';
import { GRID_SIZE, Orientation, Status } from './gameboard';
import { cellNumberToCoordinates, coordinatesToCellNumber } from './util';
import { GameMode } from './gameData';
import {
  DEFAULT_TIMING,
  POP_IN,
  SLIDE_IN_RIGHT,
  SLIDE_OUT_LEFT,
  SLIDE_OUT_RIGHT,
  ZOOM_IN,
  ZOOM_OUT,
} from './animations';
import {
  START_GAME,
  DISPLAY_SETUP_PHASE,
  CHECK_COORDINATES,
  COORDINATES_FREE,
  PLACE_SHIP,
  PLACEMENT_VALID,
  PLACE_SHIPS_RANDOM,
  SETUP_PHASE_NEXT,
  SETUP_PHASE_INCOMPLETE,
  DISPLAY_ATTACK_PHASE,
  ATTACK,
  MISS,
  HIT,
  SUNK,
  FLEET_GONE,
  NEW_ROUND,
  RESET_GAME,
} from './eventTypes';

export default function GameUi() {
  // Chrome doesn't allow accessing the dataTransfer object out of the dragstart
  // and drop handlers.
  let dataTransfer = null;
  let cellGhostImage = null;
  let passScreenTimeoutId = null;

  let turnIndicator = null;
  let playerOneGameboardContainer = null;
  let playerTwoGameboardContainer = null;
  let currentActiveGameboardContainer = null;
  const main = document.getElementById('main');

  atebitAnimate(document.querySelectorAll('.logo .char'), [
    POP_IN,
    { duration: 100, fill: 'forwards' },
  ]);

  // INITIALY RENDER GAME SETTINGS FORM

  render(main, createGameSettingsForm(), false, {
    inKeyFrames: ZOOM_IN,
  });

  // PUBSUB SUBSCRIPTIONS

  PubSub.subscribe(DISPLAY_SETUP_PHASE, (_, data) => {
    if (data.random) {
      unmarkFleetLocation(currentActiveGameboardContainer);
      markFleetLocation(currentActiveGameboardContainer, data.gameboard);

      currentActiveGameboardContainer
        .querySelectorAll('.fleet-setup .ship[draggable="true"]')
        .forEach((ship) => {
          ship.setAttribute('draggable', false);
          ship.removeEventListener('dragstart', handleSetupShipDragStart);
        });
    } else {
      render(main.firstElementChild, createSetupPhase(data), true, {
        outKeyframes: SLIDE_OUT_LEFT,
        inKeyFrames: SLIDE_IN_RIGHT,
      });
    }
  });

  PubSub.subscribe(COORDINATES_FREE, (_, data) => {
    markValidTargetCells(currentActiveGameboardContainer, data);
  });

  PubSub.subscribe(PLACEMENT_VALID, (_, data) => {
    unmarkShipLocationCells(currentActiveGameboardContainer, data.shipId);
    markShipLocationCells(currentActiveGameboardContainer, data);

    const shipContainer = document.querySelector(
      `.fleet [data-ship-id="${data.shipId}"]`
    );
    if (shipContainer.draggable) {
      shipContainer.setAttribute('draggable', false);
      shipContainer.removeEventListener('click', handleSetupShipDragStart);
    }
  });

  PubSub.subscribe(SETUP_PHASE_INCOMPLETE, () => {
    renderNotification({
      type: 'error',
      msg: 'You need to place all available ships on the gameboard.',
    });
  });

  PubSub.subscribe(DISPLAY_ATTACK_PHASE, async (_, data) => {
    if (data.gameMode === GameMode.VS_FRIEND) {
      let attackerName = null;
      if (data.playerOne.active) {
        attackerName = data.playerOne.name;
      } else {
        attackerName = data.playerTwo.name;
      }
      renderOverlay(createPassDeviceScreen(attackerName));
      render(main.firstElementChild, createAttackPhase(data), true);
      currentActiveGameboardContainer.scrollIntoView();
    } else {
      await render(main.firstElementChild, createAttackPhase(data), true, {
        outKeyframes: SLIDE_OUT_LEFT,
        inKeyFrames: SLIDE_IN_RIGHT,
      });
      currentActiveGameboardContainer.scrollIntoView({ behavior: 'smooth' });
    }
  });

  PubSub.subscribe(MISS, (_, data) => {
    const cellNum = coordinatesToCellNumber(data.coords, GRID_SIZE);
    currentActiveGameboardContainer
      .querySelector(`[data-cell-num="${cellNum}"]`)
      .classList.add('miss');

    swapRoles(data);
  });

  PubSub.subscribe(HIT, (_, data) => {
    const cellNum = coordinatesToCellNumber(data.coords, GRID_SIZE);
    currentActiveGameboardContainer
      .querySelector(`[data-cell-num="${cellNum}"]`)
      .classList.add('hit');
  });

  PubSub.subscribe(SUNK, (_, data) => {
    data.shipCoords.forEach((coord) => {
      const cellNum = coordinatesToCellNumber(coord, GRID_SIZE);
      const cell = currentActiveGameboardContainer.querySelector(
        `[data-cell-num="${cellNum}"]`
      );
      cell.classList.remove('hit');
      cell.classList.add('sunk');
      cell.animate(POP_IN, DEFAULT_TIMING);
    });

    data.adjacentCoords.forEach((coord) => {
      const cellNum = coordinatesToCellNumber(coord, GRID_SIZE);
      const cell = currentActiveGameboardContainer.querySelector(
        `[data-cell-num="${cellNum}"]`
      );
      cell.classList.add('miss');
    });

    currentActiveGameboardContainer
      .querySelector(`.fleet-status [data-ship-id="${data.shipId}"]`)
      .classList.add('sunk');

    renderNotification({
      type: 'info',
      msg: `${data.attackerName} sunk ${data.opponentName}'s ${data.shipName}!`,
    });
  });

  PubSub.subscribe(FLEET_GONE, (_, data) => {
    setTimeout(() => {
      render(
        document.body,
        createEndRoundOverlay(data.winnerName, data.loserName),
        false,
        {
          inKeyFrames: ZOOM_IN,
        }
      );
    }, 1000);
  });

  // DOM UTIL FUNCTIONS

  function createElement({
    tagName = 'div',
    attributes = {},
    content = null,
    useInnerHTML = false,
    children = [],
    events = [],
  }) {
    const element = document.createElement(tagName);

    Object.keys(attributes).forEach((attribute) => {
      element.setAttribute(attribute, attributes[attribute]);
    });

    if (content) {
      if (useInnerHTML) {
        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    children.forEach((child) => element.appendChild(child));

    events.forEach((event) => {
      element.addEventListener(event.name, event.handler);
    });

    return element;
  }

  function createEvent(name, handler) {
    return { name, handler };
  }

  async function render(parent, element, replace = false, animations = null) {
    if (replace) {
      if (animations) {
        await parent.animate(
          animations.outKeyframes,
          animations.outTiming ?? DEFAULT_TIMING
        ).finished;
      }
      parent.replaceWith(element);
    } else {
      parent.appendChild(element);
    }
    if (animations) {
      await element.animate(
        animations.inKeyFrames,
        animations.inTiming ?? DEFAULT_TIMING
      ).finished;
    }
  }

  function createNotification({ type, msg }) {
    return createElement({
      attributes: {
        class: `notification ${type}`,
      },
      children: [
        createElement({
          tagName: 'p',
          content: msg,
        }),
      ],
    });
  }

  function renderNotification(notificationAttributes, duration = 2000) {
    const notification = createNotification(notificationAttributes);
    render(document.querySelector('.notifications'), notification, false, {
      inKeyFrames: SLIDE_IN_RIGHT,
    });
    setTimeout(async () => {
      await notification.animate(SLIDE_OUT_RIGHT, DEFAULT_TIMING).finished;
      notification.remove();
    }, duration);
  }

  function createOverlay(text, buttons) {
    return createElement({
      attributes: {
        id: 'overlay',
      },
      children: [
        createElement({
          tagName: 'p',
          content: text,
        }),
        createElement({
          attributes: {
            class: 'buttons',
          },
          children: buttons,
        }),
      ],
    });
  }

  async function renderOverlay(overlay) {
    await render(document.body, overlay, false, {
      inKeyFrames: ZOOM_IN,
    });
    document.body.classList.add('clipped');
  }

  function createPassDeviceScreen(playerName) {
    return createOverlay(`${playerName}'s turn!`, [
      createLeaveGameButton(),
      createButton('Accept', { class: 'btn' }, [
        createEvent('click', async (event) => {
          await removeOverlay(event);
          currentActiveGameboardContainer.scrollIntoView({
            behavior: 'smooth',
          });
        }),
      ]),
    ]);
  }

  function createEndRoundOverlay(winner, loser) {
    return createOverlay(`${winner} sunk ${loser}'s fleet!`, [
      createLeaveGameButton(),
      createButton('Continue', { class: 'btn' }, [
        createEvent('click', (event) => {
          removeOverlay(event);
          PubSub.publish(NEW_ROUND);
        }),
      ]),
    ]);
  }

  async function removeOverlay(event) {
    const parent = event.currentTarget.closest('#overlay');
    if (parent) {
      await parent.animate(ZOOM_OUT, DEFAULT_TIMING).finished;
      parent.remove();
      document.body.classList.remove('clipped');
    }
  }

  function createLeaveGameButton() {
    return createButton('Leave game', { class: 'btn' }, [
      createEvent('click', (event) => {
        if (passScreenTimeoutId) {
          clearTimeout(passScreenTimeoutId);
        }

        removeOverlay(event);

        PubSub.publish(RESET_GAME);

        render(main.firstElementChild, createGameSettingsForm(), true, {
          inKeyFrames: ZOOM_IN,
          outKeyframes: ZOOM_OUT,
        });
      }),
    ]);
  }

  // GAME SETTINGS FORM / FORM UTIL FUNCTIONS

  function createGameSettingsForm() {
    const playerTwo = createTextInput({
      name: 'player-two',
      id: 'player-two',
      placeholder: 'Player 2',
      maxlength: 16,
    });
    playerTwo.classList.add('hide');
    return createElement({
      attributes: {
        class: 'container form-container',
      },
      children: [
        createElement({
          tagName: 'form',
          attributes: {
            class: 'form game-settings-form',
            novalidate: true,
          },
          children: [
            createGameModeInput(),
            createTextInput({
              name: 'player-one',
              id: 'player-one',
              placeholder: 'Player 1',
              maxlength: 16,
              autofocus: true,
            }),
            playerTwo,
            createButton('Start Game', { class: 'btn', type: 'submit' }),
          ],
          events: [createEvent('submit', handleStartGame)],
        }),
      ],
    });
  }

  function createGameModeInput() {
    return createElement({
      attributes: {
        class: 'form-field',
      },
      children: [
        createElement({
          attributes: {
            class: 'radios',
          },
          children: [
            createRadioInput(
              {
                name: 'game-mode',
                id: 'vs-friend',
                value: GameMode.VS_FRIEND,
              },
              [createEvent('change', handleGameModeChange)]
            ),
            createLabel('vs friend', { for: 'vs-friend', class: 'btn' }),
            createRadioInput(
              {
                name: 'game-mode',
                id: 'vs-bot',
                value: GameMode.VS_BOT,
                checked: true,
              },
              [createEvent('change', handleGameModeChange)]
            ),
            createLabel('vs noobot', { for: 'vs-bot', class: 'btn' }),
          ],
        }),
      ],
    });
  }

  function createRadioInput(attributes, events = []) {
    return createElement({
      tagName: 'input',
      attributes: {
        type: 'radio',
        ...attributes,
      },
      events,
    });
  }

  function createLabel(labelText, attributes) {
    return createElement({
      tagName: 'label',
      attributes,
      content: labelText,
    });
  }

  function createTextInput(attributes, events = []) {
    return createElement({
      attributes: {
        class: 'form-field',
      },
      children: [
        createLabel(attributes.placeholder, { for: attributes.id }),
        createElement({
          tagName: 'input',
          attributes: {
            type: 'text',
            ...attributes,
          },
          events: [
            createEvent('blur', (event) => {
              const input = event.currentTarget;
              input.value = input.value.trim();
            }),
            ...events,
          ],
        }),
        createElement({
          tagName: 'p',
          attributes: {
            class: 'note',
          },
          content: 'Max 16 characters.',
        }),
      ],
    });
  }

  function createButton(buttonText, attributes, events = []) {
    return createElement({
      attributes: {
        class: 'form-field',
      },
      children: [
        createElement({
          tagName: 'button',
          attributes,
          content: buttonText,
          events,
        }),
      ],
    });
  }

  // SETUP PHASE

  function createSetupPhase(data) {
    currentActiveGameboardContainer = createElement({
      attributes: {
        class: 'gameboard-container',
      },
      children: [
        createSetupGameboard(data.gameboard),
        createFleet(
          data.fleet,
          {
            class: 'fleet fleet-setup',
          },
          !data.random
        ),
      ],
    });
    return createElement({
      attributes: {
        class: 'container setup-phase-container',
      },
      children: [
        createElement({
          tagName: 'p',
          attributes: {
            class: 'player-name',
          },
          content: `${data.playerName}'s setup phase!`,
        }),
        createInstructions(),
        currentActiveGameboardContainer,
        createElement({
          attributes: {
            class: 'buttons',
          },
          children: [
            createLeaveGameButton(),
            createButton('Random', { class: 'btn' }, [
              createEvent('click', () => {
                PubSub.publish(PLACE_SHIPS_RANDOM);
              }),
            ]),
            createButton('Next', { class: 'btn' }, [
              createEvent('click', () => {
                PubSub.publish(SETUP_PHASE_NEXT);
              }),
            ]),
          ],
        }),
      ],
    });
  }

  function createInstructions() {
    return createElement({
      children: [
        createElement({
          tagName: 'p',
          content: 'How to:',
        }),
        createElement({
          tagName: 'ul',
          children: [
            createElement({
              tagName: 'li',
              content: 'Drag a ship to the desired position on the gameboard.',
            }),
            createElement({
              tagName: 'li',
              content: 'Click on a ship to rotate it by a -90&deg;.',
              useInnerHTML: true,
            }),
            createElement({
              tagName: 'li',
              content: 'Ships cannot overlap!',
            }),
            createElement({
              tagName: 'li',
              content:
                'There should be at least one square space between ships!',
            }),
          ],
        }),
      ],
    });
  }

  function createSetupGameboard(gameboard) {
    return createElement({
      attributes: {
        class: 'gameboard',
      },
      children: gameboard.map((cell, cellNum) =>
        createGameboardCell(
          cell,
          {
            'data-cell-num': cellNum,
            draggable: cell.status === Status.BUSY,
          },
          [
            createEvent('click', handleSetupCellClick),
            createEvent('dragstart', handleSetupCellDragStart),
            createEvent('dragend', handleSetupCellDragEnd),
          ],
          true
        )
      ),
      events: [
        createEvent('dragenter', handleSetupGameboardDragEnter),
        createEvent('dragover', handleSetupGameboardDragOver),
        createEvent('dragleave', handleSetupGameboardDragLeave),
        createEvent('drop', handleSetupGameboardDrop),
      ],
    });
  }

  function createGameboardCell(
    cellData,
    cellAttributes,
    events = [],
    showShips = false
  ) {
    const attributes = {
      class: 'cell',
      ...cellAttributes,
    };

    if (cellData.status === Status.MISS) {
      attributes.class += ' miss';
    } else if (cellData.status === Status.HIT) {
      attributes.class += ' hit';
    } else if (cellData.status === Status.SUNK) {
      attributes.class += ' sunk';
    } else if (cellData.status === Status.BUSY && showShips) {
      attributes.class += ' marked';
      attributes['data-ship-id'] = cellData.ship.id;
      attributes['data-ship-orientation'] = cellData.orientation;
    }

    return createElement({
      attributes,
      events,
    });
  }

  function createCellGhostImage(shipId, shipOrientation) {
    const dragGhostImage = createElement({
      attributes: {
        class: 'fleet fleet-setup drag-ghost-image',
      },
    });
    const shipElement = document
      .querySelector(`.fleet [data-ship-id="${shipId}"]`)
      .cloneNode(true);
    shipElement.setAttribute('draggable', true);
    if (shipOrientation === Orientation.VERTICAL) {
      shipElement.style.gridAutoFlow = 'row';
    }
    dragGhostImage.appendChild(shipElement);
    document.body.appendChild(dragGhostImage);
    return dragGhostImage;
  }

  function createFleet(fleet, attributes, shipsDraggable = true) {
    return createElement({
      attributes,
      children: fleet.map((ship) => createShip(ship, shipsDraggable)),
    });
  }

  function createShip(ship, draggable = true) {
    const events = [];
    if (draggable) {
      events.push(createEvent('dragstart', handleSetupShipDragStart));
    }

    return createElement({
      attributes: {
        class: 'ship-container',
      },
      children: [
        createElement({
          tagName: 'p',
          attributes: {
            class: 'ship-name',
          },
          content: ship.name,
        }),
        createElement({
          attributes: {
            class: 'ship',
            'data-ship-id': ship.id,
            draggable,
          },
          children: (() => {
            const cells = [];
            for (let i = 0; i < ship.length; i += 1) {
              cells.push(
                createElement({
                  attributes: {
                    class: 'cell',
                  },
                })
              );
            }
            return cells;
          })(),
          events,
        }),
      ],
    });
  }

  function markBlockOfCells(
    gameboardContainer,
    { startCoords, shipOrientation, shipLength },
    cellMarkCallback
  ) {
    const startCellNum = coordinatesToCellNumber(startCoords, GRID_SIZE);
    const step = shipOrientation === Orientation.HORIZONTAL ? 1 : 10;
    for (let i = 0, j = startCellNum; i < shipLength; i += 1, j += step) {
      const cell = gameboardContainer.querySelector(
        `.cell[data-cell-num="${j}"`
      );
      cellMarkCallback(cell);
    }
  }

  function markValidTargetCells(gameboardContainer, data) {
    markBlockOfCells(gameboardContainer, data, (cell) => {
      cell.classList.add('valid');
    });
  }

  function unmarkValidTargetCells(gameboardContainer) {
    gameboardContainer.querySelectorAll('.cell.valid').forEach((cell) => {
      cell.classList.remove('valid');
    });
  }

  function markShipLocationCells(gameboardContainer, data) {
    markBlockOfCells(gameboardContainer, data, (cell) => {
      cell.classList.add('marked');
      cell.setAttribute('draggable', true);
      cell.setAttribute('data-ship-id', data.shipId);
      cell.setAttribute('data-ship-orientation', data.shipOrientation);
    });
  }

  function unmarkShipLocationCells(gameboardContainer, shipId = null) {
    let selectorString = '.cell.marked';
    if (shipId) {
      selectorString += `[data-ship-id="${shipId}"]`;
    }
    gameboardContainer.querySelectorAll(selectorString).forEach((cell) => {
      cell.classList.remove('marked');
      cell.setAttribute('draggable', false);
      cell.removeAttribute('data-ship-id');
      cell.removeAttribute('data-ship-orientation');
    });
  }

  function markFleetLocation(gameboardContainer, gameboard) {
    gameboard
      .filter((cell) => cell.status === Status.BUSY && cell.position === 0)
      .forEach((cell) => {
        markShipLocationCells(gameboardContainer, {
          startCoords: { x: cell.x, y: cell.y },
          shipId: cell.ship.id,
          shipOrientation: cell.orientation,
          shipLength: cell.ship.length,
        });
      });
  }

  function unmarkFleetLocation(gameboardContainer) {
    unmarkShipLocationCells(gameboardContainer);
  }

  // ATTACK PHASE

  function createAttackPhase(data) {
    playerOneGameboardContainer = createPlayerContainer(
      data.gameMode,
      data.playerOne
    );
    playerTwoGameboardContainer = createPlayerContainer(
      data.gameMode,
      data.playerTwo
    );
    currentActiveGameboardContainer = data.playerOne.active
      ? playerTwoGameboardContainer
      : playerOneGameboardContainer;
    turnIndicator = createElement({
      attributes: {
        class: `turn-indicator${!data.playerOne.active ? ' left' : ''}`,
      },
      content: '-->',
    });
    return createElement({
      attributes: {
        class: 'container attack-phase-container',
      },
      children: [
        createElement({
          children: [
            playerOneGameboardContainer,
            turnIndicator,
            playerTwoGameboardContainer,
          ],
        }),
        createElement({
          attributes: {
            class: 'buttons',
          },
          children: [createLeaveGameButton()],
        }),
      ],
    });
  }

  function createPlayerContainer(gameMode, playerData) {
    return createElement({
      attributes: {
        class: `player-container${
          shouldPlayerContainerBeActive(gameMode, playerData) ? ' active' : ''
        }`,
      },
      children: [
        createElement({
          attributes: {
            class: 'player-info',
          },
          children: [
            createElement({
              tagName: 'p',
              attributes: {
                class: 'player-name',
              },
              content: `${playerData.name}'s fleet`,
            }),
            createElement({
              tagName: 'p',
              attributes: {
                class: 'player-score',
              },
              content: `${playerData.score}`,
            }),
          ],
        }),
        createElement({
          attributes: {
            class: 'gameboard-container',
          },
          children: [
            createAttackGameboard(
              playerData.gameboard,
              shouldRenderFleetLocation(gameMode, playerData)
            ),
            createFleet(
              playerData.fleet,
              {
                class: 'fleet fleet-status',
              },
              false
            ),
          ],
        }),
      ],
    });
  }

  function createAttackGameboard(gameboard, showShips) {
    const events = [];
    if (!showShips) {
      events.push(createEvent('click', handleAttackGameboardClick));
    }
    return createElement({
      attributes: {
        class: 'gameboard',
      },
      children: gameboard.map((cell, cellNum) =>
        createGameboardCell(
          cell,
          {
            'data-cell-num': cellNum,
          },
          [],
          showShips
        )
      ),
      events,
    });
  }

  function shouldRenderFleetLocation(gameMode, playerData) {
    return (
      (gameMode === GameMode.VS_BOT && !playerData.isBot) ||
      (gameMode === GameMode.VS_FRIEND && playerData.active)
    );
  }

  function shouldPlayerContainerBeActive(gameMode, playerData) {
    return (
      (gameMode === GameMode.VS_BOT &&
        (!playerData.isBot || (playerData.isBot && playerData.active))) ||
      (gameMode === GameMode.VS_FRIEND && playerData.active)
    );
  }

  function swapRoles(data) {
    if (data.gameMode === GameMode.VS_BOT) {
      if (data.playerOne.active) {
        removeGameboardClickEvent(playerOneGameboardContainer);
        addGameboardClickEvent(playerTwoGameboardContainer);
        playerTwoGameboardContainer.classList.remove('active');
        turnIndicator.classList.remove('left');
        currentActiveGameboardContainer = playerTwoGameboardContainer;
      } else {
        removeGameboardClickEvent(playerTwoGameboardContainer);
        playerTwoGameboardContainer.classList.add('active');
        turnIndicator.classList.add('left');
        currentActiveGameboardContainer = playerOneGameboardContainer;
      }
      setTimeout(() => {
        currentActiveGameboardContainer.scrollIntoView({
          behavior: 'smooth',
        });
      }, 500);
      return;
    }

    let attacker = null;
    let attackerGameboardContainer = null;
    let opponentGameboardContainer = null;

    if (data.playerOne.active) {
      attacker = data.playerOne;
      attackerGameboardContainer = playerOneGameboardContainer;
      opponentGameboardContainer = playerTwoGameboardContainer;
    } else {
      attacker = data.playerTwo;
      attackerGameboardContainer = playerTwoGameboardContainer;
      opponentGameboardContainer = playerOneGameboardContainer;
    }

    passScreenTimeoutId = setTimeout(() => {
      renderOverlay(createPassDeviceScreen(attacker.name));
    }, 1000);

    setTimeout(() => {
      unmarkFleetLocation(opponentGameboardContainer);
      markFleetLocation(attackerGameboardContainer, attacker.gameboard);

      addGameboardClickEvent(opponentGameboardContainer);

      if (attacker === data.playerOne) {
        turnIndicator.classList.remove('left');
      } else {
        turnIndicator.classList.add('left');
      }

      currentActiveGameboardContainer = opponentGameboardContainer;
    }, 1250);

    removeGameboardClickEvent(attackerGameboardContainer);
  }

  function addGameboardClickEvent(gameboardContainer) {
    gameboardContainer.classList.remove('active');
    gameboardContainer
      .querySelector('.gameboard')
      .addEventListener('click', handleAttackGameboardClick);
  }

  function removeGameboardClickEvent(gameboardContainer) {
    gameboardContainer.classList.add('active');
    gameboardContainer
      .querySelector('.gameboard')
      .removeEventListener('click', handleAttackGameboardClick);
  }

  // DOM EVENT HANDLERS

  function handleGameModeChange(event) {
    const form = event.currentTarget.closest('.game-settings-form');
    const value = parseInt(event.currentTarget.value, 10);
    const playerTwoContainer =
      form.elements['player-two'].closest('.form-field');
    if (value === GameMode.VS_FRIEND) {
      playerTwoContainer.classList.remove('hide');
    } else if (value === GameMode.VS_BOT) {
      playerTwoContainer.classList.add('hide');
    }
  }

  function handleStartGame(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      !form.elements['player-one'].validity.valid ||
      !form.elements['player-two'].validity.valid
    ) {
      renderNotification({
        type: 'error',
        msg: 'Player names can have maximum of 16 characters!',
      });
      return;
    }

    let gameMode = parseInt(form.elements['game-mode'].value, 10);
    if (gameMode !== GameMode.VS_FRIEND && gameMode !== GameMode.VS_BOT) {
      gameMode = GameMode.VS_BOT;
    }

    let playerOneName = form.elements['player-one'].value;
    if (playerOneName.length === 0) {
      playerOneName = 'Player 1';
    }

    let playerTwoName = form.elements['player-two'].value;
    if (gameMode === GameMode.VS_FRIEND) {
      if (playerTwoName.length === 0) {
        playerTwoName = 'Player 2';
      }
    } else {
      playerTwoName = 'Noobot';
    }

    PubSub.publish(START_GAME, {
      gameMode,
      playerOneName,
      playerTwoName,
    });
  }

  function handleSetupShipDragStart(event) {
    const target = event.currentTarget;
    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    const shipId = target.getAttribute('data-ship-id');
    const shipOrientation =
      target.getAttribute('data-ship-orientation') ?? Orientation.HORIZONTAL;

    dataTransfer = {
      shipId,
      shipOrientation,
    };
  }

  function handleSetupGameboardDragEnter(event) {
    event.preventDefault();

    const { target } = event;
    if (!dataTransfer || !target || !target.hasAttribute('data-cell-num')) {
      return;
    }

    const coords = cellNumberToCoordinates(
      parseInt(event.target.getAttribute('data-cell-num'), 10),
      GRID_SIZE
    );

    PubSub.publish(CHECK_COORDINATES, {
      startCoords: coords,
      shipOrientation: dataTransfer.shipOrientation,
      shipId: dataTransfer.shipId,
    });
  }

  function handleSetupGameboardDragOver(event) {
    event.preventDefault();
  }

  function handleSetupGameboardDragLeave(event) {
    const { target } = event;
    if (!target || !target.hasAttribute('data-cell-num')) {
      return;
    }
    unmarkValidTargetCells(currentActiveGameboardContainer);
  }

  function handleSetupGameboardDrop(event) {
    event.preventDefault();

    const { target } = event;
    if (!dataTransfer || !target || !target.hasAttribute('data-cell-num')) {
      return;
    }

    const coords = cellNumberToCoordinates(
      parseInt(event.target.getAttribute('data-cell-num'), 10),
      GRID_SIZE
    );

    unmarkValidTargetCells(currentActiveGameboardContainer);

    PubSub.publish(PLACE_SHIP, {
      startCoords: coords,
      shipOrientation: dataTransfer.shipOrientation,
      shipId: dataTransfer.shipId,
      oldStartCoords: dataTransfer.oldStartCoords,
    });
    dataTransfer = null;
  }

  function handleSetupCellClick(event) {
    const { target } = event;
    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    const shipId = target.getAttribute('data-ship-id');
    const oldShipOrientation = parseInt(
      target.getAttribute('data-ship-orientation'),
      10
    );
    const startTargetCell = document.querySelector(
      `.cell.marked[data-ship-id="${shipId}"]`
    );
    const coords = cellNumberToCoordinates(
      parseInt(startTargetCell.getAttribute('data-cell-num'), 10),
      GRID_SIZE
    );

    PubSub.publish(PLACE_SHIP, {
      startCoords: coords,
      oldStartCoords: coords,
      shipId,
      shipOrientation:
        oldShipOrientation === Orientation.HORIZONTAL
          ? Orientation.VERTICAL
          : Orientation.HORIZONTAL,
    });
  }

  function handleSetupCellDragStart(event) {
    const { target } = event;

    if (!target || !target.hasAttribute('data-ship-id')) {
      return;
    }

    const shipId = target.getAttribute('data-ship-id');
    const shipOrientation = parseInt(
      target.getAttribute('data-ship-orientation'),
      10
    );

    cellGhostImage = createCellGhostImage(shipId, shipOrientation);
    event.dataTransfer.setDragImage(cellGhostImage, 0, 0);

    dataTransfer = {
      shipId,
      shipOrientation,
      oldStartCoords: cellNumberToCoordinates(
        parseInt(target.getAttribute('data-cell-num'), 10),
        GRID_SIZE
      ),
    };
  }

  function handleSetupCellDragEnd() {
    if (cellGhostImage) {
      cellGhostImage.remove();
      cellGhostImage = null;
    }
  }

  function handleAttackGameboardClick(event) {
    const { target } = event;

    if (!target || target.className.search(/(miss|hit|sunk)/) !== -1) {
      return;
    }

    const coords = cellNumberToCoordinates(
      parseInt(target.getAttribute('data-cell-num'), 10),
      GRID_SIZE
    );

    PubSub.publish(ATTACK, { coords });
  }
}
