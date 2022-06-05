export function pipe(...fns) {
  return (initialArgument) =>
    fns.reduce((currentArgument, fun) => fun(currentArgument), initialArgument);
}

export function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}
