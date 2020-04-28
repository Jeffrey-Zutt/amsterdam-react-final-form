import React from 'react';
import NumberField from "./NumberField";

export default {
  title: 'NumberField',
};

export const WithLabel = () => <NumberField name='foo' label='foo' />
export const WithoutLabel = () => <NumberField name='foo' />
export const WithMinMax = () => <NumberField name='foo' min={0} max={20} />
export const WithError = () => <NumberField name='foo' label='foo' validate={() => 'some error occured'} />

