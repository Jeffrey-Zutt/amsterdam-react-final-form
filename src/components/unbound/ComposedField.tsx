import React from "react"
import { Label } from "./Label"
import { Hint } from "./Hint"
import { FieldError } from "./FieldError"
import FormGridCell, { FormGridCellProps } from "../layout/FormGridCell"

export type ComposedFieldProps = {
  id?:string
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: "left" | "right"
  hint?: string|JSX.Element
  error?: string
} & Omit<FormGridCellProps, "rowOffset">

const ComposedField:React.FC<ComposedFieldProps> = ({ children, id, label, extraLabel, extraLabelAlign, hint, error, position, align }) => (
  <>
    {/*
      We position labels and hints in the same cell.
      All labels in a row should be aligned neatly.
    */}
    { (hint || label) && (
      <FormGridCell position={position} align={align}>
        <Label label={label} extraLabel={extraLabel} extraLabelAlign={extraLabelAlign} htmlFor={id} />
        { hint && <Hint>{ hint }</Hint> }
      </FormGridCell>
    ) }

    {/*
      We position field and errors in the same cell.
      All fields in a row should be aligned neatly.
    */}
    <FormGridCell position={position} align={align} rowOffset={1}>
      { children }
      { error && <FieldError>{ error }</FieldError> }
    </FormGridCell>
  </>
)

export default ComposedField
