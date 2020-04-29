import React from "react"
import { Select } from "@datapunt/asc-ui"
import {Label} from "./Label";
import {FieldError} from "./FieldError";

export type Props = {
  label?: string
  error?: string
  options: Record<string, string>,
} & React.HTMLAttributes<HTMLSelectElement>

/**
 * Renders a SELECT field that is not bound to final form
 */

const UnboundSelectField:React.FC<Props> = ({
  label,
  options,
  error,
  ...restProps
}) => (<>
    <Label label={label}>
      <Select
        error={error}
        {...restProps}
      >
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
