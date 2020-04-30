import React from "react"
import { TextArea } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"

type StyleProps = {
  error?: string | boolean
}

export type Props = {
  label?: string
  error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({ label, error, ...otherProps }) => <>
  <Label label={label}>
    <TextArea
      error={!!error}
      {...otherProps}
    />
  </Label>
  { error && (<FieldError>{ error }</FieldError>) }
</>

export default UnboundTextArea

