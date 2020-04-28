import React from 'react';
import SelectField from "./SelectField";

export default {
  title: 'SelectField',
};

export const WithLabel = () => <SelectField
  name='foo'
  label='foo'
  options={{ '': '-', foo: 'Foo', bar: 'Bar' }}
/>

export const WithoutLabel = () => <SelectField
  name='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

export const WithError = () => <SelectField
  name='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
  validate={() => 'Some error occured'}
/>

type MyComplexDataStructure = {
  myLabel: string
  myValue: number
}

export const WithComplexDataType = () => <SelectField<MyComplexDataStructure>
  name='foo'
  label='foo'
  complexOptionLabelField='myLabel'
  complexOptions={[
    { myLabel: 'My Label 1', myValue: 1 },
    { myLabel: 'My Label 2', myValue: 2 }
  ]} />
