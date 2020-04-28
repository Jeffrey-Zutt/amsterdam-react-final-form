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
  options: Options<TYPE>
  labelField?: keyof TYPE,
  horizontal?: boolean
  validate?: FieldValidator<TYPE | string>
} & React.HTMLAttributes<HTMLInputElement>

function RadioFieldGroup<TYPE>({ label, labelField, name, horizontal, validate, options }: PropsWithChildren<Props<TYPE>>) {
  const { meta } = useField(name)
  const hasError = meta.dirty && meta.error

  return (
     <>
      { label !== undefined && <Label label={label} />}
      <RadioGroup name={name} horizontal={horizontal}>
        { Object
          .entries(options)
          .map(([key, value]) => (
            <AscLabel key={key} htmlFor={key} label={`${(labelField && value[labelField]) || value}`}>
              <RadioControl id={key} value={labelField ? value : key} name={name} validate={validate} />
            </AscLabel>
          )) }
      </RadioGroup>
       { hasError && <FieldError>{meta.error}</FieldError> }
    </>
  )
}

export default RadioFieldGroup
