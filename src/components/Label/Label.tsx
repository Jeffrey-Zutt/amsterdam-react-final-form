import { Label as AscLabel } from "@datapunt/asc-ui"
import styled from "styled-components"
import React from "react";

const StyledLabel = styled(AscLabel)`
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;  
  
  span {
    margin-bottom: 10px;    
  }
`

type Props = {
  label?: string
}

export const Label:React.FC<Props> = ({label, children}) =>
  label !== undefined
    ? <StyledLabel label={label} position='top' align='flex-start'>{ children }</StyledLabel>
    : <>{ children }</>
