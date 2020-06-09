import { getIn } from "final-form"

type Value = undefined|null|string|number

/**
 * Very simple validation method. Given value should be above `min`.
 */
export const isAbove = (min:number|string, message = "De waarde moet hoger dan {min} zijn") => (value:Value):string|undefined  => {
  if (value === null || value === undefined) {
    return undefined
  }

  const parsedMin = typeof min === "string"
    ? parseFloat(min)
    : min

  const parsedValue = typeof value === "string"
    ? parseFloat(value)
    : value

  if (parsedValue < parsedMin) {
    return message
      .replace("{min}", min.toString())
      .replace("{value}", value.toString())
  }

  return undefined
}

export const isAboveOtherField = (otherField:string, message = "De waarde moet hoger dan {min} zijn") => (value:Value, allValues:object = {}):string|undefined  => {
  const min = getIn(allValues, otherField)
  return isAbove(min, message)(value)
}
