import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import styled from "styled-components"
import { combineValidators } from "../../../validators/combineValidators"
import { isAbove } from "../../../validators/isAbove"
import { isBelow } from "../../../validators/isBelow"
import { noop } from "../../../utils/noop"
import UnboundTextField, { Props as UnboundTextFieldProps } from "../../unbound/UnboundTextField"

export type Props = {
  label?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number>
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
    validate
  })

  return <StyledUnboundTextField
    label={label}
    error={meta.touched && meta.error}
    { ...input }
    { ...otherProps }
  />
}

export default NumberField
