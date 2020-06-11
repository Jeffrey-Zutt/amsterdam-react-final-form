import React from "react"
import BooleanField from "./BooleanField"

export default {
  title: "BooleanField"
}

export const WithLabel = () => <BooleanField
  name='myFieldName'
  label='foo'
/>

export const WithHint = () => <BooleanField
  name='myFieldName'
  label='foo'
  hint='Nullam quis risus eget urna mollis ornare vel eu leo.'
/>

export const WithoutLabel = () => <BooleanField
  name='myFieldName'
/>

export const WithError = () => <BooleanField
  name='myFieldName'
  validate={() => "Some error occurred"}
/>

export const WithRequired = () => <BooleanField
  name="myFieldName"
  isRequired={true}
/>
