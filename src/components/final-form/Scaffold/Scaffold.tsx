import React from "react"
import FormGrid, { FormGridProps } from "../../layout/FormGrid"
import ScaffoldField, { ScaffoldFieldProps } from "./ScaffoldField"
export type ScaffoldFields = Record<string, ScaffoldFieldProps>

export type RenderEach = (fieldProps:ScaffoldFieldProps, fieldRenderer:FieldRenderer, index:number) => JSX.Element
export type FieldRenderer = (fieldProps:ScaffoldFieldProps) => JSX.Element

type Props = {
  fields: ScaffoldFields
  renderEach?: RenderEach
} & FormGridProps

const defaultRenderEach = (fieldProps:ScaffoldFieldProps, renderField:FieldRenderer) => renderField(fieldProps)

const fieldRenderer:FieldRenderer = (field:ScaffoldFieldProps) => <ScaffoldField field={field} />

const Scaffold:React.FC<Props> = ({ children, columns, fields, renderEach = defaultRenderEach }) => (
  <FormGrid columns={columns}>
    {
      Object
        .entries(fields)
        .map(([key, fieldProps], index) => (
          <React.Fragment key={key}>
            { renderEach(fieldProps, fieldRenderer, index) }
          </React.Fragment>)
        )
    }
    { children }
  </FormGrid>
)

export default Scaffold
