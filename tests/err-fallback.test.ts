import { errFallback } from '../src/err-fallback'

describe('err-fallback', () => {
  it('returns given function\'s result', () => {
    expect(errFallback(() => 3, 4)).toBe(3)

    expect(errFallback(() => '3', '4')).toBe('3')

    expect(errFallback(() => JSON.parse('{"a": 3}'), {})).toEqual({ a: 3 })
  })

  it('returns fallback value on function error', () => {
    expect(errFallback(() => {
      throw new Error()
    }, 3)).toBe(3)

    expect(errFallback(() => JSON.parse(''), {})).toEqual({})
  })
})
