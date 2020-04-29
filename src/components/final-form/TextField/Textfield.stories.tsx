import React from 'react';
import TextField from "./TextField";

export default {
  title: 'TextField',
};

export const WithLabel = () => <TextField name='myFieldName' label='foo' />
export const WithoutLabel = () => <TextField name='myFieldName' />
export const WithError = () => <TextField name='myFieldName' label='foo' validate={() => 'some error occured'} />

