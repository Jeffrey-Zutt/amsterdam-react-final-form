import { getIn } from "final-form"

/**
 * Given value should be intersecting with another value.
 * Example Usage:
 *
 * <Checkboxes name='field' validate={isNotIntersectingWith('otherField')} />
 * <Checkboxes name='otherField' validate={isNotIntersectingWith('field')} />
 *
 */
export const isNotIntersectingWith = (field:string, message = "{item} komt in beide lijstjes voor") => (value:any, allValues:object) => {
  let other = getIn(allValues, field)

  if (value === undefined || other === undefined) {
    return undefined
  }

  if (!Array.isArray(value)) {
    value = [value]
  }

  if (!Array.isArray(other)) {
    other = [other]
  }

  for(const item of value) {
    if (other.includes(item)) {
      return message.replace("{item}", item)
    }
  }

  return undefined
}
