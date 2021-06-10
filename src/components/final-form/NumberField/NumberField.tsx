import React from "react"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import styled from "styled-components"
import { isAbove } from "../../../validators/isAbove"
import { isBelow } from "../../../validators/isBelow"
import { composeValidation } from "../../../validators/composeValidation"
import { isRequired as isRequiredValidator } from "../../../validators/isRequired"
import UnboundTextField, { Props as UnboundTextFieldProps } from "../../unbound/UnboundTextField"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"


export type Props = {
  position?: Responsive<Dimensions>
  label?: string
  extraLabel?: string | JSX.Element
  extraLabelAlign?: string
  hint?: string|JSX.Element,
  name: string
  validate?: FieldValidator<number | null | undefined>
  hideNumberSpinner?: boolean
  isRequired?: boolean
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

const NumberField:React.FC<Props> = ({ name, label, validate, isRequired, ...otherProps }) => {
  const {
    meta,
    input
  } = useField(name, {
    type: "number",
    parse: (val:string) => {
      const parsed = parseFloat(val)
      return isNaN(parsed) ? null : parsed
    },
    validate: composeValidation([
      isRequired && isRequiredValidator(),
      otherProps.min !== undefined && isAbove(otherProps.min),
      otherProps.max !== undefined && isBelow(otherProps.max),
      validate
    ])
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
