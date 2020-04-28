import React, {PropsWithChildren, useCallback} from "react"
import { Select } from "@datapunt/asc-ui"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import {Label} from "../Label/Label";
import {FieldError} from "../FieldError/FieldError";

export type Props<TYPE> = {
  label?: string
  name: string
  complexOptionLabelField?: keyof TYPE
  validate?: FieldValidator<string | TYPE>,
  options?: Record<string, string>
  complexOptions?: TYPE[]
} & React.HTMLAttributes<HTMLSelectElement>

function SelectField<TYPE>({
  label,
  name,
  validate,
  options,
  complexOptions,
  complexOptionLabelField,
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
    onChange((complexOptions && complexOptions[e.target.value]) || e.target.value)
  }, [onChange])

  return <>
    <Label label={label}>
      <Select
        error={hasError}
        onChange={handleChange}
        {...restInput}
        {...restProps}
      >
        { // 'Simple' options:
          options && Object
          .entries(options)
          .map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))
        }
        { // 'Complex' options:
          complexOptionLabelField &&
          complexOptions &&
          complexOptions.map((complexOption, index) => (
            <option key={index} value={index}>{ complexOption[complexOptionLabelField] }</option>
          )
        )}
      </Select>
    </Label>
    { hasError && <FieldError>{ meta.error }</FieldError> }
  </>
}

export default SelectField
