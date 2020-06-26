import React, { ComponentProps, PropsWithChildren, useCallback } from "react"
import { Form, FormProps } from "react-final-form"
import { FormApi, SubmissionErrors } from "final-form"

import Alert from "../../unbound/Alert"

type Props<FormValues> = Omit<FormProps<FormValues>, "onSubmit"> & {
  successMessage?: ComponentProps<typeof Alert>
  errorMessage?: ComponentProps<typeof Alert>
  onSubmit?: (values:FormValues) => ReturnType<FormProps<FormValues>["onSubmit"]>
  onOriginalSubmit?: FormProps<FormValues>["onSubmit"]
  onReset?: () => void
}

function ScaffoldForm<T>({ onReset, onSubmit, onOriginalSubmit, children, successMessage, errorMessage, ...restProps }:PropsWithChildren<Props<T>>) {
  const handleSubmit = useCallback(
    (values:T, form: FormApi<T>, callback?: (errors?: SubmissionErrors) => void) => {
      if (onOriginalSubmit !== undefined) {
        return onOriginalSubmit(values, form, callback)
      }
      if (onSubmit !== undefined) {
        return onSubmit(values)
      }
      return undefined
    },
    [onSubmit, onOriginalSubmit]
  )

  return (<Form<T>
      {...restProps}
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitSucceeded, submitFailed }) => (
        <form onSubmit={handleSubmit} onReset={onReset}>
          { submitFailed && errorMessage && (<Alert variant="error" {...errorMessage} />) }
          {
            submitSucceeded && successMessage
              ? <Alert variant="success" {...successMessage} />
              : children
          }
        </form>
      )}
    />
  )
}

export default ScaffoldForm
