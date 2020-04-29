import React from "react"
import CheckboxFields from "./CheckboxFields"

export default {
  title: "CheckboxFields"
}

export const WithLabel = () => <CheckboxFields
  name='myFieldName'
  label='foo'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithoutLabel = () => <CheckboxFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithError = () => <CheckboxFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
  validate={() => "Some error occured"}
/>
