import { FieldValidator } from "final-form"
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react"
import { useField } from "react-final-form"
import { findIndexes } from "../../../utils/findIndex"
import { UnboundCheckboxes } from "../../unbound/UnboundCheckboxes"

export type Props<TYPE> = {
  label?: string
  name: string
  validate?: FieldValidator<TYPE[]>,
  options: TYPE[]
  optionLabelField: keyof TYPE
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

/**
 * Binds SELECT field to final-form and maps options to complex data-structures.
 */

function ComplexCheckboxFields<TYPE>({
  name,
  options,
  optionLabelField,
  validate,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {
  const { input: { onChange, value }, meta } = useField<TYPE[]>(name, {
    validate
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
    error={meta.touched && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    values={findIndexes(options, value).map(_ => _.toString())}
    {...restProps}
  />
}

export default ComplexCheckboxFields
