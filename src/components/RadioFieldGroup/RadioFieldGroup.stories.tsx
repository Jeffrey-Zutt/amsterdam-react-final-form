import React from 'react';
import RadioFieldGroup from "./RadioFieldGroup";

export default {
  title: 'RadioFieldGroup/Simple data structure',
};

export const WithLabel = () => <RadioFieldGroup
  name='foo'
  label='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

export const WithoutLabel = () => <RadioFieldGroup
  name='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

export const Horizontal = () => <RadioFieldGroup
  label='Foo'
  horizontal={true}
  name='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
/>

// type MyComplexDataStructure = {
//   myLabel: string
//   myValue: number
// }
//
// export const WithComplexDataType = () => <RadioFieldGroup<MyComplexDataStructure>
//   name='foo'
//   label='foo'
//   complexOptionLabelField={'myLabel'}
//   complexOptions={[
//     { myLabel: 'My Label 1', myValue: 1 },
//     { myLabel: 'My Label 2', myValue: 2 },
//   ]} />

export const WithError = () => <RadioFieldGroup
  name='foo'
  options={{ foo: 'Foo', bar: 'Bar' }}
  validate={() => 'Some error occured'}
/>
//

