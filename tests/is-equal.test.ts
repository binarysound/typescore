import { isEqual } from '../src/is-equal'

describe('is-equal', () => {
  it('compares objects', () => {
    expect(isEqual(
      {
        a: '3',
        b: 2,
      },
      {
        a: '3',
        b: 2,
      },
    )).toBe(true)

    expect(isEqual(
      {
        a: 5,
        b: 6,
        c: 7,
      },
      {
        a: 5,
        b: 6,
      },
    )).toBe(false)
  })

  it('compares arrays', () => {
    expect(isEqual(
      [1, 2, 3],
      [1, 2, 3],
    )).toBe(true)

    expect(isEqual(
      [1, 2, 3],
      [1, 2, 3, 4],
    )).toBe(false)
  })

  it('compares different types', () => {
    expect(isEqual(
      [0, 1, 2],
      {0: 0, 1: 1, 2: 2},
    )).toBe(false)

    expect(isEqual(
      {0: 1, 1: 1, 2: 2},
      [0, 1, 2],
    )).toBe(false)

    expect(isEqual(
      {} as any,
      3,
    )).toBe(false)
  })
})
