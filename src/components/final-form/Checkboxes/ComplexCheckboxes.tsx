import {FieldValidator} from "final-form";
import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {useField} from "react-final-form";
import {findIndexes} from "../../../utils/findIndex";
import {UnboundCheckboxes} from "../../unbound/UnboundCheckboxes";

export type Props<TYPE> = {
  label?: string
  name: string
  validate?: FieldValidator<TYPE>,
  options: TYPE[]
  optionLabelField: keyof TYPE
} & React.HTMLAttributes<HTMLInputElement>

/**
 * Binds SELECT field to final-form and maps options to complex data-structures.
 */

function ComplexCheckboxes<TYPE>({
  name,
  options,
  optionLabelField,
  validate,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {

  const {input: { onChange, value }, meta } = useField(name, {
    validate
  })

  const [mappedOptions, setMappedOptions] = useState({})

  useEffect(
    () => { setMappedOptions(options.reduce((acc, option, index) => ({ ...acc, [index]: option[optionLabelField] }), {})) },
    [ options, optionLabelField, setMappedOptions ]
  )

  // On change, map back to original objects:
  const handleChange = useCallback(
    (indexes:string[]) => { onChange(indexes.map(index => options[parseInt(index)])) },
    [onChange, options]
  )

  return <UnboundCheckboxes
    name={name}
    error={meta.touched && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    values={findIndexes(options, value).map(_ => _.toString())}
    {...restProps}
  />
}

export default ComplexCheckboxes
