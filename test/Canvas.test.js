import './vm'
import Canvas from '../src/Canvas'

describe('Canvas', () => {
  it('getBoundingClientRect', () => {
    const canvas = new Canvas()

    const rect = canvas.getBoundingClientRect()

    expect(rect).toHaveProperty('top', 0)
    expect(rect).toHaveProperty('left', 0)
    expect(rect).toHaveProperty('width', expect.any(Number))
    expect(rect).toHaveProperty('height', expect.any(Number))
  })
})
