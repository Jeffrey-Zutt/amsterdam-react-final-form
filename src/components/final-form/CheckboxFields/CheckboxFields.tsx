import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { UnboundCheckboxes } from "../../unbound/UnboundCheckboxes"

export type Props = {
  label?: string
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
    name={name}
    error={meta.dirty && meta.error}
    values={values}
    { ...restInput }
    { ...restProps }
  />)
}

export default CheckboxFields
