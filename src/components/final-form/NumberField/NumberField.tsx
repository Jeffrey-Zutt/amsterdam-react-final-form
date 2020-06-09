import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import styled from "styled-components"
import { combineValidators } from "../../../validators/combineValidators"
import { isAbove } from "../../../validators/isAbove"
import { isBelow } from "../../../validators/isBelow"
import { noop } from "../../../utils/noop"
import UnboundTextField, { Props as UnboundTextFieldProps } from "../../unbound/UnboundTextField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"

export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number | null | undefined>
  hideNumberSpinner?: boolean
} & UnboundTextFieldProps

const StyledUnboundTextField = styled(UnboundTextField)<Props>`
   ${ (props) => props.hideNumberSpinner && `
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
   ` }   
`

const NumberField:React.FC<Props> = ({ name, label, validate = noop, ...otherProps }) => {
  if (otherProps.min !== undefined) {
    validate = combineValidators(isAbove(otherProps.min), validate)
  }
  if (otherProps.max !== undefined) {
    validate = combineValidators(isBelow(otherProps.max), validate)
  }

  const {
    meta,
    input
  } = useField(name, {
    type: "number",
    parse: (val:string) => {
      const parsed = parseFloat(val)
      return isNaN(parsed) ? null : parsed
    },
    validate
  })

  // @ts-ignore
  return <StyledUnboundTextField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default NumberField
