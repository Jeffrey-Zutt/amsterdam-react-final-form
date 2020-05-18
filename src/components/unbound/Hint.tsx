import styled from "styled-components"
import { themeColor, themeSpacing } from "@datapunt/asc-ui"

export const Hint = styled.p`
  color: ${ themeColor("tint", "level4") };
  font-size: ${ themeSpacing(4) };
  margin: 0 0 ${ themeSpacing(1) } 0;
  
  line-height: 22px;
  font-weight: normal;
`
