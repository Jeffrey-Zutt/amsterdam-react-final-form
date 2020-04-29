import React from "react"
import { Input } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"

export type Props = {
  label?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

/**
 * Renders a INPUT field that is not bound to final-form.
 */

const UnboundTextField:React.FC<Props> = ({ label, error, ...otherProps }) => <>
    <Label label={label}>
      <Input
        error={error}
        {...otherProps}
      />
    </Label>
    { error && (<FieldError>{ error }</FieldError>) }
  </>

export default UnboundTextField
