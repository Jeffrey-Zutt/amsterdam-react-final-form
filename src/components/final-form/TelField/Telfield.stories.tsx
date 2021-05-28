import React from "react"
import TelField from "./TelField"

export default {
  title: "TelField"
}

export const WithLabel = () => <TelField name='myFieldName' label='foo' />
export const WithExtraLabel = () => <TelField name='myFieldName' label='foo' extraLabel={<strong>foo</strong>} />
export const WithHint = () => <TelField name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' />
export const WithoutLabel = () => <TelField name='myFieldName' />
export const WithError = () => <TelField name='myFieldName' label='foo' validate={() => "some error occurred"} />
export const WithRequired = () => <TelField name='myFieldName' label='foo' isRequired={true} />
export const WithDisabled = () => <TelField name='myFieldName' label='foo' disabled={true} />

