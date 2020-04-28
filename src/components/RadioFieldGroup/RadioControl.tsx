import React, {PropsWithChildren, useCallback} from "react";
import {useField} from "react-final-form";
import {Radio} from "@datapunt/asc-ui";
import {FieldValidator} from "final-form";

type Props<TYPE> = {
  id: string
  value: TYPE,
  name: string,
  validate?: FieldValidator<TYPE>
}

export function RadioControl<TYPE>({ id, value, name, validate }:PropsWithChildren<Props<TYPE>>) {
  const {
      input: { onChange, value: inputValue, ...restInput },
      meta
    } = useField<TYPE>(name, {
      type: "radio",
      value,
      validate
  })

  const hasError = meta.dirty && meta.error
  const handleChange = useCallback(() => onChange(value), [onChange, value])

  return (<Radio error={hasError} onChange={handleChange} id={id} {...restInput} />)
}
