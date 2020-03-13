export const pipe = (fns: Function []) => (...args) => fns.reduce((acc, fn) => {
  return [fn.call(null, ...acc)]
}, args)[0]


export const compose = (fns: Function []) => (...args) => fns.reduceRight((acc, fn) => {
  return [fn.call(null, ...acc)]
}, args)[0]




export const curry = (fn) => {
  const arity = fn.length

  const accumulator = (...args) => {
    if (args.length < arity) {
      return accumulator.bind(null, ...args)
    }
    return fn.apply(null, args)
  }

  return accumulator
}