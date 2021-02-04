import React, { useEffect, useMemo } from "react"
import { FieldArray, useFieldArray } from "react-final-form-arrays"
import { useForm } from "react-final-form"
import { TrashBin, Enlarge } from "@amsterdam/asc-assets"

import Scaffold, { RenderEach, ScaffoldFields } from "../Scaffold/Scaffold"
import { prefixNames } from "./utils/prefixNames"
import { AddButtonWrap, RowButtonWrap, StyledButton } from "./layout"
import ComposedField, { ComposedFieldProps } from "../../unbound/ComposedField"
import { Responsive } from "../../layout/responsiveProps"

export type Props = {
  columns?: Responsive<string>,
  name: string,
  autoPosition?: boolean,
  allowAdd?: boolean,
  allowRemove?: boolean,
  minItems?: number,
  maxItems?: number,
  scaffoldFields: ScaffoldFields,
  renderEach?: RenderEach
} & ComposedFieldProps

const defaultRenderEach:RenderEach = (props, renderer) => renderer(props)

const ArrayField:React.FC<Props> = ({ label, columns, hint, position, align, name, scaffoldFields, renderEach, allowAdd = false, allowRemove, autoPosition = true, minItems = 0, maxItems = Number.MAX_VALUE }) => {
  const { mutators: { push } } = useForm()
  const { fields: { value } } = useFieldArray(name)

  const positionedFields = useMemo(() =>
    Object
      .entries(scaffoldFields)
      .reduce((acc, [key, val], index) => ({ ...acc, [key]: { ...val, props: { ...val.props, position: { row: 0, column: index } } }  }), {}),
    [ scaffoldFields ]
  )

  useEffect(() => {
    const numExtraFields = minItems - (value?.length ?? 0)
    for (let i = 0; i < numExtraFields; i++) {
      push(name, undefined)
    }
  }, [minItems, name, push, value, allowAdd, maxItems])

  return <ComposedField label={label} hint={hint} position={position} align={align}>
    <FieldArray name={name}>
      { ({ fields }) => fields.map((name, index) => (
          <Scaffold
            columns={columns}
            key={name}
            fields={prefixNames(name, autoPosition ? positionedFields : scaffoldFields)}
            renderEach={renderEach ?? defaultRenderEach}
          >
            { allowRemove && (
              <RowButtonWrap>
                <StyledButton
                  disabled={index < minItems}
                  variant='tertiary'
                  icon={<TrashBin />}
                  onClick={(e:React.MouseEvent) => { e.preventDefault(); fields.remove(index) }}
                />
              </RowButtonWrap>
            ) }
          </Scaffold>
      ))}
    </FieldArray>
    { allowAdd && (value?.length ?? 0) < maxItems && (
      <AddButtonWrap>
        <StyledButton
          variant='tertiary'
          icon={<Enlarge />}
          onClick={(e:React.MouseEvent) => { e.preventDefault(); push(name, undefined) } }
        />
      </AddButtonWrap>
    ) }
  </ComposedField>
}

export default ArrayField
