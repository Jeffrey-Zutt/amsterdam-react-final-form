import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { noop } from "../../../utils/noop"
import UnboundTextField from "../../unbound/UnboundTextField"

export type Props = {
  label?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number>
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField:React.FC<Props> = ({ name, label, validate = noop, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    type: "text",
    validate
  })

  return <UnboundTextField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default TextField
