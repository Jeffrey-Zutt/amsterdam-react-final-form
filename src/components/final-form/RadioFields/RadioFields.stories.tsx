import React from "react"
import RadioFields from "./RadioFields"

export default {
  title: "RadioFields"
}

export const WithLabel = () => <RadioFields
  name='myFieldName'
  label='foo'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithHint = () => <RadioFields
  name='myFieldName'
  label='foo'
  hint='Nullam quis risus eget urna mollis ornare vel eu leo.'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithoutLabel = () => <RadioFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const Horizontal = () => <RadioFields
  label='Foo'
  horizontal={true}
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithError = () => <RadioFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
  validate={() => "Some error occurred"}
/>

