import React from "react"
import ScaffoldField, { ScaffoldFieldProps } from "./ScaffoldField"

type Props = {
  fields: Record<string, ScaffoldFieldProps>
}

const Scaffold:React.FC<Props> = ({ fields }) => <>
  { Object
      .values(fields)
      .map(field => (<ScaffoldField field={field} />)) }
</>

export default Scaffold
