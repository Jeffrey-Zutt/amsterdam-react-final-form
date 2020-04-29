import React from 'react';
import ComplexCheckboxes from "./ComplexCheckboxes";

export default {
  title: 'Checkboxes/Complex data structure',
};

type MyComplexDataStructure = {
  myLabel: string
  myValue: number,
  something: { nested: { foo: boolean } }
}

export const WithLabel = () => <ComplexCheckboxes<MyComplexDataStructure>
  name='myFieldName'
  label='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1, something: { nested: { foo: true } } },
    { myLabel: 'My Label 2', myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithoutLabel = () => <ComplexCheckboxes<MyComplexDataStructure>
  name='myFieldName'
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: 'My Label 2', myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithError = () => <ComplexCheckboxes<MyComplexDataStructure>
  name='myFieldName'
  validate={() => 'Some error occured'}
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: 'My Label 2', myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>
