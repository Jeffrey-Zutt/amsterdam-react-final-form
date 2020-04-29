import React from "react"
import NumberField from "./NumberField"

export default {
  title: "NumberField"
}

export const WithLabel = () => <NumberField name='myFieldName' label='foo' />
export const WithoutLabel = () => <NumberField name='myFieldName' />
export const WithMinMax = () => <NumberField name='myFieldName' min={0} max={20} />
export const WithError = () => <NumberField name='myFieldName' label='foo' validate={() => "some error occured"} />

