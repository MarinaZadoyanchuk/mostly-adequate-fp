import {pipe} from './pipe'
import {expect} from 'chai'

describe('pipe', () => {
  it('call with empty function array', () => {
    expect(pipe([])(2)).equal(2)
  })

  it('test', () => {
    expect(pipe([(a) => a * a, a => a + a])(2)).equal(8)
    expect(pipe([(a, b) => a * b, a => a + a])(1, 2)).equal(4)
  })

})