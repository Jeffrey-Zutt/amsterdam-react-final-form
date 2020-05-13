import React from "react"
import { TextArea } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"
import { Hint } from "./Hint"

type StyleProps = {
  error?: string | boolean
}

export type Props = {
  label?: string
  hint?: string|JSX.Element,
  error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({ label, hint, error, ...otherProps }) => <>
  <Label label={label}>
    <>
      { hint && <Hint>{hint}</Hint>}
      <TextArea
        error={!!error}
        {...otherProps}
      />
    </>
  </Label>
  { error && (<FieldError>{ error }</FieldError>) }
</>

export default UnboundTextArea

