import './vm'
import performance from '../src/performance'

describe('performance', () => {
  it('performance now is defined', () => {
    expect(performance.now).not.toBeUndefined()
  })
})
