import { FieldValidator } from "final-form"
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react"
import { useField } from "react-final-form"
import { findIndexes } from "../../../utils/findIndex"
import { UnboundCheckboxes } from "../../unbound/UnboundCheckboxes"
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
  validate?: FieldValidator<TYPE[]>,
  options: TYPE[]
  optionLabelField: keyof TYPE
  isRequired?: boolean
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

/**
 * Binds SELECT field to final-form and maps options to complex data-structures.
 */

function ComplexCheckboxFields<TYPE>({
  name,
  options,
  optionLabelField,
  validate,
  isRequired,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {
  const { input: { onChange, value }, meta } = useField<TYPE[]>(name, {
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      validate
    ])
  })

  // We map complex objects in a 'simple' structure `UnboundCheckboxes`.
  //
  // E.g.
  // [ { myLabel: 'foo', nested: {...} }, { myLabel: 'bar', nested: {...} } ]
  //
  // Becomes:
  // { '0': 'foo', '1': 'bar' }
  //
  // Whenever a change happens, we map back to the original objects and call onChange with them.

  const [mappedOptions, setMappedOptions] = useState({})

  useEffect(
    () => { setMappedOptions(options.reduce((acc, option, index) => ({ ...acc, [index]: option[optionLabelField] }), {})) },
    [ options, optionLabelField, setMappedOptions ]
  )

  // On change, map back to original objects:
  const handleChange = useCallback(
    (indexes:string[]) => {
      const mappedBack = indexes.map(index => options[parseInt(index)])
      onChange(mappedBack)
    },
    [onChange, options]
  )

  return <UnboundCheckboxes
    error={meta.dirty && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    values={findIndexes(options, value).map(_ => _.toString())}
    {...restProps}
  />
}

export default ComplexCheckboxFields
