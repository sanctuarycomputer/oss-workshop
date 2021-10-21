/**
 * Capitalizes a word
 */

export const capitalize = (text: string): string => {
  const [first, ...rest] = text.split('')
  return first.toUpperCase() + rest.join('')
}
/**
 * Converts all words in a string to Title Case
 */

export const capitalizeWords = (text: string): string => {
  return 'TODO'
}
