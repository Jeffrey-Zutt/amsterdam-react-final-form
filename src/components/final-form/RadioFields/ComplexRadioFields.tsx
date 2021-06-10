import { FieldValidator } from "final-form"
import React, { PropsWithChildren, useCallback } from "react"
import { useField } from "react-final-form"
import UnboundRadioFields from "../../unbound/UnboundRadioFields"
import { findIndex } from "../../../utils/findIndex"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"

export type Props<TYPE> = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<TYPE>,
  options: TYPE[]
  optionLabelField: keyof TYPE
  isRequired?: boolean
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

/**
 * Binds SELECT field to final-form and maps options to complex data-structures.
 */

function ComplexRadioFields<TYPE>({
  name,
  options,
  optionLabelField,
  validate,
  isRequired,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {
  const { input: { onChange, value }, meta } = useField(name, {
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  // We map complex objects in a 'simple' structure `UnboundRadioFields` understands.
  //
  // E.g.
  // [ { myLabel: 'foo', nested: {...} }, { myLabel: 'bar', nested: {...} } ]
  //
  // Becomes:
  // { '0': 'foo', '1': 'bar' }
  //
  // Whenever a change happens, we map back to the original object and call onChange with it.
  const mappedOptions =  options.reduce((acc, option, index) => ({ ...acc, [index]: option[optionLabelField] }), {})

  // On change, map back to original object:
  const handleChange = useCallback(
    (value:string) => { onChange(options[parseInt(value)]) },
    [onChange, options]
  )

  return <UnboundRadioFields
    name={name}
    error={meta.dirty && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    value={findIndex(options, value).toString()}
    {...restProps}
  />
}

export default ComplexRadioFields
