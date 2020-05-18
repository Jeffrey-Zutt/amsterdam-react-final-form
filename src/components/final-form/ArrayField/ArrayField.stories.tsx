import React from "react"
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
      validate: () => "error",
      position: { row: 0, column: 0 }
    }
  },
  amount: {
    type: "NumberField",
    props: {
      name: "amount",
      label: "Amount",
      position: { row: 0, column: 1 }
    }
  },
  price: {
    type: "NumberField",
    props: {
      name: "price",
      label: "Price",
      hint: "",
      position: { row: 0, column: 2 }
    }
  }
}

export const Array = () => <ArrayField
  columns='1fr 1fr 1fr auto'
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={fields}
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
