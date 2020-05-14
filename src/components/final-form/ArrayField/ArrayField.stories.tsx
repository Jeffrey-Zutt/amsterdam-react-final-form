import React from "react"
import ArrayField from "./ArrayField"
import { ScaffoldFields } from "../Scaffold/Scaffold"

export default {
  title: "ArrayField"
}

const fields:ScaffoldFields = {
  description: {
    type: "TextField",
    props: { name: "description", label: "Description", validate: () => "error" }
  },
  amount: {
    type: "NumberField",
    props: { name: "amount", label: "Amount", hint: "" }
  },
  price: {
    type: "NumberField",
    props: { name: "price", label: "Price", hint: "" }
  }
}


export const Array = () => <ArrayField
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
/>

export const WithLabel = () => <ArrayField
  label='My label'
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
/>

export const WithHint = () => <ArrayField
  label='My label'
  hint='Maecenas faucibus mollis interdum.'
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
/>
