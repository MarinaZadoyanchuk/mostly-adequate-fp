import {expect} from 'chai'
import {pipe, curry, compose} from './utils'

describe('utils functions', () => {
  describe('pipe', () => {
    it('call with empty function array', () => {
      expect(pipe([])(2)).equal(2)
      expect(pipe([])(2, 3, 5)).equal(2)
    })
  
    it('test', () => {
      expect(pipe([(a) => a * a, a => a + a])(2)).equal(8)
      expect(pipe([(a, b) => a * b, a => a + a])(1, 2)).equal(4)
    })
  })

  describe('compose', () => {
    it('call with empty function array', () => {
      expect(compose([])(2)).equal(2)
      expect(compose([])(2, 3, 5)).equal(2)
    })
  
    it('test', () => {
      expect(compose([(a) => a * a, a => a + a])(2)).equal(16)
      expect(compose([(a) => a * a, (a, b) => a + b])(1, 2)).equal(9)
    })
  })


  describe('curry', () => {
    it('call curry', () => {
      const add = (x, y) => x + y

      const curriedAdd = curry(add)
      const addOne = curriedAdd(1)

      expect(add(1, 2)).equal(curriedAdd(1)(2))
      expect(add(2, 2)).equal(curriedAdd(2)(2))
      expect(add(1, 2)).equal(addOne(2))
      expect(add(1, 2)).equal(addOne()(2)) // empty call not count
      expect(add(1, 2)).equal(curriedAdd(1, 2))
    })
  })
})
