import React, { PropsWithChildren } from "react"
import { Form, FormProps } from "react-final-form"

import Scaffold from "./Scaffold"

type Props<FormValues> = FormProps<FormValues> & {
  onReset?: () => void
  scaffoldProps: React.ComponentProps<typeof Scaffold>
}

function ScaffoldForm<T>({ onReset, scaffoldProps, ...restProps }:PropsWithChildren<Props<T>>) {
  return (<Form
      {...restProps}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} onReset={onReset}>
          <Scaffold {...scaffoldProps} />
        </form>
      )}
    />
  )
}

export default ScaffoldForm
