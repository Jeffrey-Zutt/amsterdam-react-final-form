/**
 * Very simple generic isRequired validation method.
 */
export const isMatchingRegex = (regExp:RegExp, message:string = "") => (value:string|undefined):string|undefined => {
  if (value && !regExp.test(value)) {
    return message.replace("{value}", value)
  }
  return undefined
}
