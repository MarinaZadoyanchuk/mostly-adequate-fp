import {pipe} from './pipe'
import {expect} from 'chai'

describe('pipe', () => {
  it('test', () => {
    expect(pipe([(a) => a * a, a => a + a])(2)).equal(8)
    expect(pipe([(a, b) => a * b, a => a + a])(1, 2)).equal(4)
  })
})