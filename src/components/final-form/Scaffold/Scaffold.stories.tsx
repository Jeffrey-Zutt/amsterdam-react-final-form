import React from "react"

import Scaffold from "./Scaffold"

import ScaffoldField, {
  ScaffoldArrayFieldProps,
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

const scaffoldArrayProps:ScaffoldArrayFieldProps = {
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

const scaffoldBooleanProps:ScaffoldBooleanProps = {
  type: "Boolean",
  props: {
    name: "myBoolean",
    label: "Boolean",
    position: { column: 0, row: 1 }
  }
}

const scaffoldCheckboxFieldsProps:ScaffoldCheckboxFieldsProps = {
  type: "CheckboxFields",
  props: {
    name: "myCheckboxFields",
    label: "Checkbox Fields",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 2 }
  }
}

const scaffoldNumberField:ScaffoldNumberFieldProps = {
  type: "NumberField",
  props: {
    name: "myNumberField",
    label: "Number Field",
    position: { column: 0, row: 3 }
  }
}

const scaffoldRadioFields:ScaffoldRadioFieldsProps = {
  type: "RadioFields",
  props: {
    name: "myRadioFields",
    label: "Radio Fields",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 4 }
  }
}

const scaffoldSelectField:ScaffoldSelectFieldProps = {
  type: "SelectField",
  props: {
    name: "mySelectField",
    label: "Select Field",
    options: { foo: "foo", bar: "bar" },
    position: { column: 0, row: 5 }
  }
}

const scaffoldTextAreaField:ScaffoldTextAreaFieldProps = {
  type: "TextAreaField",
  props: { name: "myTextAreaField", label: "TextArea Field", position: { column: 0, row: 6 } }
}

const scaffoldTextField:ScaffoldTextFieldProps = {
  type: "TextField",
  props: { name: "myTextField", label: "Text Field", position: { column: 0, row: 7 } }
}

const fields = {
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

export const MultipleFields = () => <Scaffold fields={fields} />

export const ComplexGrid = () => <Scaffold columns="1fr 3fr" fields={{
  title: { type: "TextField", props: { label: "Title", name: "title", position: { column: 0, row: 0, columnSpan: 2 } } },
  field1: { type: "TextField", props: { label: "Field 1", name: "field1", hint: "some hint", position: { column: 0, row: 1 } } },
  field2: { type: "TextField", props: { label: "Field 1", name: "field2", position: { column: 0, row: 2 } } },
  field3: { type: "TextField", props: { label: "Field 1", name: "field3", position: { column: 0, row: 3 } } },
  textarea: { type: "TextAreaField", props: { label: "TextArea", name: "textarea", position: { column: 1, row: 1, rowSpan: 3 } } },
  field4: { type: "TextField", props: { label: "Field 4", name: "field4", position: { column: 0, row: 4, columnSpan: 2 } } }
}} />
