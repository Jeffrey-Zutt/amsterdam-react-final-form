import _isEqual from 'lodash/isEqual'

export const findIndex = <T>(haystack:T[], needle:T) => haystack
  .findIndex((item) => _isEqual(item, needle))

export const findIndexes = <T>(haystack:T[], needle:T) => haystack
  .reduce<number[]>(
    (acc, item, index) => _isEqual(item, needle) ? [...acc, index] : acc,
    []
  )
