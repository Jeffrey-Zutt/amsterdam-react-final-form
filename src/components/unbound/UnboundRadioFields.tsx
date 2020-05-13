import React, { useCallback } from "react"
import { Label } from "./Label"
import { Label as AscLabel, RadioGroup, Radio } from "@datapunt/asc-ui"
import { FieldError } from "./FieldError"
import { Hint } from "./Hint"

export type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & {
  name: string
  horizontal?: boolean,
  label?: string
  hint?: string|JSX.Element,
  error?: string
  options: Record<string, string>,
  value: string,
  onChange?: (string:string) => void
}

const UnboundRadioFields:React.FC<Props> = ({ name, horizontal, label, hint, error, options, value, onChange, ...restProps }) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }, [onChange])

  return (
    <>
      { label !== undefined && <Label label={label} />}
      { hint !== undefined && <Hint>{hint}</Hint> }
      <RadioGroup name={name} horizontal={horizontal}>
        { Object
          .entries(options)
          .map(([key, label]) => (
            <AscLabel key={key} htmlFor={key} label={label}>
              <Radio {...restProps} onChange={handleChange} error={!!error} id={key} name={name} value={key} checked={ value === key } />
            </AscLabel>
          )) }
      </RadioGroup>
      { error && <FieldError>{ error }</FieldError> }
    </>
  )
}

export default React.memo(UnboundRadioFields)
