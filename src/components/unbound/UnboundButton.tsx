import React from "react"
import { Button, themeSpacing } from "@datapunt/asc-ui"
import styled, { css } from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"
import { Responsive, responsiveProps } from "../layout/responsiveProps"

export type Props = React.ComponentProps<typeof Button> & ComposedFieldProps & {
  alignedHorizontally?: Responsive<boolean>
}

type StyledButtonProps = Pick<Props, "alignedHorizontally">
const StyledButton = styled(Button)<StyledButtonProps>`
  margin-top: ${ themeSpacing(1) };
  
  ${ ((props:StyledButtonProps) => responsiveProps(props, {
    // Its aesthetically more pleasing if horizontally aligned buttons have a negative top-margin.
    // You have to set the property yourself though
    alignedHorizontally: unit => css`margin-top: ${ themeSpacing( unit ? -1 : 1) };`
  })) }
`

const UnboundButton:React.FC<Props> = ({ position, align, ...restProps }) => (<ComposedField position={position} align={align}>
  <div><StyledButton {...restProps} /></div>
</ComposedField>)

export default UnboundButton
