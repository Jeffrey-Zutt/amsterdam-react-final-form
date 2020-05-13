import React from "react"
import ComplexCheckboxFields from "./ComplexCheckboxFields"

export default {
  title: "CheckboxFields/Complex data structure"
}

type MyComplexDataStructure = {
  myLabel: string
  myValue: number,
  something: { nested: { foo: boolean } }
}

export const WithLabel = () => <ComplexCheckboxFields<MyComplexDataStructure>
  name='myFieldName'
  label='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } } },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } } }
  ]}
/>

export const WithoutLabel = () => <ComplexCheckboxFields<MyComplexDataStructure>
  name='myFieldName'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithError = () => <ComplexCheckboxFields<MyComplexDataStructure>
  name='myFieldName'
  validate={() => "Some error occurred"}
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>
