import { ScaffoldFieldProps } from "../../Scaffold/ScaffoldField"
import { ScaffoldFields } from "../../Scaffold/Scaffold"

const prefixName = (prefix: string, field:ScaffoldFieldProps):ScaffoldFieldProps => ({
  ...field,
  props: {
    ...field.props,
    name: `${ prefix }${ field.props.name }`
  }
} as ScaffoldFieldProps)

export const prefixNames = (prefix: string, fields:ScaffoldFields):ScaffoldFields =>
  Object
    .entries(fields)
    .reduce(
      (acc, [key, val]) => ({ ...acc, [key]: prefixName(prefix, val) }),
      {}
    )
