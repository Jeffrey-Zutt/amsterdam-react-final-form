import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"
import UnboundTextField, { Props as UnboundTextFieldProps } from "../../unbound/UnboundTextField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { isMatchingRegex } from "../../../validators/isMatchingRegex"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number | null | undefined>
  isRequired?: boolean
} & UnboundTextFieldProps


const regexPhone = /^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0[0-9]{9}$|[0-9\-\s]{10}$/
const message = "Vul een geldig telefoonnummer in"

const TelField:React.FC<Props> = ({ name, label, validate, isRequired, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    type: "tel",
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      isMatchingRegex(regexPhone, message),
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
