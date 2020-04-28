import React from "react"
import { Input } from "@datapunt/asc-ui"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { combineValidators } from "../../validators/combineValidators"
import { isAbove } from "../../validators/isAbove"
import { isBelow } from "../../validators/isBelow"
import {Label} from "../Label/Label";
import {FieldError} from "../FieldError/FieldError";
import {noop} from "../../utils/noop";

export type Props = {
  label?: string
  name: string
  validate?: FieldValidator<number>
} & React.InputHTMLAttributes<HTMLInputElement>

const NumberField:React.FC<Props> = ({ name, label, validate = noop, ...otherProps }) => {
  if (otherProps.min !== undefined) {
    validate = combineValidators(isAbove(otherProps.min), validate)
  }
  if (otherProps.max !== undefined) {
    validate = combineValidators(isBelow(otherProps.max), validate)
  }

  const {
    meta,
    input
  } = useField(name, {
    type: "number",
    validate
  })

  const hasError = meta.touched && meta.error

  const inputComponent = <Input
    error={hasError}
    {...input}
    {...otherProps}
  />

  return <>
    <Label label={label}>{ inputComponent }</Label>
    { hasError && (
      <FieldError>{ meta.error }</FieldError>
    ) }
  </>
}

export default NumberField
