import React from "react"
import DateField from "./DateField"

export default {
  title: "DateField"
}

const today = () => {
  const date = new Date()
  const day = `0${ date.getDate() }`.slice(-2)
  const month = `${ date.getMonth() + 1 }`.slice(-2)
  const year = date.getFullYear()

  return `${ year }-${ month }-${ day }`
}

export const WithLabel = () => <DateField name='myFieldName' label='foo' />
export const WithMinimumToday = () => <DateField name='myFieldName' label='foo' min={today()} />
export const WithMaximumToday = () => <DateField name='myFieldName' label='foo' max={today()} />
export const WithExtraLabel = () => <DateField name='myFieldName' label='foo' extraLabel={<strong>foo</strong>} />
export const WithHint = () => <DateField name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' />
export const WithoutLabel = () => <DateField name='myFieldName' />
export const WithError = () => <DateField name='myFieldName' label='foo' validate={() => "some error occurred"} />
export const WithRequired = () => <DateField name='myFieldName' label='foo' isRequired={true} />
export const WithDisabled = () => <DateField name='myFieldName' label='foo' disabled={true} />


