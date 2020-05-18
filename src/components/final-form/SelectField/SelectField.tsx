import React from "react"
import UnboundSelectField from "../../unbound/UnboundSelectField"
import { FieldValidator } from "final-form"
import { useField } from "react-final-form"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  name: string
  label?: string
  hint?: string|JSX.Element,
  validate?: FieldValidator<string>,
  options: Record<string, string>
} & React.HTMLAttributes<HTMLSelectElement>

/**
 * Binds SELECT field to final-form.
 */

export const SelectField:React.FC<Props> = ({ name, validate, ...restProps }) => {
  const { input, meta } = useField(name, {
    type: "select",
    validate
  })

  return (<UnboundSelectField
    error={meta.touched && meta.error}
    {...input}
    {...restProps}
  />)
}

export default SelectField
