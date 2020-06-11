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

export const WithHint = () => <CheckboxFields
  name='myFieldName'
  label='foo'
  hint='Nullam quis risus eget urna mollis ornare vel eu leo.'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithoutLabel = () => <CheckboxFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithError = () => <CheckboxFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
  validate={() => "Some error occurred"}
/>

export const WithColumnCount = () => {
  // Make 50 options:
  const num = 50
  const options = [...Array(num)]
    .map((_, index) => `item ${ index }`)
    .reduce(
      (acc, item) => ({ ...acc, [item]: item }),
      {}
    )

  return <CheckboxFields
    name='myFieldName'
    options={options}
    columnCount={{ mobileS: 1, laptop: Math.ceil(num / 10) }}
  />
}

export const WithRequired = () => <CheckboxFields
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
  isRequired={true}
/>
