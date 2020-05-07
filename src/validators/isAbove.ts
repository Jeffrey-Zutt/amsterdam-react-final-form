/**
 * Very simple validation method. Given value should be above `min`.
 */
export const isAbove = (min:number|string, message = "De waarde moet hoger dan {min} zijn") => (value:string|number):string|undefined  => {
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
