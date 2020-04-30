import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import UnboundRadioFields from "../../unbound/UnboundRadioFields"

export type Props = {
  label?: string
  name: string
  options: Record<string, string>
  horizontal?: boolean
  validate?: FieldValidator<string>
} & React.HTMLAttributes<HTMLInputElement>

const RadioFields:React.FC<Props> = ({ name, validate, ...restProps }) => {
  const {
    input,
    meta
  } = useField(name, {
    type: "radio",
    validate
  })

  return (<UnboundRadioFields
    name={name}
    error={meta.dirty && meta.error}
    { ...input }
    { ...restProps }
  />)
}

export default RadioFields
