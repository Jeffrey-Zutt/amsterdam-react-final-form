import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import { Input } from "@datapunt/asc-ui"
import { noop } from "../../utils/noop";
import {Label} from "../Label/Label";
import {FieldError} from "../FieldError/FieldError";

export type Props = {
  label?: string
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

  const hasError = meta.touched && meta.error

  const inputComponent = <Input
    error={hasError}
    {...input}
    {...otherProps}
  />

  return <>
    { label !== undefined
      ? <Label label={label} position='top' align='flex-start'>{ inputComponent }</Label>
      : inputComponent }
    { hasError && (
      <FieldError>{ meta.error }</FieldError>
    ) }
  </>
}

export default TextField
