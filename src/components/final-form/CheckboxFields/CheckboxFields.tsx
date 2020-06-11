import React from "react"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { UnboundCheckboxes, Props as UnboundCheckboxesProps } from "../../unbound/UnboundCheckboxes"

import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"

export type Props = {
  name: string
  options: Record<string, string>
  validate?: FieldValidator<string[]>
  isRequired?: boolean
} & UnboundCheckboxesProps

const CheckboxFields:React.FC<Props> = ({ name, validate, isRequired, ...restProps }) => {
  const {
    input: { value: values, ...restInput },
    meta
  } = useField(name, {
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  return (<UnboundCheckboxes
    error={meta.dirty && meta.error}
    values={values}
    { ...restInput }
    { ...restProps }
  />)
}

export default CheckboxFields
