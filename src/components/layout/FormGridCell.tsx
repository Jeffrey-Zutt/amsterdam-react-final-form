import styled, { css, SimpleInterpolation } from "styled-components"
import { Responsive, responsiveProps }  from "./responsiveProps"
import { themeSpacing } from "@datapunt/asc-ui"

export type Dimensions = {
  row?: number,
  // rowSpan?: number
  column?: number
  columnSpan?: number
}

export type FormGridCellProps = {
  position?: Responsive<Dimensions>
  rowOffset?: number
}

const generateDimensionsCss = (position:Dimensions, rowOffset:number) => {
  const parts:SimpleInterpolation[] = []

  if (position === undefined) {
    return parts
  }

  if (position.row !== undefined) {
    parts.push(css`
      grid-row-start: ${ position.row + 1 + rowOffset };
      -ms-grid-row: ${ position.row + 1 + rowOffset };
    `)
  }

  // if (position.rowSpan) {
  //   parts.push(css`
  //     grid-row-end: span ${ position.rowSpan };
  //     -ms-grid-row-span: ${ position.rowSpan };
  //   `)
  // }

  if (position.column !== undefined)  {
    parts.push(css`
      grid-column-start: ${ position.column + 1 };
      -ms-grid-column: ${ position.column + 1 };
    `)
  }

  if (position.columnSpan !== undefined) {
    parts.push(css`
      grid-column-end: span ${ position.columnSpan };
      -ms-grid-column-span: ${ position.columnSpan };
    `)
  }

  return parts
}

const FormGridCell = styled.div<FormGridCellProps>`
  margin: ${ themeSpacing(1) };

  ${ (props:FormGridCellProps) => responsiveProps(props, { 
    "position": unit => generateDimensionsCss(unit, props.rowOffset ?? 0) 
  } ) } 
`
FormGridCell.displayName = "FormGridCell"

export default FormGridCell
