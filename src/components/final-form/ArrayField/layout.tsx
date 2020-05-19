import styled from "styled-components"
import { Button, themeSpacing } from "@datapunt/asc-ui"

export const RowButtonWrap = styled.div`
  position: relative;
  top: -5px;
  
  margin: ${ themeSpacing(1) };
   
  -ms-grid-column: 999;
  
  grid-row-start: 2;
  -ms-grid-row: 2;  
`

export const StyledButton = styled(Button)`
  min-width: 48px;  
`
