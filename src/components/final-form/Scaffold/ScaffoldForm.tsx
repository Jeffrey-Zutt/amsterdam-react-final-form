import React, { PropsWithChildren, useCallback } from "react"
import { Form, FormProps } from "react-final-form"
import { FormApi, SubmissionErrors } from "final-form"

type Props<FormValues> = Omit<FormProps<FormValues>, "onSubmit"> & {
  successComponent?: JSX.Element
  errorComponent?: JSX.Element
  onSubmit?: (values:FormValues) => ReturnType<FormProps<FormValues>["onSubmit"]>
  onOriginalSubmit?: FormProps<FormValues>["onSubmit"]
  onReset?: () => void
}

function ScaffoldForm<T>({ onReset, onSubmit, onOriginalSubmit, children, successComponent, errorComponent, ...restProps }:PropsWithChildren<Props<T>>) {
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
          { submitFailed && errorComponent }
          { submitSucceeded && successComponent
              ? successComponent
              : children
          }
        </form>
      )}
    />
  )
}

export default ScaffoldForm
