import React, { PropsWithChildren } from "react"
import { Form, FormProps } from "react-final-form"

type Props<FormValues> = FormProps<FormValues> & {
  onReset?: () => void
}

function ScaffoldForm<T>({ onReset, children, ...restProps }:PropsWithChildren<Props<T>>) {
  return (<Form<T>
      {...restProps}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} onReset={onReset}>
          { children }
        </form>
      )}
    />
  )
}

export default ScaffoldForm
