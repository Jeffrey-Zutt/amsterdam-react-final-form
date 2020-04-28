import React, {PropsWithChildren, useCallback} from "react"
import { Select } from "@datapunt/asc-ui"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import {Label} from "../Label/Label";
import {FieldError} from "../FieldError/FieldError";

export type Props<TYPE> = {
  label?: string
  name: string
  validate?: FieldValidator<TYPE>,
  options: TYPE[]
  optionLabelField: keyof TYPE
  optionKeyField?: keyof TYPE
} & React.HTMLAttributes<HTMLSelectElement>

function SelectField<TYPE>({
  label,
  name,
  validate,
  options,
  optionLabelField,
  optionKeyField,
  ...restProps
}:PropsWithChildren<Props<TYPE>>) {

  const {
    input: { value, onChange, ...restInput },
    meta } = useField(name, {
    type: "select",
    validate
  })

  const hasError = meta.touched && meta.error

  const handleChange = useCallback((e) => {
    onChange(options[e.target.value])
  }, [options, onChange])

  return <>
    <Label label={label}>
      <Select
        error={hasError}
        onChange={handleChange}
        {...restInput}
        {...restProps}
      >
        { options.map((option, index) => (
          <option
            key={`${(optionKeyField && option[optionKeyField]) || index}`}
            value={index}>
            { option[optionLabelField] }
          </option>
        ))}
      </Select>
    </Label>
    { hasError && <FieldError>{ meta.error }</FieldError> }
  </>
}

export default SelectField
