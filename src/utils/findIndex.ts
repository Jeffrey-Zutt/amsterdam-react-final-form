import _isEqual from 'lodash/isEqual'

export const findIndex = <T>(haystack:T[], needle:T) => haystack
  .findIndex((item) => _isEqual(item, needle))
