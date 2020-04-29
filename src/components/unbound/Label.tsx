import { Label as AscLabel } from "@datapunt/asc-ui"
import styled from "styled-components"
import React from "react";

type Props = {
  usedForCheckboxOrRadio?: boolean
  label?: string
}

const StyledLabel = styled(AscLabel)`
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;  
  
  span {
    margin: 10px 0 ${({usedForCheckboxOrRadio}:Props) => usedForCheckboxOrRadio ? 6 : 10 }px 0;    
  }
`


export const Label:React.FC<Props> = ({label, usedForCheckboxOrRadio, children}) =>
  label !== undefined
    ? <StyledLabel label={label} usedForCheckboxOrRadio={usedForCheckboxOrRadio} position='top' align='flex-start'>{ children }</StyledLabel>
    : <>{ children }</>
