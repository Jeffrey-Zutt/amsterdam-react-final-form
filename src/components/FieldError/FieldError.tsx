import styled from 'styled-components'
import {themeColor, themeSpacing} from "@datapunt/asc-ui";

export const FieldError = styled.div`
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  
  margin-top: ${themeSpacing(4)};
  color: ${themeColor('support', 'invalid')}
`
