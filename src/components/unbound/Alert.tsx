import React from "react"
import styled from "styled-components"
import { themeColor, themeSpacing } from "@datapunt/asc-ui"

type Props = {
  title?: string
  variant: "error" | "success"
}

const StyledDiv = styled.div<Pick<Props, "variant">>`
  margin: ${ themeSpacing(6) } 0;
  padding: ${ themeSpacing(4) };
  background-color: ${ (props) => themeColor( props.variant === "success" ? "primary" : "secondary") };
  color: ${ themeColor("bright") };
`

const Title = styled.strong`
  display: block;
  font-size: 18px;
  line-height: 23px;
  padding-bottom: ${ themeSpacing(1) };
`

const Alert:React.FC<Props> = ({ title, variant, children }) => (
  <StyledDiv variant={variant}>
    { title && <Title>{ title }</Title> }
    { children }
  </StyledDiv>
)

export default Alert
