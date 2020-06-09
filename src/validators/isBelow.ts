import { getIn } from "final-form"

/**
 * Very simple validation method. Given value should be below `max`.
 */
export const isBelow = (max:number|string, message = "De waarde moet lager dan {max} zijn") => (value?:string|number):string|undefined  => {
  if (value === null || value === undefined) {
    return undefined
  }

  const parsedMax = typeof max === "string"
    ? parseFloat(max)
    : max

  const parsedValue = typeof value === "string"
    ? parseFloat(value)
    : value

  if (parsedValue > parsedMax) {
    return message
      .replace("{max}", max.toString())
      .replace("{value}", value.toString())
  }

  return undefined
}

export const isBelowOtherField = (otherField:string, message = "De waarde moet lager dan {max} zijn") => (value?:string|number, allValues:object = {}):string|undefined  => {
  const max = getIn(allValues, otherField)
  return isBelow(max, message)(value)
}
