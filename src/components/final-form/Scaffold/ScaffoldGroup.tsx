import React, { useCallback } from "react"
import Scaffold, { RenderEach, ScaffoldFields } from "./Scaffold"
import { ScaffoldAvailableFields } from "./ScaffoldField"
import { ComposedFieldProps } from "../../unbound/ComposedField"

export type Props = ComposedFieldProps & {
  name: string
  fields: ScaffoldFields
}

/**
 * Scaffolds given fields, and prefix names with the given name.
 */
const ScaffoldGroup:React.FC<Props> = ({ name, fields }) => {
  const renderEach:RenderEach = useCallback(( field, renderer ) => {
    // Prefix name with the given name.
    const newField = {
      ...field,
      props: {
        ...field.props,
        name: `${ name }.${ field.props.name }`
      }
    } as ScaffoldAvailableFields

    return renderer(newField)
  }, [ name ])

  return (
    <Scaffold fields={fields} renderEach={renderEach} />
  )
}

export default ScaffoldGroup
