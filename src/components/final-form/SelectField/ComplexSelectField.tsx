import React, { PropsWithChildren, useCallback, useEffect, useState } from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import UnboundSelectField from "../../unbound/UnboundSelectField"
import { findIndex } from "../../../utils/findIndex"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"

export type Props<TYPE> = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<TYPE>,
  options: TYPE[]
  optionLabelField: keyof TYPE
  optionKeyField?: keyof TYPE
  withEmptyOption?: boolean
  isRequired?: boolean
} & React.HTMLAttributes<HTMLSelectElement>

/**
 * Binds SELECT field to final-form and maps options to complex data-structures.
 */

function ComplexSelectField<TYPE>({
  name,
  options,
  optionLabelField,
  optionKeyField,
  validate,
  isRequired,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {
  const { input: { onChange, value }, meta } = useField(name, {
    type: "select",
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  const [mappedOptions, setMappedOptions] = useState<Record<string, string>>()

  // We map complex objects in a 'simple' structure `UnboundSelectField` understands.
  //
  // E.g.
  // [ { myLabel: 'foo', nested: {...} }, { myLabel: 'bar', nested: {...} } ]
  //
  // Becomes:
  // { '0': 'foo', '1': 'bar' }
  //
  // Whenever a change happens, we map back to the original object and call onChange with it.

  useEffect(
    () => { setMappedOptions(options.reduce((acc, option, index) => ({ [index]: option[optionLabelField], ...acc }), {})) },
    [ options, optionLabelField, setMappedOptions ]
  )

  // On change, map back to original object:
  const handleChange = useCallback(
    (e) => { onChange(options[e.target.value]) },
    [onChange, options]
  )

  return mappedOptions ? <UnboundSelectField
    name={name}
    error={meta.modified && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    value={findIndex(options, value).toString()}
    {...restProps}
  /> : null
}

export default ComplexSelectField
