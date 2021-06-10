import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import UnboundBooleanField from "../../unbound/UnboundBooleanField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

import { composeValidation } from "../../../validators/composeValidation"
import { isNotFalsy } from "../../../validators/isNotFalsy"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: string
  hint?: string|JSX.Element,
  validate?: FieldValidator<boolean>
  isRequired?: boolean
  name: string
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

const BooleanField:React.FC<Props> = ({ name, validate, isRequired, ...restProps }) => {
  const {
    input,
    meta
  } = useField(name, {
    type: "checkbox",
    validate: composeValidation([
      isRequired && isNotFalsy(),
      validate
    ])
  })

  return (<UnboundBooleanField
    error={meta.dirty && meta.error}
    { ...input }
    { ...restProps }
  />)
}

export default BooleanField
