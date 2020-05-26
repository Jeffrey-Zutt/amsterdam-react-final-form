import { Checkbox } from "@datapunt/asc-ui"
import React from "react"
import styled from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & ComposedFieldProps

const StyledCheckbox = styled(Checkbox)`  
  padding: 0;
     
  span {
    margin-top: 2px;
  }
`

const UnboundBooleanField:React.FC<Props> = ({ label, hint, error, position, align, ...otherProps }) => (
  <ComposedField label={label} hint={hint} error={error} position={position} align={align}>
    <StyledCheckbox
      error={!!error}
      {...otherProps}
    />
  </ComposedField>
)


export default UnboundBooleanField
