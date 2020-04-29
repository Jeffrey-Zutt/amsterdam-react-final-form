import React from 'react';
import Checkboxes from "./Checkboxes";

export default {
  title: 'Checkboxes',
};

export const WithLabel = () => <Checkboxes
  name='myFieldName'
  label='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

export const WithoutLabel = () => <Checkboxes
  name='myFieldName'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

export const WithError = () => <Checkboxes
  name='myFieldName'
  options={{ foo: 'Foo', bar: 'Bar' }}
  validate={() => 'Some error occured'}
/>
