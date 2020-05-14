import React from "react"

import Scaffold from "./Scaffold"

import ScaffoldField, {
  ScaffoldBooleanProps,
  ScaffoldCheckboxFieldsProps,
  ScaffoldNumberFieldProps,
  ScaffoldRadioFieldsProps,
  ScaffoldSelectFieldProps,
  ScaffoldTextAreaFieldProps,
  ScaffoldTextFieldProps
} from "./ScaffoldField"

export default {
  title: "Scaffold"
}

const scaffoldBooleanProps:ScaffoldBooleanProps = {
  type: "Boolean",
  props: {
    name: "myBoolean",
    label: "Boolean"
  }
}

const scaffoldCheckboxFieldsProps:ScaffoldCheckboxFieldsProps = {
  type: "CheckboxFields",
  props: {
    name: "myCheckboxFields",
    label: "Checkbox Fields",
    options: { foo: "foo", bar: "bar" }
  }
}

const scaffoldNumberField:ScaffoldNumberFieldProps = {
  type: "NumberField",
  props: {
    name: "myNumberField",
    label: "Number Field"
  }
}

const scaffoldRadioFields:ScaffoldRadioFieldsProps = {
  type: "RadioFields",
  props: {
    name: "myRadioFields",
    label: "Radio Fields",
    options: { foo: "foo", bar: "bar" }
  }
}

const scaffoldSelectField:ScaffoldSelectFieldProps = {
  type: "SelectField",
  props: {
    name: "mySelectField",
    label: "Select Field",
    options: { foo: "foo", bar: "bar" }
  }
}

const scaffoldTextAreaField:ScaffoldTextAreaFieldProps = {
  type: "TextAreaField",
  props: { name: "myTextAreaField", label: "TextArea Field" }
}

const scaffoldTextField:ScaffoldTextFieldProps = {
  type: "TextField",
  props: { name: "myTextField", label: "Text Field" }
}

const fields = {
  "boolean": scaffoldBooleanProps,
  "checkbox": scaffoldCheckboxFieldsProps,
  "number": scaffoldNumberField,
  "radio": scaffoldRadioFields,
  "select": scaffoldSelectField,
  "textarea": scaffoldTextAreaField,
  "text": scaffoldTextField
}

export const SingleBoolean = () => <ScaffoldField field={scaffoldBooleanProps} />
export const SingleCheckboxFields = () => <ScaffoldField field={scaffoldCheckboxFieldsProps} />
export const SingleNumberField = () => <ScaffoldField field={scaffoldNumberField} />
export const SingleRadioFields = () => <ScaffoldField field={scaffoldRadioFields} />
export const SingleSelectField = () => <ScaffoldField field={scaffoldSelectField} />
export const SingleTextAreaField = () => <ScaffoldField field={scaffoldTextAreaField} />
export const SingleTextField = () => <ScaffoldField field={scaffoldTextField} />

export const MultipleFields = () => <Scaffold fields={fields} />
