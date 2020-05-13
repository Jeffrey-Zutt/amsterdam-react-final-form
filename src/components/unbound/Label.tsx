import { Label as AscLabel, themeSpacing } from "@datapunt/asc-ui"
import styled, { css } from "styled-components"
import React from "react"

type Props = {
  label?: string
}

const style = css`
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;  
  
  span {
    margin: ${ themeSpacing(2) } 0;    
  }
`

const StyledLabel = styled(AscLabel)`
  ${ style }  
`
StyledLabel.displayName = "StyledLabel"

export const LabelDiv = styled.div`
  ${ style }
  margin: 10px 0;
`
LabelDiv.displayName = "LabelDiv"

export const Label:React.FC<Props> = ({ label, children }) =>
  label !== undefined
    ? <StyledLabel label={label} position='top' align='flex-start'>{ children }</StyledLabel>
    : <>{ children }</>
