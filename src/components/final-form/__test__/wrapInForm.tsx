import { Form } from "react-final-form"
import arrayMutators from "final-form-arrays"
import React from "react"
import { ThemeProvider } from "@datapunt/asc-ui"

export const wrapInForm = (
  onSubmit:jest.Mock,
  initialValues: any,
  components: JSX.Element
) => (
  <ThemeProvider>
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
  </ThemeProvider>
)
