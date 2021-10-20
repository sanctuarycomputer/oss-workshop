import { arrayify } from '../arrayify'

describe('arrayify', () => {
  it('should return a non-array value as an array', () => {
    const result = arrayify('foo')
    expect(result).toEqual(['foo'])
  })

  it('should return arrays as-is', () => {
    const result = arrayify(['foo', 'bar'])
    expect(result).toEqual(['foo', 'bar'])
  })
})
