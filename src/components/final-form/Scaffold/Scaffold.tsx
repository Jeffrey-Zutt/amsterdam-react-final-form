import React from "react"
import FormGrid, { FormGridProps } from "../../layout/FormGrid"
import ScaffoldField, { ScaffoldAvailableFields } from "./ScaffoldField"

export type ScaffoldFields = Record<string, ScaffoldAvailableFields>

export type RenderEach = (fieldProps:ScaffoldAvailableFields, fieldRenderer:FieldRenderer, index:number) => JSX.Element
export type FieldRenderer = (fieldProps:ScaffoldAvailableFields) => JSX.Element

type Props = {
  fields: ScaffoldFields
  renderEach?: RenderEach
} & FormGridProps

const defaultRenderEach = (fieldProps:ScaffoldAvailableFields, renderField:FieldRenderer) => renderField(fieldProps)

const fieldRenderer:FieldRenderer = (field:ScaffoldAvailableFields) => <ScaffoldField field={field} />

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
