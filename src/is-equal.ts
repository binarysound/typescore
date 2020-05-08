export function isEqual<T>(a: T, b: T): boolean {
  if (a instanceof Array || b instanceof Array) {
    if (a instanceof Array && b instanceof Array) {
      if (a.length === b.length) {
        return a.every((x, idx) => x === b[idx])
      }
    }

    return false
  }

  if (typeof a === 'object') {
    if (typeof b === 'object') {
      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)

      if (aKeys.length === bKeys.length) {
        return aKeys.every(key => isEqual((a as any)[key], (b as any)[key]))
      }
    }

    return false
  }

  return a === b
}
