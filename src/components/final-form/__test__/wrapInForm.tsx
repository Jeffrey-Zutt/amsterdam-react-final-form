import { Form } from "react-final-form"
import React from "react"

export const wrapInForm = (
  onSubmit:jest.Mock,
  initialValues: any,
  components: JSX.Element
) => (
  <Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        { components }
      </form>
    )}
  />
)
