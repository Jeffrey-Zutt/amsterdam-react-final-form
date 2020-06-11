import { FieldValidator } from "final-form"
import { combineValidators } from "./combineValidators"

export const composeValidation = (validators:Array<FieldValidator<any> | undefined | null | false>) => {
  const filteredValidators = validators.filter(_ => !!_) as Array<FieldValidator<any>>
  return combineValidators(...filteredValidators)
}

