import React from 'react';
import TextField from "./TextField";

export default {
  title: 'TextField',
};

export const WithLabel = () => <TextField name='foo' label='foo' />
export const WithoutLabel = () => <TextField name='foo' />
export const WithError = () => <TextField name='foo' label='foo' validate={() => 'some error occured'} />

