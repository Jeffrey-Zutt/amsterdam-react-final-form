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
  padding: ${ themeSpacing(1) };
  
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
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
