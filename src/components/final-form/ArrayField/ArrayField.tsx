import React, { useMemo } from "react"
import { FieldArray } from "react-final-form-arrays"
import { useForm } from "react-final-form"
import { TrashBin, Enlarge } from "@datapunt/asc-assets"

import Scaffold, { RenderEach, ScaffoldFields } from "../Scaffold/Scaffold"
import { prefixNames } from "./utils/prefixNames"
import { AddButtonWrap, RowButtonWrap, StyledButton } from "./layout"
import ComposedField, { ComposedFieldProps } from "../../unbound/ComposedField"

export type Props = {
  columns?: string,
  name: string,
  autoPosition: boolean,
  allowAdd?: boolean,
  allowRemove?: boolean,
  scaffoldFields: ScaffoldFields,
  renderEach?: RenderEach
} & ComposedFieldProps

const defaultRenderEach:RenderEach = (props, renderer) => renderer(props)

const ArrayField:React.FC<Props> = ({ label, columns, hint, position, align, name, scaffoldFields, renderEach, allowAdd, allowRemove, autoPosition = true }) => {
  const { mutators: { push } } =  useForm()

  const positionedFields = useMemo(() =>
    Object
      .entries(scaffoldFields)
      .reduce((acc, [key, val], index) => ({ ...acc, [key]: { ...val, props: { ...val.props, position: { row: 0, column: index } } }  }), {}),
    [ scaffoldFields ]
  )

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
                  variant='tertiary'
                  icon={<TrashBin />}
                  onClick={(e:React.MouseEvent) => { e.preventDefault(); fields.remove(index) }}
                />
              </RowButtonWrap>
            ) }
          </Scaffold>
      ))}
    </FieldArray>
    { allowAdd && (
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
