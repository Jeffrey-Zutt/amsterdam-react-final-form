import React from "react"
import { TextArea } from "@datapunt/asc-ui"
import styled from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const StyledTextArea = styled(TextArea)`
  min-height: 100px;
  flex: 1;
`

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({ label, hint, error, position, align, ...otherProps }) =>
  <ComposedField id={otherProps.id ?? otherProps.name} label={label} hint={hint} error={error} position={position} align={align}>
      <StyledTextArea
        id={otherProps.id ?? otherProps.name}
        error={!!error}
        {...otherProps}
      />
  </ComposedField>

export default UnboundTextArea

