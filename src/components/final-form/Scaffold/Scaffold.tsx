import React from "react"
import ScaffoldField, { ScaffoldFieldProps } from "./ScaffoldField"

export type RenderEach = (fieldProps:ScaffoldFieldProps, fieldRenderer:FieldRenderer) => JSX.Element
export type FieldRenderer = (fieldProps:ScaffoldFieldProps) => JSX.Element

type Props = {
  fields: Record<string, ScaffoldFieldProps>
  renderEach?: RenderEach
}

const defaultRenderEach = (fieldProps:ScaffoldFieldProps, renderField:FieldRenderer) => renderField(fieldProps)
const fieldRenderer:FieldRenderer = (field:ScaffoldFieldProps) => <ScaffoldField field={field} />

const Scaffold:React.FC<Props> = ({ fields, renderEach = defaultRenderEach }) => <>
  { Object
      .values(fields)
      .map(fieldProps => renderEach(fieldProps, fieldRenderer)) }
</>

export default Scaffold
