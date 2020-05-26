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
  props: ArrayFieldProps & Required<Pick<ArrayFieldProps, "position">>
}

export type ScaffoldBooleanProps = {
  type: "Boolean"
  props: BooleanProps & Required<Pick<BooleanProps, "position">>
}

export type ScaffoldCheckboxFieldsProps = {
  type: "CheckboxFields"
  props: CheckboxProps & Required<Pick<CheckboxProps, "position">>
}

export type ScaffoldNumberFieldProps = {
  type: "NumberField"
  props: NumberFieldProps & Required<Pick<NumberFieldProps, "position">>
}

export type ScaffoldRadioFieldsProps = {
  type: "RadioFields"
  props: RadioFieldsProps & Required<Pick<RadioFieldsProps, "position">>
}

export type ScaffoldSelectFieldProps = {
  type: "SelectField"
  props: SelectFieldProps & Required<Pick<SelectFieldProps, "position">>
}

export type ScaffoldTextAreaFieldProps = {
  type: "TextAreaField"
  props: TextAreaFieldProps & Required<Pick<TextAreaFieldProps, "position">>
}

export type ScaffoldTextFieldProps = {
  type: "TextField"
  props: TextFieldProps & Required<Pick<TextFieldProps, "position">>
}

export type ScaffoldButtonProps = {
  type: "Button"
  props: ButtonProps & Required<Pick<ButtonProps, "position">>
}

export type ScaffoldFieldProps =
  | ScaffoldArrayFieldProps
  | ScaffoldBooleanProps
  | ScaffoldCheckboxFieldsProps
  | ScaffoldNumberFieldProps
  | ScaffoldRadioFieldsProps
  | ScaffoldSelectFieldProps
  | ScaffoldTextAreaFieldProps
  | ScaffoldTextFieldProps
  | ScaffoldButtonProps

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
