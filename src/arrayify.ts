/**
 * Pass in a value to get it back as an array.
 * If it already is an array, it will be passed back
 * as-is.
 */

export const arrayify = <T>(items: T | T[]): T[] => {
  if (Array.isArray(items)) return items
  return [items]
}
