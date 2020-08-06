import React from "react"
import { Label as AscLabel } from "@datapunt/asc-ui"
import styled, { css } from "styled-components"
import UnboundCheckbox from "./UnboundCheckbox"
import ComposedField, { ComposedFieldProps } from "./ComposedField"
import { Responsive, responsiveProps } from "../layout/responsiveProps"
import { useManageCheckboxes } from "../../hooks/useManageCheckboxes"

export type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & ComposedFieldProps & {
  values?: string[],
  options: Record<string, string>
  onChange?: (values:string[]) => void
  columnCount?: Responsive<number>
}

type WrapperProps = Pick<Props, "columnCount">
const Wrapper = styled.div<WrapperProps>`
  ${ (props:WrapperProps) => responsiveProps(props, {
    "columnCount": (unit) => css`column-count: ${ unit };`  
  }) } 
`

export const UnboundCheckboxes:React.FC<Props> = ({ values: initialValues, label, extraLabel, hint, align, columnCount, error, position, options, onChange, ...restProps }) => {
  const { values, handleChange } = useManageCheckboxes(initialValues, onChange)

  return (
    <ComposedField label={label} extraLabel={extraLabel} hint={hint} error={error} position={position} align={align}>
      <Wrapper columnCount={columnCount}>
        { Object
          .entries(options)
          .map(([key, value]) => (
            <div key={key}>
              <AscLabel label={value}>
                <UnboundCheckbox
                  { ...restProps }
                  onChange={handleChange}
                  value={key}
                  checked={Array.isArray(values) && values.includes(key)}
                  error={!!error}
                />
              </AscLabel>
            </div>
          )) }
      </Wrapper>
    </ComposedField>
  )
}

export default React.memo(UnboundCheckboxes)
