import React from 'react';
import ComplexSelectField from "./ComplexSelectField";

export default {
  title: 'SelectField/Complex data structure',
};

type MyComplexDataStructure = {
  myLabel: string
  myValue: number
}

export const WithLabel = () => <ComplexSelectField<MyComplexDataStructure>
  name='foo'
  label='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1 },
    { myLabel: 'My Label 2', myValue: 2 }
  ]}
/>

export const WithoutLabel = () => <ComplexSelectField<MyComplexDataStructure>
  name='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1 },
    { myLabel: 'My Label 2', myValue: 2 }
  ]}
/>

export const WithError = () => <ComplexSelectField<MyComplexDataStructure>
  name='foo'
  validate={() => 'Some error occured'}
  optionLabelField='myLabel'
  options={[
    { myLabel: 'My Label 1', myValue: 1 },
    { myLabel: 'My Label 2', myValue: 2 }
  ]}
/>
