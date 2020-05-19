import styled, { css, SimpleInterpolation } from "styled-components"
import { Responsive, responsiveProps }  from "./responsiveProps"
import { themeSpacing } from "@datapunt/asc-ui"

export type Dimensions = {
  row?: number,
  rowSpan?: number
  column?: number
  columnSpan?: number
}

export type FormGridCellProps = {
  position?: Responsive<Dimensions>
  rowOffset?: number
}

// NOTE:
//
// We have to implement our own version of -ms-grid.
// Styled-components does not automatically prefix it, as the specs do not completely overlap.
// https://github.com/thysultan/stylis.js/issues/51
//
// We can achieve our goals using both specs though.

const generateDimensionsCss = (position:Dimensions, rowOffset:number) => {
  const parts:SimpleInterpolation[] = []

  if (position === undefined) {
    return parts
  }

  if (position.row !== undefined) {
    parts.push(css`
      grid-row-start: ${ (position.row * 2) + 1 + rowOffset };
      -ms-grid-row: ${ (position.row * 2) + 1 + rowOffset };
    `)
  }

  if (position.rowSpan && rowOffset) {
    parts.push(css`
      grid-row-end: span ${ (position.rowSpan * 2) - 1 };
      -ms-grid-row-span: ${ (position.rowSpan * 2) - 1 };
    `)
  }

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
  margin: ${ themeSpacing(1) } ${ themeSpacing(2) };
  
  align-self: ${ props => props.rowOffset === undefined ? "end" : "initial" };
  -ms-grid-row-align: ${ props => props.rowOffset === undefined ? "end" : "initial" };
  
  ${ (props:FormGridCellProps) => responsiveProps(props, { 
    "position": unit => generateDimensionsCss(unit, props.rowOffset ?? 0) 
  } ) } 
`
FormGridCell.displayName = "FormGridCell"

export default FormGridCell
