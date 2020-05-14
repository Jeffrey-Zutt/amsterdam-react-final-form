import styled from "styled-components"
import { Button, themeSpacing } from "@datapunt/asc-ui"
import { LabelDiv } from "../../unbound/Label"

export const Row = styled.div`
  margin: 0 -${ themeSpacing(1) };
  display: flex;
`

export const Column = styled.div` 
  padding: ${ themeSpacing(1) };  
  flex: 1;
`

export const RowButtonWrap = styled.div`
  margin-top: ${ themeSpacing(9) };
  padding: ${ themeSpacing(1) };
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
