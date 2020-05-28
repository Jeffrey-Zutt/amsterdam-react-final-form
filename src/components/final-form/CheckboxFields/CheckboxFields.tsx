import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { UnboundCheckboxes, Props as UnboundCheckboxesProps } from "../../unbound/UnboundCheckboxes"

export type Props = {
  name: string
  options: Record<string, string>
  validate?: FieldValidator<string[]>
} & UnboundCheckboxesProps

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
