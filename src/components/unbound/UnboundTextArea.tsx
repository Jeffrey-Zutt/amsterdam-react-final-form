import React from "react"
import { TextArea } from "@datapunt/asc-ui"
import styled from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const StyledTextArea = styled(TextArea)`
  height: 100%;
`

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({ label, hint, error, position, align, ...otherProps }) =>
  <ComposedField label={label} hint={hint} error={error} position={position} align={align}>
      <StyledTextArea
        error={!!error}
        {...otherProps}
      />
  </ComposedField>

export default UnboundTextArea

