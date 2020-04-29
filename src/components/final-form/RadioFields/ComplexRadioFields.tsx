import {FieldValidator} from "final-form";
import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {useField} from "react-final-form";
import UnboundRadioFields from "../../unbound/UnboundRadioFields";
import {findIndex} from "../../../utils/findIndex";

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

function ComplexRadioFields<TYPE>({
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
    () => { setMappedOptions(options.reduce((acc, option, index) => ({ ...acc, [index]: option[optionLabelField] }), {}))},
    [ options, optionLabelField, setMappedOptions ]
  )

  // On change, map back to original object:
  const handleChange = useCallback(
    (e) => { onChange(options[e.target.value])},
    [onChange, options]
  )

  return <UnboundRadioFields
    name={name}
    error={meta.touched && meta.error}
    options={mappedOptions}
    onChange={handleChange}
    value={findIndex(options, value).toString()}
    {...restProps}
  />
}

export default ComplexRadioFields
