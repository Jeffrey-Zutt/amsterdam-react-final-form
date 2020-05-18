import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { noop } from "../../../utils/noop"
import UnboundTextArea from "../../unbound/UnboundTextArea"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number>
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField:React.FC<Props> = ({ name, label, validate = noop, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    validate
  })

  return <UnboundTextArea
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default TextField
