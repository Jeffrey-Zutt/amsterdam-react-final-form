import React, { PropsWithChildren } from "react"
import { FieldValidator } from "final-form"
import { RadioGroup, Label as AscLabel } from "@datapunt/asc-ui"
import {RadioControl} from "./RadioControl";
import {Label} from "../Label/Label";
import {useField} from "react-final-form";
import {FieldError} from "../FieldError/FieldError";

type Options<TYPE> = Record<string, TYPE>

export type Props<TYPE> = {
  label?: string
  name: string
  options?: Record<string, string>
  complexOptions?: TYPE[],
  complexOptionLabelField?: keyof TYPE,
  horizontal?: boolean
  validate?: FieldValidator<TYPE | string>
} & React.HTMLAttributes<HTMLInputElement>

function RadioFieldGroup<TYPE>({ label, name, horizontal, validate, options }: PropsWithChildren<Props<TYPE>>) {
  const { meta } = useField(name)
  const hasError = meta.dirty && meta.error

  return (
     <>
      { label !== undefined && <Label label={label} />}
      <RadioGroup name={name} horizontal={horizontal}>
        { // 'Simple' options:
          options &&
          Object
            .entries(options)
            .map(([key, value]) => (
              <AscLabel key={key} htmlFor={key} label={value}>
                <RadioControl id={key} value={key} name={name} validate={validate} />
              </AscLabel>
            )) }
      </RadioGroup>
       { hasError && <FieldError>{meta.error}</FieldError> }
    </>
  )
}

export default RadioFieldGroup
