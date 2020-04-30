import _isEqual from "lodash/isEqual"

export const findIndex = <T>(haystack:T[], needle:T) => haystack
  .findIndex((item) => _isEqual(item, needle))

export const findIndexes = <T>(haystack:T[]|undefined, needles:T[]|undefined) => {
  if (!haystack || !needles) {
    return []
  }

  const indexes:number[] = []
  haystack.forEach((item, index) => {
    needles.forEach(needle => {
      if (_isEqual(item, needle)) {
        indexes.push(index)
      }
    })
  })
  return indexes
}
