import PubSub from 'pubsub-js';
import { animate as atebitAnimate } from 'atebit';
import {
  DEFAULT_TIMING,
  POP_IN,
  SLIDE_IN_RIGHT,
  SLIDE_OUT_LEFT,
  SLIDE_OUT_RIGHT,
  ZOOM_IN,
  ZOOM_OUT,
} from './animations';
import { GRID_SIZE, Orientation, Status } from './gameboard';
import { GameMode } from './gameData';
import {
  START_GAME,
  DISPLAY_SETUP_PHASE,
  CHECK_COORDINATES,
  COORDINATES_FREE,
  PLACE_SHIP,
  PLACEMENT_VALID,
  SETUP_PHASE_INCOMPLETE,
  PLACE_SHIPS_RANDOM,
  SETUP_PHASE_NEXT,
  DISPLAY_ATTACK_PHASE,
  RESET_GAME,
  ATTACK,
  HIT,
  SUNK,
  MISS,
  FLEET_GONE,
  NEW_ROUND,
} from './eventTypes';
import { cellNumberToCoordinates, coordinatesToCellNumber } from './util';

export default function GameUi() {
  // Chrome doesn't allow accessing the dataTransfer object out of the dragstart
  // and drop handlers.
  let dataTransfer = null;
  let setupCellGhostImage = null;

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

      currentActiveGameboardContainer.querySelector('.fleet-setup').replaceWith(
        createFleet(data.fleet, {
          class: 'fleet fleet-setup',
          draggable: false,
        })
      );
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
      shipContainer.draggable = false;
      // cloneNode returns a node element without events
      shipContainer.replaceWith(shipContainer.cloneNode(true));
    }
  });

  PubSub.subscribe(SETUP_PHASE_INCOMPLETE, () => {
    renderNotification({
      type: 'error',
      msg: 'You need to place all available ships on the gameboard.',
    });
  });

  PubSub.subscribe(DISPLAY_ATTACK_PHASE, (_, data) => {
    if (data.mode === GameMode.VS_FRIEND) {
      let attackerName = null;
      if (data.playerOne.active) {
        attackerName = data.playerOne.name;
      } else {
        attackerName = data.playerTwo.name;
      }
      render(document.body, createPassDeviceScreen(attackerName), false, {
        inKeyFrames: ZOOM_IN,
      });
    }
    render(main.firstElementChild, createAttackPhase(data), true, {
      outKeyframes: SLIDE_OUT_LEFT,
      inKeyFrames: SLIDE_IN_RIGHT,
    });

    currentActiveGameboardContainer.scrollIntoView({ behavior: 'smooth' });
  });

  PubSub.subscribe(MISS, (_, data) => {
    const cellNum = coordinatesToCellNumber(data.coords, GRID_SIZE);
    currentActiveGameboardContainer
      .querySelector(`[data-cell-num="${cellNum}"]`)
      .classList.add('miss');

    if (data.mode === GameMode.VS_BOT) {
      if (data.playerOne.active) {
        playerTwoGameboardContainer.classList.remove('active');
        playerTwoGameboardContainer
          .querySelector('.gameboard')
          .addEventListener('click', handleAttackGameboardClick);
        turnIndicator.classList.remove('left');
        currentActiveGameboardContainer = playerTwoGameboardContainer;
      } else {
        playerTwoGameboardContainer.classList.add('active');
        playerTwoGameboardContainer
          .querySelector('.gameboard')
          .removeEventListener('click', handleAttackGameboardClick);
        turnIndicator.classList.add('left');
        currentActiveGameboardContainer = playerOneGameboardContainer;
      }

      currentActiveGameboardContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        let attackerName = null;
        if (data.playerOne.active) {
          attackerName = data.playerOne.name;
        } else {
          attackerName = data.playerTwo.name;
        }
        render(document.body, createPassDeviceScreen(attackerName), false, {
          inKeyFrames: ZOOM_IN,
        });
      }, 1000);

      // eslint-disable-next-line no-lonely-if
      if (data.playerOne.active) {
        setTimeout(() => {
          unmarkFleetLocation(playerTwoGameboardContainer);
          markFleetLocation(
            playerOneGameboardContainer,
            data.playerOne.gameboardData
          );
          playerTwoGameboardContainer.classList.remove('active');
          playerTwoGameboardContainer
            .querySelector('.gameboard')
            .addEventListener('click', handleAttackGameboardClick);
          turnIndicator.classList.remove('left');
          currentActiveGameboardContainer = playerTwoGameboardContainer;
          currentActiveGameboardContainer.scrollIntoView({
            behavior: 'smooth',
          });
        }, 1250);

        playerOneGameboardContainer.classList.add('active');
        playerOneGameboardContainer
          .querySelector('.gameboard')
          .removeEventListener('click', handleAttackGameboardClick);
      } else {
        setTimeout(() => {
          unmarkFleetLocation(playerOneGameboardContainer);
          markFleetLocation(
            playerTwoGameboardContainer,
            data.playerTwo.gameboardData
          );
          playerOneGameboardContainer.classList.remove('active');
          playerOneGameboardContainer
            .querySelector('.gameboard')
            .addEventListener('click', handleAttackGameboardClick);
          turnIndicator.classList.add('left');
          currentActiveGameboardContainer = playerOneGameboardContainer;

          currentActiveGameboardContainer.scrollIntoView({
            behavior: 'smooth',
          });
        }, 1250);

        playerTwoGameboardContainer.classList.add('active');
        playerTwoGameboardContainer
          .querySelector('.gameboard')
          .removeEventListener('click', handleAttackGameboardClick);
      }
    }
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
  });

  PubSub.subscribe(FLEET_GONE, (_, data) => {
    setTimeout(() => {
      render(
        document.body,
        createEndRoundOverlay(data.winner, data.loser),
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
      element.animate(
        animations.inKeyFrames,
        animations.inTiming ?? DEFAULT_TIMING
      );
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

  function createPassDeviceScreen(playerName) {
    return createOverlay(`${playerName}'s turn!`, [
      createButton('Leave game', { class: 'btn' }, [
        createEvent('click', async (event) => {
          const parent = event.currentTarget.closest('.overlay');
          await parent.animate(ZOOM_OUT, DEFAULT_TIMING).finished;
          parent.remove();
          PubSub.publish(RESET_GAME);
          render(main.firstElementChild, createGameSettingsForm(), true, {
            inKeyFrames: ZOOM_IN,
            outKeyframes: ZOOM_OUT,
          });
        }),
      ]),
      createButton('Accept', { class: 'btn' }, [
        createEvent('click', async (event) => {
          const parent = event.currentTarget.closest('.overlay');
          await parent.animate(ZOOM_OUT, DEFAULT_TIMING).finished;
          parent.remove();
        }),
      ]),
    ]);
  }

  function createOverlay(text, buttons) {
    return createElement({
      attributes: {
        class: 'overlay',
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

  function createEndRoundOverlay(winner, loser) {
    return createOverlay(`${winner} sunk ${loser}'s fleet!`, [
      createButton('Leave game', { class: 'btn' }, [
        createEvent('click', async (event) => {
          const parent = event.currentTarget.closest('.overlay');
          await parent.animate(ZOOM_OUT, DEFAULT_TIMING).finished;
          parent.remove();
          PubSub.publish(RESET_GAME);
          render(main.firstElementChild, createGameSettingsForm(), true, {
            inKeyFrames: ZOOM_IN,
            outKeyframes: ZOOM_OUT,
          });
        }),
      ]),
      createButton('Continue', { class: 'btn' }, [
        createEvent('click', async (event) => {
          const parent = event.currentTarget.closest('.overlay');
          await parent.animate(ZOOM_OUT, DEFAULT_TIMING).finished;
          parent.remove();
          PubSub.publish(NEW_ROUND);
        }),
      ]),
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
        createFleet(data.fleet, {
          class: 'fleet fleet-setup',
          draggable: !data.random,
        }),
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

  function createSetupGameboard(gameboardData) {
    return createElement({
      attributes: {
        class: 'gameboard',
      },
      children: gameboardData.flat().map((cellData, cellNum) =>
        createGameboardCell(
          cellData,
          {
            'data-cell-num': cellNum,
            draggable: cellData.status === Status.BUSY,
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

  function createFleet(fleet, attributes) {
    return createElement({
      attributes,
      children: fleet.map((ship) => createShip(ship, attributes.draggable)),
    });
  }

  function createShip(ship, draggable = true) {
    const events = [];
    if (draggable) {
      events.push(
        createEvent('dragstart', () => {
          dataTransfer = {
            shipId: ship.id,
            shipOrientation: Orientation.HORIZONTAL,
          };
        })
      );
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
        }),
      ],
      events,
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

  function markFleetLocation(gameboardContainer, gameboardData) {
    gameboardData
      .flat()
      .filter(
        (cellData) => cellData.status === Status.BUSY && cellData.position === 0
      )
      .forEach((cellData) => {
        markShipLocationCells(gameboardContainer, {
          startCoords: { x: cellData.x, y: cellData.y },
          shipId: cellData.ship.id,
          shipOrientation: cellData.orientation,
          shipLength: cellData.ship.length,
        });
      });
  }

  function unmarkFleetLocation(gameboardContainer) {
    unmarkShipLocationCells(gameboardContainer);
  }

  // ATTACK PHASE

  function createAttackPhase(data) {
    playerOneGameboardContainer = createPlayerContainer(
      data.mode,
      data.playerOne
    );
    playerTwoGameboardContainer = createPlayerContainer(
      data.mode,
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
          children: [
            createButton('Leave game', { class: 'btn' }, [
              createEvent('click', () => {
                PubSub.publish(RESET_GAME);
                render(main.firstElementChild, createGameSettingsForm(), true, {
                  inKeyFrames: ZOOM_IN,
                  outKeyframes: ZOOM_OUT,
                });
              }),
            ]),
          ],
        }),
      ],
    });
  }

  function createPlayerContainer(gameMode, playerData) {
    const shouldRenderShipLocation =
      (gameMode === GameMode.VS_BOT && !playerData.isBot) ||
      (gameMode === GameMode.VS_FRIEND && playerData.active);

    const shouldBeActive =
      (gameMode === GameMode.VS_BOT &&
        (!playerData.isBot || (playerData.isBot && playerData.active))) ||
      (gameMode === GameMode.VS_FRIEND && playerData.active);

    return createElement({
      attributes: {
        class: `player-container${shouldBeActive ? ' active' : ''}`,
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
              playerData.gameboardData,
              shouldRenderShipLocation
            ),
            createFleet(playerData.fleet, {
              class: 'fleet fleet-status',
              draggable: false,
            }),
          ],
        }),
      ],
    });
  }

  function createAttackGameboard(gameboardData, showShips) {
    const events = [];
    if (!showShips) {
      events.push(createEvent('click', handleAttackGameboardClick));
    }
    return createElement({
      attributes: {
        class: 'gameboard',
      },
      children: gameboardData.flat().map((cellData, cellNum) =>
        createGameboardCell(
          cellData,
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
      mode: gameMode,
      playerOneName,
      playerTwoName,
    });
  }

  function handleSetupGameboardDragEnter(event) {
    event.preventDefault();

    const { target } = event;
    if (!dataTransfer || !target || !target.classList.contains('cell')) {
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
    if (!target || !target.classList.contains('cell')) {
      return;
    }
    unmarkValidTargetCells(currentActiveGameboardContainer);
  }

  function handleSetupGameboardDrop(event) {
    event.preventDefault();

    const { target } = event;
    if (!dataTransfer || !target || !target.classList.contains('cell')) {
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
    if (
      !target ||
      !target.classList.contains('cell') ||
      !target.hasAttribute('data-ship-id')
    ) {
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

    if (
      !target ||
      !target.classList.contains('cell') ||
      !target.hasAttribute('data-ship-id')
    ) {
      return;
    }

    setupCellGhostImage = createElement({
      attributes: {
        class: 'fleet fleet-setup drag-ghost-image',
      },
    });
    const shipElement = document
      .querySelector(
        `.fleet [data-ship-id="${target.getAttribute('data-ship-id')}"]`
      )
      .cloneNode(true);
    setupCellGhostImage.appendChild(shipElement);
    document.body.appendChild(setupCellGhostImage);
    shipElement.setAttribute('draggable', true);
    if (
      parseInt(target.getAttribute('data-ship-orientation'), 10) ===
      Orientation.VERTICAL
    ) {
      shipElement.style.gridAutoFlow = 'row';
    }
    event.dataTransfer.setDragImage(setupCellGhostImage, 0, 0);

    dataTransfer = {
      shipId: target.getAttribute('data-ship-id'),
      shipOrientation: parseInt(
        target.getAttribute('data-ship-orientation'),
        10
      ),
      oldStartCoords: cellNumberToCoordinates(
        parseInt(target.getAttribute('data-cell-num'), 10),
        GRID_SIZE
      ),
    };
  }

  function handleSetupCellDragEnd() {
    if (setupCellGhostImage) {
      setupCellGhostImage.remove();
      setupCellGhostImage = null;
    }
  }

  function handleAttackGameboardClick(event) {
    const { target } = event;

    if (!target || !target.classList.contains('cell')) {
      return;
    }

    const coords = cellNumberToCoordinates(
      parseInt(target.getAttribute('data-cell-num'), 10),
      GRID_SIZE
    );

    PubSub.publish(ATTACK, { coords });
  }
}
