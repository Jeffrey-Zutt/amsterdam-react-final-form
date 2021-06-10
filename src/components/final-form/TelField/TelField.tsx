import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"
import UnboundTextField, { Props as UnboundTextFieldProps } from "../../unbound/UnboundTextField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: "left" | "right"
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number | null | undefined>
  isRequired?: boolean
} & UnboundTextFieldProps

const TelField:React.FC<Props> = ({ name, label, validate, isRequired, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    type: "tel",
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  // @ts-ignore
  return <UnboundTextField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default TelField
