/**
 * Very simple validation method to check if value is not falsy
 */
export const isNotFalsy = <T>(message = "Dit veld is verplicht") => (value:T|undefined):string|undefined => {
  if (!value) {
    return message
  }

  return undefined
}
