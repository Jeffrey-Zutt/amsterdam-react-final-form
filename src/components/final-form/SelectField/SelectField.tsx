import React from "react"
import UnboundSelectField from "../../unbound/UnboundSelectField"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"

export type Props = {
  position?: Responsive<Dimensions>
  name: string
  label?: string
  hint?: string|JSX.Element,
  validate?: FieldValidator<string>,
  options: Record<string, string>,
  isRequired?: boolean
} & React.HTMLAttributes<HTMLSelectElement>

/**
 * Binds SELECT field to final-form.
 */

export const SelectField:React.FC<Props> = ({ name, validate, isRequired, ...restProps }) => {
  const { input, meta } = useField(name, {
    type: "select",
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  return (<UnboundSelectField
    error={meta.touched && meta.error}
    {...input}
    {...restProps}
  />)
}

export default SelectField
