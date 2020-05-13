import React from "react"
import TextAreaField from "./TextAreaField"

export default {
  title: "TextArea"
}

export const WithLabel = () => <TextAreaField name='myFieldName' label='foo' />
export const WithHint = () => <TextAreaField name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' />
export const WithoutLabel = () => <TextAreaField name='myFieldName' />
export const WithError = () => <TextAreaField name='myFieldName' label='foo' validate={() => "some error occured"} />

