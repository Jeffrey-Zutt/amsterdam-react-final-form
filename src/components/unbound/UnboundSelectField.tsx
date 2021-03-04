import React from "react"
import { Select } from "@amsterdam/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = {
  options: Record<string, string>,
  value?: string,
  withEmptyOption?:boolean,
  emptyOptionLabel?: string
} & ComposedFieldProps & React.InputHTMLAttributes<HTMLSelectElement>

/**
 * Renders a SELECT field that is not bound to final form
 */

const UnboundSelectField:React.FC<Props> = ({
  label,
  extraLabel,
  hint,
  options,
  error,
  position,
  align,
  withEmptyOption,
  emptyOptionLabel,
  ...restProps
}) => (
    <ComposedField
      id={restProps.id ?? restProps.name}
      label={label}
      extraLabel={extraLabel}
      hint={hint}
      error={error}
      position={position}
      align={align}
    >
      <Select
        error={error}
        id={restProps.id ?? restProps.name}
        data-e2e-id={restProps.id ?? restProps.name}
        {...restProps}
      >
        { withEmptyOption && <option>{ emptyOptionLabel ?? "-" }</option> }
        { Object.entries(options)
          .map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))
        }
      </Select>
    </ComposedField>
)

export default UnboundSelectField
