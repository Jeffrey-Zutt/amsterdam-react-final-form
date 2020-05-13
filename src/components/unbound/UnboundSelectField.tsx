import React from "react"
import { Select } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"
import { Hint } from "./Hint"

export type Props = {
  label?: string
  hint?: string|JSX.Element,
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
  hint,
  options,
  error,
  withEmptyOption,
  ...restProps
}) => (<>
    <Label label={label}>
      <>
        { hint && <Hint>{hint}</Hint>}
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
      </>
    </Label>
    { error && <FieldError>{ error }</FieldError> }
  </>
)

export default UnboundSelectField
