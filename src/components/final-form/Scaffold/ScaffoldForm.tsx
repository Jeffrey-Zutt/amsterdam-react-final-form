import React, { PropsWithChildren, useCallback } from "react"
import { themeColor, Spinner } from "@amsterdam/asc-ui"
import styled from "styled-components"
import { Form, FormProps } from "react-final-form"
import { FormApi, SubmissionErrors } from "final-form"
import arrayMutators from "final-form-arrays"

type Props<FormValues> = Omit<FormProps<FormValues>, "onSubmit"> & {
  showSpinner?: boolean
  onSubmit?: (values:FormValues) => ReturnType<FormProps<FormValues>["onSubmit"]>
  onOriginalSubmit?: FormProps<FormValues>["onSubmit"]
  onReset?: () => void
}

const Wrap = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  
  background-color: ${ themeColor("tint", "level1") };
  opacity: .8;
  z-index: 100;
`

const CenteredSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

function ScaffoldForm<T>({ onReset, onSubmit, onOriginalSubmit, children, showSpinner, ...restProps }:PropsWithChildren<Props<T>>) {
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
      mutators={{
        ...arrayMutators
      }}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <Wrap>
          { showSpinner && (<Overlay><CenteredSpinner size={44} /></Overlay>) }
          <form onSubmit={handleSubmit} onReset={onReset}>
            { children }
          </form>
        </Wrap>
      )}
    />
  )
}

export default ScaffoldForm
