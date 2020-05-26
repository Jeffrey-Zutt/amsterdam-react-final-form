import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import UnboundRadioFields from "../../unbound/UnboundRadioFields"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  hint?: string|JSX.Element,
  name: string
  options: Record<string, string>
  horizontal?: boolean
  validate?: FieldValidator<string>
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

const RadioFields:React.FC<Props> = ({ name, validate, ...restProps }) => {
  const {
    input,
    meta
  } = useField(name, {
    validate
  })

  return (<UnboundRadioFields
    error={meta.dirty && meta.error}
    { ...input }
    { ...restProps }
  />)
}

export default RadioFields
