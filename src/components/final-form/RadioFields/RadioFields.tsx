import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import UnboundRadioFields from "../../unbound/UnboundRadioFields"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"
import { composeValidation } from "../../../validators/composeValidation"

type RadioProps =  React.ComponentProps<typeof UnboundRadioFields>

export type Props = {
  variant?: RadioProps["variant"]
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  hint?: string|JSX.Element,
  name: string
  options: Record<string, string>
  horizontal?: boolean
  validate?: FieldValidator<string>
  isRequired?: boolean
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

const RadioFields:React.FC<Props> = ({ name, isRequired, validate, ...restProps }) => {
  const {
    input,
    meta
  } = useField(name, {
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  return (<UnboundRadioFields
    error={meta.dirty && meta.error}
    { ...input }
    { ...restProps }
  />)
}

export default RadioFields
