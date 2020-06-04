import { ScaffoldAvailableFields } from "../../Scaffold/ScaffoldField"
import { ScaffoldFields } from "../../Scaffold/Scaffold"

const prefixName = (prefix: string, field:ScaffoldAvailableFields):ScaffoldAvailableFields => ({
  ...field,
  props: {
    ...field.props,
    name: `${ prefix }${ field.props.name }`
  }
} as ScaffoldAvailableFields)

export const prefixNames = (prefix: string, fields:ScaffoldFields):ScaffoldFields =>
  Object
    .entries(fields)
    .reduce(
      (acc, [key, val]) => ({ ...acc, [key]: prefixName(prefix, val) }),
      {}
    )
