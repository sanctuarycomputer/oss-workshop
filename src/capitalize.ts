/**
 * Capitalizes a word
 */

export const capitalize = (text: string): string => {
  return 'TODO'
}
/**
 * Converts all words in a string to Title Case
 */

export const capitalizeWords = (text: string): string => {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
