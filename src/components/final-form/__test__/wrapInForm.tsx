import { Form } from "react-final-form"
import arrayMutators from "final-form-arrays"
import React from "react"

export const wrapInForm = (
  onSubmit:jest.Mock,
  initialValues: any,
  components: JSX.Element
) => (
  <Form
    onSubmit={onSubmit}
    mutators={ { ...arrayMutators } }
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        { components }
      </form>
    )}
  />
)
