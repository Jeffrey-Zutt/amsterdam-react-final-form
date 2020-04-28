import React, { PropsWithChildren } from "react"
import { FieldValidator } from "final-form"
import { RadioGroup, Label as AscLabel } from "@datapunt/asc-ui"
import {RadioControl} from "./RadioControl";
import {Label} from "../Label/Label";

type Options<TYPE> = Record<string, TYPE>

export type Props<TYPE> = {
  label?: string
  name: string
  options: Options<TYPE>
  labelField?: keyof TYPE,
  horizontal?: boolean
  validate?: FieldValidator<TYPE>
} & React.HTMLAttributes<HTMLInputElement>

function RadioFieldGroup<TYPE>({ label, labelField, name, horizontal, validate, options }: PropsWithChildren<Props<TYPE>>) {
  return (
     <>
      { label !== undefined && <Label label={label} />}
      <RadioGroup name={name} horizontal={horizontal}>
        { Object
          .entries(options)
          .map(([key, value]) => (
            <AscLabel key={key} htmlFor={key} label={`${labelField && value[labelField] || value}`}>
              <RadioControl id={key} value={value} name={name} validate={validate} />
            </AscLabel>
          )) }
      </RadioGroup>
    </>
  )
}

export default RadioFieldGroup
