import React from 'react';
import SelectField from "./SelectField";

export default {
  title: 'SelectField/Simple data structure',
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
