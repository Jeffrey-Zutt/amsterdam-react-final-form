import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { UnboundCheckboxes } from "../../unbound/UnboundCheckboxes"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  hint?: string|JSX.Element,
  name: string
  options: Record<string, string>
  validate?: FieldValidator<string[]>
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

const CheckboxFields:React.FC<Props> = ({ name, validate, ...restProps }) => {
  const {
    input: { value: values, ...restInput },
    meta
  } = useField(name, {
    validate
  })

  return (<UnboundCheckboxes
    error={meta.dirty && meta.error}
    values={values}
    { ...restInput }
    { ...restProps }
  />)
}

export default CheckboxFields
