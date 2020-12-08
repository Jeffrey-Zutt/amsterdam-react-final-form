import React from "react"
import { themeColor, themeSpacing } from "@amsterdam/asc-ui"
import styled from "styled-components"

import ArrayField from "./ArrayField"
import { ScaffoldFields } from "../Scaffold/Scaffold"

export default {
  title: "ArrayField"
}

const fields:ScaffoldFields = {
  description: {
    type: "TextField",
    props: {
      name: "description",
      label: "Description",
      validate: () => "Error"
    }
  },
  amount: {
    type: "NumberField",
    props: {
      name: "amount",
      label: "Amount"
    }
  },
  price: {
    type: "NumberField",
    props: {
      name: "price",
      label: "Price",
      hint: ""
    }
  }
}

const Pre = styled.pre`
  background-color: ${ themeColor("tint", "level2") };
  padding: ${ themeSpacing(3) };
`

export const Array = () =>
<>
  <Pre>// Voorbeeld van het scaffoldFields object </Pre>
  <Pre>{ JSON.stringify(fields, null, 2) }</Pre>
  <ArrayField
    columns='1fr 1fr 1fr auto'
    name='myArray'
    allowAdd={true}
    allowRemove={true}
    scaffoldFields={fields}
  />
</>

export const WithMinItems = () =>
  <ArrayField
    columns='1fr 1fr 1fr auto'
    name='myArray'
    allowAdd={true}
    allowRemove={true}
    scaffoldFields={fields}
    minItems={3}
  />

export const WithLabel = () => <ArrayField
  columns='1fr 1fr 1fr auto'
  label='My label'
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
/>

export const WithHint = () => <ArrayField
  columns='1fr 1fr 1fr auto'
  label='My label'
  hint='Maecenas faucibus mollis interdum.'
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
/>
