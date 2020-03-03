export const pipe = (fns: Function []) => (...args) => fns.reduce((acc, fn) => {
  return [fn(...acc)]
}, args)[0]
