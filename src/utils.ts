import {Maybe} from './Maybe'
import {Either, Left, Right} from './Either'

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


// maybe :: b -> (a -> b) -> Maybe a -> b
// always returns the same type b
export const maybe = curry((v: any, f: Function, m: Maybe) => {
  if (m.isNothing) {
    return v
  }

  return f(m.$value)
})


// either :: (a -> c) -> (b -> c) -> Either a b -> c
// either always returns the same type c
export const either = curry((l: Function, r: Function, e: Either) => {
  if (e.constructor === Left) {
    return l(e.$value)
  }

  if (e.constructor === Right) {
    return r(e.$value)
  }

})
