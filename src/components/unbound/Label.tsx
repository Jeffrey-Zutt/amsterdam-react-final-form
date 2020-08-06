import { Label as AscLabel, themeSpacing } from "@datapunt/asc-ui"
import styled, { css } from "styled-components"
import React from "react"

type Props = {
  label?: string | JSX.Element
  htmlFor?:string
}

const style = css`
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;  
   
  span {
    margin: ${ themeSpacing(1) } 0;    
  }
`

const StyledLabel = styled(AscLabel)`
  ${ style }  
`
StyledLabel.displayName = "StyledLabel"

export const Label:React.FC<Props> = ({ label, htmlFor, children }) =>
  label !== undefined
    ? <StyledLabel
        // @ts-ignore     - label should also support elements
        label={label}
        htmlFor={htmlFor}
        position='top'
        align='flex-start'>
        { children }
      </StyledLabel>
    : <>{ children }</>
