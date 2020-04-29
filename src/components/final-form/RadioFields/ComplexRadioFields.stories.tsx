import React from "react"
import ComplexRadioFields from "./ComplexRadioFields"

export default {
  title: "RadioFields/Complex data structure"
}

type MyComplexDataStructure = {
  myLabel: string
  myValue: number,
  something: { nested: { foo: boolean } }
}

export const WithLabel = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  label='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } } },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithoutLabel = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithError = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  validate={() => "Some error occured"}
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>
