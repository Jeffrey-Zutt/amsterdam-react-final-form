import React from "react"
import { Form } from "react-final-form"

import Scaffold from "./Scaffold"

type Props = React.ComponentProps<typeof Form> & {
  onReset?: () => void
  scaffoldProps: React.ComponentProps<typeof Scaffold>
}

const ScaffoldForm: React.FC<Props> = ({ onReset, scaffoldProps, ...restProps }) => (
  <Form
    {...restProps}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} onReset={onReset}>
        <Scaffold {...scaffoldProps} />
      </form>
    )}
  />
)

export default ScaffoldForm
