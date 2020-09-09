import React from "react"
import { Input } from "@datapunt/asc-ui"
import styled from "styled-components"

import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.InputHTMLAttributes<HTMLInputElement>

/**
 * Renders a INPUT field that is not bound to final-form.
 */

const StyledInput = styled(Input)`
  min-height: ${ props => props.type === "time" ? "40px" : "auto" };
`

const UnboundTextField:React.FC<Props> = ({ label, extraLabel, hint, error, position, align, ...otherProps }) =>
  <ComposedField id={otherProps.id ?? otherProps.name} label={label} extraLabel={extraLabel} hint={hint} error={error} position={position} align={align}>
    <StyledInput
      error={!!error}
      id={otherProps.id ?? otherProps.name}
      data-e2e-id={otherProps.id ?? otherProps.name}
      {...otherProps}
    />
  </ComposedField>

export default UnboundTextField
