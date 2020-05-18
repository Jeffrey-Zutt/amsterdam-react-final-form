import styled from "styled-components"
import { Button, themeSpacing } from "@datapunt/asc-ui"
import { LabelDiv } from "../../unbound/Label"

export const RowButtonWrap = styled.div`
  position: relative;
  top: -5px;
  
  margin: ${ themeSpacing(1) };
  grid-row-start: 2;
  -ms-grid-row: 1;  
`

export const AddButtonWrap = styled.div`
  padding: ${ themeSpacing(2) } 0;  
`

export const StyledButton = styled(Button)`
  min-width: 48px;  
`

export const StyledLabel = styled(LabelDiv)`
  margin-bottom: 0;
`
