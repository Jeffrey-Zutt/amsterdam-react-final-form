import React from "react"
import { Input } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.InputHTMLAttributes<HTMLInputElement>

/**
 * Renders a INPUT field that is not bound to final-form.
 */

const UnboundTextField:React.FC<Props> = ({ label, hint, error, position, align, ...otherProps }) =>
  <ComposedField label={label} hint={hint} error={error} position={position} align={align}>
    <Input
      error={!!error}
      {...otherProps}
    />
  </ComposedField>

export default UnboundTextField
