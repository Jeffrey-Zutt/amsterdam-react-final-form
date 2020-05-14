import React from "react"
import ArrayField from "./ArrayField"

export default {
  title: "ArrayField"
}

export const Array = () => <ArrayField
  name='myArray'
  allowAdd={true}
  allowRemove={true}
  scaffoldFields={{
    description: {
      type: "TextField",
      props: { name: "description", label: "Description" }
    },
    amount: {
      type: "NumberField",
      props: { name: "amount", label: "Amount" }
    },
    price: {
      type: "NumberField",
      props: { name: "price", label: "Price" }
    }
  }}
/>
