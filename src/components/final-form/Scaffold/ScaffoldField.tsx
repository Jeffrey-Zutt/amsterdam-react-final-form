import React from "react"

import ArrayField, { Props as ArrayFieldProps } from "../ArrayField/ArrayField"
import BooleanField, { Props as BooleanProps } from "../BooleanField/BooleanField"
import CheckboxFields, { Props as CheckboxProps } from "../CheckboxFields/CheckboxFields"
import NumberField, { Props as NumberFieldProps } from "../NumberField/NumberField"
import RadioFields, { Props as RadioFieldsProps } from "../RadioFields/RadioFields"
import SelectField, { Props as SelectFieldProps } from "../SelectField/SelectField"
import TextAreaField, { Props as TextAreaFieldProps } from "../TextAreaField/TextAreaField"
import TextField, { Props as TextFieldProps } from "../TextField/TextField"
import UnboundButton , { Props as ButtonProps } from "../../unbound/UnboundButton"

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

export type ScaffoldNumberFieldProps = {
  type: "NumberField"
  props: NumberFieldProps
}

export type ScaffoldRadioFieldsProps = {
  type: "RadioFields"
  props: RadioFieldsProps
}

export type ScaffoldSelectFieldProps = {
  type: "SelectField"
  props: SelectFieldProps
}

export type ScaffoldTextAreaFieldProps = {
  type: "TextAreaField"
  props: TextAreaFieldProps
}

export type ScaffoldTextFieldProps = {
  type: "TextField"
  props: TextFieldProps
}

export type ScaffoldButtonProps = {
  type: "Button"
  props: ButtonProps
}

export type ScaffoldAvailableFields =
  | ScaffoldArrayFieldProps
  | ScaffoldBooleanProps
  | ScaffoldCheckboxFieldsProps
  | ScaffoldNumberFieldProps
  | ScaffoldRadioFieldsProps
  | ScaffoldSelectFieldProps
  | ScaffoldTextAreaFieldProps
  | ScaffoldTextFieldProps
  | ScaffoldButtonProps

// Make position required:
export type ScaffoldFieldProps =
  ScaffoldAvailableFields & { props: ScaffoldAvailableFields["props"] & Required<Pick<ScaffoldAvailableFields["props"], "position">> }

export type Props = {
  field: ScaffoldFieldProps
}

const ScaffoldField:React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case "ArrayField":
      return <ArrayField {...field.props} />
    case "Boolean":
      return <BooleanField {...field.props} />
    case "CheckboxFields":
      return <CheckboxFields {...field.props} />
    case "NumberField":
      return <NumberField {...field.props} />
    case "RadioFields":
      return <RadioFields {...field.props} />
    case "SelectField":
      return <SelectField {...field.props} />
    case "TextAreaField":
      return <TextAreaField {...field.props} />
    case "Button":
      return <UnboundButton {...field.props} />
    case "TextField":
    default:
      return <TextField {...field.props} />
  }
}

export default ScaffoldField
