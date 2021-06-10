import { Label as AscLabel, themeSpacing } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"
import React from "react"

type Props = {
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: string
  htmlFor?:string
}

type WrapProps = {
  extraLabelAlign: string
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

const FlexWrap = styled.div<WrapProps>`
  display: flex;
  justify-content: ${ ( { extraLabelAlign }) => extraLabelAlign === "right" ? "space-between" : "flex-start" }
`

const Left = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  white-space: nowrap;
  align-self: center;
  margin-right: ${ themeSpacing(2) };
`

const Right = styled.div`
  margin: ${ themeSpacing(1) } 0;
`


const StyledLabel = styled(AscLabel)`
  ${ style }  
`
StyledLabel.displayName = "StyledLabel"

export const Label:React.FC<Props> = ({ label, extraLabel, extraLabelAlign = "left", htmlFor, children }) =>
  label !== undefined
    ? extraLabel
        ? (
          <FlexWrap extraLabelAlign={ extraLabelAlign }>
            <Left>
              <StyledLabel label={label} htmlFor={htmlFor} position='top' align='flex-start'>
                { children }
              </StyledLabel>
            </Left>
            { extraLabelAlign === "right" ? 
            <Right>
              { extraLabel }
            </Right> :
            <Left>
              { extraLabel }
            </Left> }
          </FlexWrap>
        )
        : (
        <StyledLabel label={label} htmlFor={htmlFor} position='top' align='flex-start'>
          { children }
        </StyledLabel>
      )
    : <>{ children }</>
