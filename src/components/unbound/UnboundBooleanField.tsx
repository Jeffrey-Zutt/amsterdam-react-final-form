import { Checkbox } from "@datapunt/asc-ui"
import React from "react"
import styled from "styled-components"
import { Label } from "./Label"
import { Hint } from "./Hint"
import { FieldError } from "./FieldError"

type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & {
  label?: string
  hint?: string | JSX.Element
  error?: string
}

const StyledCheckbox = styled(Checkbox)`  
  padding: 0 !important;
  
  span {
    margin-top: 2px;
  }
`

const UnboundBooleanField:React.FC<Props> = ({ label, hint, error, ...otherProps }) => (
  <>
    <Label label={label}>
      <>
        { hint && <Hint>{ hint }</Hint>}
        <StyledCheckbox
          error={!!error}
          {...otherProps}
        />
      </>
    </Label>
    { error && (<FieldError>{ error }</FieldError>) }
  </>
)


export default UnboundBooleanField
