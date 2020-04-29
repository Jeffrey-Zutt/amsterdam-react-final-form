import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { combineValidators } from "../../../validators/combineValidators"
import { isAbove } from "../../../validators/isAbove"
import { isBelow } from "../../../validators/isBelow"
import { noop } from "../../../utils/noop"
import UnboundTextField from "../../unbound/UnboundTextField"

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

  return <UnboundTextField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default NumberField
