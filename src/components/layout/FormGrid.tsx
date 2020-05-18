import styled, { css } from "styled-components"
import { Responsive, responsiveProps } from "./responsiveProps"
import { themeSpacing } from "@datapunt/asc-ui"

export type FormGridProps = {
  columns?: Responsive<string>
}

const FormGrid = styled.div<FormGridProps>`
  margin: -${ themeSpacing(1) };

  display: -ms-grid;
  display: grid;
  
  ${ (props:FormGridProps) => responsiveProps(props, {
      columns: (string) => css`
        -ms-grid-columns: ${ string };           
        grid-template-columns: ${ string };
      `  
  }) }
`
FormGrid.displayName = "FormGrid"

export default FormGrid
