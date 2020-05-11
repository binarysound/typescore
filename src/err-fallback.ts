export function errFallback<T>(fn: () => T, fallback: T): T {
  try {
    return fn()
  } catch (e) {
    return fallback
  }
}
