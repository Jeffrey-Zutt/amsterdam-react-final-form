import React from "react"
import { Select } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"

export type Props = {
  label?: string
  error?: string
  options: Record<string, string>,
  value?: string,
  withEmptyOption?:boolean
} & React.HTMLAttributes<HTMLSelectElement>

/**
 * Renders a SELECT field that is not bound to final form
 */

const UnboundSelectField:React.FC<Props> = ({
  label,
  options,
  error,
  withEmptyOption,
  ...restProps
}) => (<>
    <Label label={label}>
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
    </Label>
    { error && <FieldError>{ error }</FieldError> }
  </>
)

export default UnboundSelectField
