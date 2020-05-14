import React from "react"
import ScaffoldField, { ScaffoldFieldProps } from "./ScaffoldField"

export type ScaffoldFields = Record<string, ScaffoldFieldProps>

export type RenderEach = (fieldProps:ScaffoldFieldProps, fieldRenderer:FieldRenderer) => JSX.Element
export type FieldRenderer = (fieldProps:ScaffoldFieldProps) => JSX.Element

type Props = {
  fields: ScaffoldFields
  renderEach?: RenderEach
}

const defaultRenderEach = (fieldProps:ScaffoldFieldProps, renderField:FieldRenderer) => renderField(fieldProps)
const fieldRenderer:FieldRenderer = (field:ScaffoldFieldProps) => <ScaffoldField field={field} />

const Scaffold:React.FC<Props> = ({ fields, renderEach = defaultRenderEach }) => <>
  { Object
      .entries(fields)
      .map(([key, fieldProps]) => (
        <React.Fragment key={key}>
          { renderEach(fieldProps, fieldRenderer) }
        </React.Fragment>)
      )
  }
</>

export default Scaffold
