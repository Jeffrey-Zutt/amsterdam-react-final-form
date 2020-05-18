import React from "react"
import { Select } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = {
  options: Record<string, string>,
  value?: string,
  withEmptyOption?:boolean
} & ComposedFieldProps & React.HTMLAttributes<HTMLSelectElement>

/**
 * Renders a SELECT field that is not bound to final form
 */

const UnboundSelectField:React.FC<Props> = ({
  label,
  hint,
  options,
  error,
  withEmptyOption,
  ...restProps
}) => (
    <ComposedField label={label} hint={hint} error={error}>
      <Select
        error={error}
        {...restProps}
      >
        { withEmptyOption && <option>-</option> }
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
