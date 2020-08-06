import React, { useCallback } from "react"
import styled from "styled-components"
import { Label as AscLabel, RadioGroup, Radio } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

const StyledRadio = styled(Radio)`
  padding: 0;
`

export type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & ComposedFieldProps & {
  name: string
  horizontal?: boolean,
  options: Record<string, string>,
  value: string,
  onChange?: (string:string) => void
}

const UnboundRadioFields:React.FC<Props> = ({ name, horizontal, label, extraLabel, hint, error, position, align, options, value, onChange, ...restProps }) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }, [onChange])

  return (
    <ComposedField label={label} extraLabel={extraLabel} hint={hint} error={error} position={position} align={align}>
      <RadioGroup name={name} horizontal={horizontal}>
        { Object
          .entries(options)
          .map(([key, label]) => (
            <AscLabel key={key} htmlFor={key} label={label}>
              <StyledRadio {...restProps} onChange={handleChange} error={!!error} id={key} data-e2e-id={key} name={name} value={key} checked={ value === key } />
            </AscLabel>
          )) }
      </RadioGroup>
    </ComposedField>
  )
}

export default React.memo(UnboundRadioFields)
