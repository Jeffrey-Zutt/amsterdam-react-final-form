import React from "react"

import ArrayField, { Props as ArrayFieldProps } from "../ArrayField/ArrayField"
import BooleanField, { Props as BooleanProps } from "../BooleanField/BooleanField"
import CheckboxFields, { Props as CheckboxProps } from "../CheckboxFields/CheckboxFields"
import ComplexCheckboxFields, { Props as ComplexCheckboxProps } from "../CheckboxFields/ComplexCheckboxFields"
import DateField, { Props as DateFieldProps } from "../DateField/DateField"
import NumberField, { Props as NumberFieldProps } from "../NumberField/NumberField"
import RadioFields, { Props as RadioFieldsProps } from "../RadioFields/RadioFields"
import ComplexRadioFields, { Props as ComplexRadioFieldsProps } from "../RadioFields/ComplexRadioFields"
import SelectField, { Props as SelectFieldProps } from "../SelectField/SelectField"
import ComplexSelectField, { Props as ComplexSelectFieldProps } from "../SelectField/ComplexSelectField"
import TextAreaField, { Props as TextAreaFieldProps } from "../TextAreaField/TextAreaField"
import TextField, { Props as TextFieldProps } from "../TextField/TextField"
import TelField, { Props as TelFieldProps } from "../TelField/TelField"
import Button, { Props as ButtonProps } from "../Button/Button"
import ResetButton from "../ResetButton/ResetButton"
import SubmitButton from "../SubmitButton/SubmitButton"


export type ScaffoldArrayFieldProps = {
  type: "ArrayField"
  props: ArrayFieldProps
}

export type ScaffoldBooleanProps = {
  type: "Boolean"
  props: BooleanProps
}

export type ScaffoldCheckboxFieldsProps = {
  type: "CheckboxFields"
  props: CheckboxProps
}

export type ScaffoldComplexCheckboxFieldsProps = {
  type: "ComplexCheckboxFields"
  props: ComplexCheckboxProps<any>
}

export type ScaffoldNumberFieldProps = {
  type: "NumberField"
  props: NumberFieldProps
}

export type ScaffoldDateFieldProps = {
  type: "DateField"
  props: DateFieldProps
}

export type ScaffoldRadioFieldsProps = {
  type: "RadioFields"
  props: RadioFieldsProps
}

export type ScaffoldComplexRadioFieldsProps = {
  type: "ComplexRadioFields"
  props: ComplexRadioFieldsProps<any>
}

export type ScaffoldSelectFieldProps = {
  type: "SelectField"
  props: SelectFieldProps
}

export type ScaffoldComplexSelectFieldProps = {
  type: "ComplexSelectField"
  props: ComplexSelectFieldProps<any>
}

export type ScaffoldTextAreaFieldProps = {
  type: "TextAreaField"
  props: TextAreaFieldProps
}

export type ScaffoldTextFieldProps = {
  type: "TextField"
  props: TextFieldProps
}

export type ScaffoldTelFieldProps = {
  type: "TelField"
  props: TelFieldProps
}

export type ScaffoldButtonProps = {
  type: "Button"
  props: ButtonProps
}

export type ScaffoldResetButtonProps = {
  type: "ResetButton"
  props: ButtonProps
}

export type ScaffoldSubmitButtonProps = {
  type: "SubmitButton"
  props: ButtonProps
}

export type ScaffoldAvailableFields =
  | ScaffoldArrayFieldProps
  | ScaffoldBooleanProps
  | ScaffoldCheckboxFieldsProps
  | ScaffoldComplexCheckboxFieldsProps
  | ScaffoldDateFieldProps
  | ScaffoldNumberFieldProps
  | ScaffoldRadioFieldsProps
  | ScaffoldComplexRadioFieldsProps
  | ScaffoldSelectFieldProps
  | ScaffoldComplexSelectFieldProps
  | ScaffoldTextAreaFieldProps
  | ScaffoldTextFieldProps
  | ScaffoldTelFieldProps
  | ScaffoldButtonProps
  | ScaffoldResetButtonProps
  | ScaffoldSubmitButtonProps

export type Props = {
  field: ScaffoldAvailableFields
}

const ScaffoldField:React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case "ArrayField":
      return <ArrayField {...field.props} />
    case "Boolean":
      return <BooleanField {...field.props} />
    case "CheckboxFields":
      return <CheckboxFields {...field.props} />
    case "ComplexCheckboxFields":
      return <ComplexCheckboxFields {...field.props} />
    case "DateField":
      return <DateField {...field.props} />
    case "NumberField":
      return <NumberField {...field.props} />
    case "RadioFields":
      return <RadioFields {...field.props} />
    case "ComplexRadioFields":
      return <ComplexRadioFields {...field.props} />
    case "SelectField":
      return <SelectField {...field.props} />
    case "ComplexSelectField":
      return <ComplexSelectField {...field.props} />
    case "TextAreaField":
      return <TextAreaField {...field.props} />
    case "Button":
      return <Button {...field.props} />
    case "ResetButton":
      return <ResetButton {...field.props} />
    case "SubmitButton":
      return <SubmitButton {...field.props} />
    case "TelField":
      return <TelField {...field.props} />
    case "TextField":
    default:
      return <TextField {...field.props} />
  }
}

export default ScaffoldField
