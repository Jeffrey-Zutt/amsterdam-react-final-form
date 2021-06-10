import React from "react"
import { Search, Close } from "@amsterdam/asc-assets"

import Scaffold, { ScaffoldFields } from "./Scaffold"
import ScaffoldField, { ScaffoldAvailableFields } from "./ScaffoldField"

export default {
  title: "Scaffold"
}

const scaffoldArrayProps:ScaffoldAvailableFields = {
 type: "ArrayField",
 props: {
   columns: "1fr 1fr 1fr auto",
   label: "Array Field",
   allowAdd: true,
   allowRemove: true,
   name: "myArray",
   position: { column: 0, row: 0 },
   scaffoldFields: {
     description: {
       type: "TextField",
       props: { name: "description", label: "Description", position: { row: 0, column: 0 } }
     },
     amount: {
       type: "TextField",
       props: { name: "amount", label: "Amount", position: { row: 0, column: 1 } }
     },
     price: {
       type: "TextField",
       props: { name: "price", label: "Price", position: { row: 0, column: 2 } }
     }
   }
 }
}

const scaffoldBooleanProps:ScaffoldAvailableFields = {
  type: "Boolean",
  props: {
    name: "myBoolean",
    label: "Boolean",
    position: { column: 0, row: 1 }
  }
}

const scaffoldCheckboxFieldsProps:ScaffoldAvailableFields = {
  type: "CheckboxFields",
  props: {
    name: "myCheckboxFields",
    label: "Checkbox Fields",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 2 }
  }
}

const scaffoldNumberField:ScaffoldAvailableFields = {
  type: "NumberField",
  props: {
    name: "myNumberField",
    label: "Number Field",
    position: { column: 0, row: 3 }
  }
}

const scaffoldRadioFields:ScaffoldAvailableFields = {
  type: "RadioFields",
  props: {
    name: "myRadioFields",
    label: "Radio Fields",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 4 }
  }
}

const scaffoldSelectField:ScaffoldAvailableFields = {
  type: "SelectField",
  props: {
    name: "mySelectField",
    label: "Select Field",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 5 }
  }
}

const scaffoldTextAreaField:ScaffoldAvailableFields = {
  type: "TextAreaField",
  props: { name: "myTextAreaField", label: "TextArea Field", position: { column: 0, row: 6 } }
}

const scaffoldTextField:ScaffoldAvailableFields = {
  type: "TextField",
  props: { name: "myTextField", label: "Text Field", position: { column: 0, row: 7 } }
}
const scaffoldTextFieldExtraLabelLeft:ScaffoldAvailableFields = {
  type: "TextField",
  props: { name: "myTextField", label: "Text Field", extraLabel: "extra label left", position: { column: 0, row: 7 } }
}
const scaffoldTextFieldExtraLabelRight:ScaffoldAvailableFields = {
  type: "TextField",
  props: { name: "myTextField", label: "Text Field", extraLabel: "extra label right", extraLabelAlign: "right", position: { column: 0, row: 7 } }
}

const fields:ScaffoldFields = {
  "boolean": scaffoldBooleanProps,
  "checkbox": scaffoldCheckboxFieldsProps,
  "number": scaffoldNumberField,
  "array": scaffoldArrayProps,
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
export const SingleTextFieldExtraLabelLeft = () => <ScaffoldField field={scaffoldTextFieldExtraLabelLeft} />
export const SingleTextFieldExtraLabelRight = () => <ScaffoldField field={scaffoldTextFieldExtraLabelRight} />

export const MultipleFields = () => <Scaffold fields={fields} />

export const ComplexGrid = () => <Scaffold columns="1fr 3fr" fields={{
  title: { type: "TextField", props: { label: "Title", name: "title", position: { column: 0, row: 0, columnSpan: 2 } } },
  field1: { type: "TextField", props: { label: "Field 1", name: "field1", hint: "some hint", position: { column: 0, row: 1 } } },
  field2: { type: "TextField", props: { label: "Field 2", extraLabel: "(extra element)", name: "field2", position: { column: 0, row: 2 } } },
  field3: { type: "TextField", props: { label: "Field 3", name: "field3", position: { column: 0, row: 3 }, validate: () => "Some error" } },
  textarea: { type: "TextAreaField", props: { label: "TextArea", name: "textarea", position: { column: 1, row: 1, rowSpan: 3 }, validate: () => "Some error" } },
  field4: { type: "TextField", props: { label: "Field 4", name: "field4", position: { column: 0, row: 4, columnSpan: 2 } } },
  submit: { type: "SubmitButton", props: { label: "Submit", position: { column: 0, row: 5 } } }
}} />


export const ExampleUsingButtons = () => <Scaffold columns="3fr 1fr 1fr auto auto" fields={{
  postcode: { type: "TextField", props: { label: "Postcode", name: "postal_code", validate: () => "error",  position: { column: 0, row: 0 } } },
  houseNo: { type: "TextField", props: { label: "Huisnr.", name: "house_no", position: { column: 1, row: 0 } } },
  extra: { type: "TextField", props: { label: "Hslt. / etage", name: "extra", position: { column: 2, row: 0 } } },
  cancel: { type: "ResetButton", props: { align: "right", variant: "tertiary", type: "reset", alignedHorizontally: true, icon: <Close />, position: { column: 3, row: 0 } } },
  submit: { type: "Button", props: { variant: "secondary", type: "submit", icon: <Search />, alignedHorizontally: true, position: { column: 4, row: 0 } } }
}} />

export const ExampleUsingComplexDataStructures = () => <Scaffold columns="1fr" fields={{
  select: { type: "ComplexSelectField", props: { label: "select", name: "select", optionLabelField: "label", options: [ { label: "foo", value: "foo" }, { label: "bar", value: "bar" } ]} },
  checkbox: { type: "ComplexCheckboxFields", props: { label: "checkbox", name: "checkbox", optionLabelField: "label", options: [ { label: "foo", value: "foo" }, { label: "bar", value: "bar" } ]} },
  radio: { type: "ComplexRadioFields", props: { label: "radio", name: "radio", optionLabelField: "label", options: [ { label: "foo", value: "foo" }, { label: "bar", value: "bar" } ]} }
}} />
