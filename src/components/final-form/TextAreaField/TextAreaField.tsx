import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import UnboundTextArea from "../../unbound/UnboundTextArea"
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
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField:React.FC<Props> = ({ name, label, validate, isRequired, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  return <UnboundTextArea
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default TextField
