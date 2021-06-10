import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import UnboundDateField from "../../unbound/UnboundDateField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: "left" | "right"
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number>
  isRequired?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const DateField:React.FC<Props> = ({ name, label, validate, isRequired, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    type: "date",
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  return <UnboundDateField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default DateField
