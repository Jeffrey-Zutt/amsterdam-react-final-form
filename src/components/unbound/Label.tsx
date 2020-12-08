import { Label as AscLabel, themeSpacing } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"
import React from "react"

type Props = {
  label?: string
  extraLabel?: string | JSX.Element
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

const FlexWrap = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
`


const Right = styled.div`
  margin: ${ themeSpacing(1) } 0;
`


const StyledLabel = styled(AscLabel)`
  ${ style }  
`
StyledLabel.displayName = "StyledLabel"

export const Label:React.FC<Props> = ({ label, extraLabel, htmlFor, children }) =>
  label !== undefined
    ? extraLabel
        ? (
          <FlexWrap>
            <Left>
              <StyledLabel label={label} htmlFor={htmlFor} position='top' align='flex-start'>
                { children }
              </StyledLabel>
            </Left>
            <Right>
              { extraLabel }
            </Right>
          </FlexWrap>
        )
        : (
        <StyledLabel label={label} htmlFor={htmlFor} position='top' align='flex-start'>
          { children }
        </StyledLabel>
      )
    : <>{ children }</>
