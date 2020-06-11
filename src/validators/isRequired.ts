/**
 * Very simple generic isRequired validation method.
 */
export const isRequired = <T>(message = "Dit veld is verplicht") => (value:T|undefined):string|undefined => {
  if (Array.isArray(value) && value.length === 0) {
    return message
  }

  if (value === undefined || value === null) {
    return message
  }

  return undefined
}
