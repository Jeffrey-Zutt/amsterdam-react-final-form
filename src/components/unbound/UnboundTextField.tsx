import React from "react"
import { Input } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"
import { Hint } from "./Hint"

export type Props = {
  label?: string
  hint?: string|JSX.Element,
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

/**
 * Renders a INPUT field that is not bound to final-form.
 */

const UnboundTextField:React.FC<Props> = ({ label, hint, error, ...otherProps }) => <>
    <Label label={label}>
      <>
        { hint && <Hint> {hint} </Hint>}
        <Input
          error={!!error}
          {...otherProps}
        />
      </>
    </Label>
    { error && (<FieldError>{ error }</FieldError>) }
  </>

export default UnboundTextField
