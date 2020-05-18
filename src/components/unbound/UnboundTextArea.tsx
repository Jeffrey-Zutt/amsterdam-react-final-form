import React from "react"
import { TextArea } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({ label, hint, error, ...otherProps }) =>
  <ComposedField label={label} hint={hint} error={error}>
      <TextArea
        error={!!error}
        {...otherProps}
      />
  </ComposedField>

export default UnboundTextArea

