import { Checkbox } from "@amsterdam/asc-ui"
import React from "react"
import styled from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & ComposedFieldProps

const StyledCheckbox = styled(Checkbox)`  
  padding: 0;
     
  span {
    margin-top: 2px;
  }
`

const UnboundBooleanField:React.FC<Props> = ({ label, extraLabel, extraLabelAlign, hint, error, position, align, ...otherProps }) => (
  <ComposedField
    id={otherProps.id ?? otherProps.name} label={label} extraLabel={extraLabel} extraLabelAlign={extraLabelAlign} hint={hint} error={error} position={position} align={align}>
    <StyledCheckbox
      id={otherProps.id ?? otherProps.name}
      data-e2e-id={otherProps.id ?? otherProps.name}
      error={!!error}
      {...otherProps}
    />
  </ComposedField>
)


export default UnboundBooleanField
