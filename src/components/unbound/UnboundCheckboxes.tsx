import React, { useCallback, useState } from "react"
import { Label as AscLabel } from "@datapunt/asc-ui"
import { Label } from "./Label"
import { FieldError } from "./FieldError"
import UnboundCheckbox from "./UnboundCheckbox"

export type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & {
  values: string[],
  label?: string
  error?: string
  options: Record<string, string>
  onChange?: (values:string[]) => void
}

export const UnboundCheckboxes:React.FC<Props> = ({ values: initialValues, label, error, options, onChange, ...restProps }) => {
  const [values, setValues] = useState<string[]>(initialValues)

  const handleChange = useCallback((checked:boolean, value:string) => {
    // Either add or remove `value` from array `values`
    const changedValues = checked
      ? [ ...values, value ]
      : values.filter(val => val !== value)

    // Set new values in state:
    setValues(changedValues)

    // Notify everyone interested in the change.
    if (onChange) {
      onChange(changedValues)
    }
  }, [values, setValues, onChange])

  return (
    <>
      { label !== undefined && <Label label={label} />}
      { Object
        .entries(options)
        .map(([key, value]) => (
          <div key={key}>
            <AscLabel label={value}>
              <UnboundCheckbox
                { ...restProps }
                onChange={handleChange}
                value={key}
                checked={Array.isArray(values) && values.includes(key)}
                error={!!error}
              />
            </AscLabel>
          </div>
        )) }
      { error && <FieldError>{ error }</FieldError> }
    </>
  )
}

export default React.memo(UnboundCheckboxes)
