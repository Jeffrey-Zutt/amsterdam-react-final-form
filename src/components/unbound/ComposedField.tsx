import React from "react"
import { Label } from "./Label"
import { Hint } from "./Hint"
import { FieldError } from "./FieldError"

export type ComposedFieldProps = {
  id?:string
  label?: string
  hint?: string|JSX.Element
  error?: string
}

const ComposedField:React.FC<ComposedFieldProps> = ({ children, id, label, hint, error }) => (
  <>
    <Label label={label} htmlFor={id} />
    { hint && <Hint>{ hint }</Hint>}
    { children }
    { error && (<FieldError>{ error }</FieldError>) }
  </>
)

export default ComposedField
