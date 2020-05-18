import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import UnboundBooleanField from "../../unbound/UnboundBooleanField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<boolean>
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

const BooleanField:React.FC<Props> = ({ name, validate, ...restProps }) => {
  const {
    input,
    meta
  } = useField(name, {
    type: "checkbox",
    validate
  })

  return (<UnboundBooleanField
    name={name}
    error={meta.dirty && meta.error}
    { ...input }
    { ...restProps }
  />)
}

export default BooleanField
