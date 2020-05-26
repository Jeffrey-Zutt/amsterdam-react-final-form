import React from "react"
import { FieldArray } from "react-final-form-arrays"
import { TrashBin, Enlarge } from "@datapunt/asc-assets"
import Scaffold, { RenderEach, ScaffoldFields } from "../Scaffold/Scaffold"
import { useForm } from "react-final-form"
import { prefixNames } from "./utils/prefixNames"
import { AddButtonWrap, RowButtonWrap, StyledButton } from "./layout"
import ComposedField, { ComposedFieldProps } from "../../unbound/ComposedField"

export type Props = {
  columns?: string,
  name: string,
  allowAdd?: boolean,
  allowRemove?: boolean,
  scaffoldFields: ScaffoldFields,
  renderEach?: RenderEach
} & ComposedFieldProps

const defaultRenderEach:RenderEach = (props, renderer) => renderer(props)

const ArrayField:React.FC<Props> = ({ label, columns, hint, position, align, name, scaffoldFields, renderEach, allowAdd, allowRemove }) => {
  const { mutators: { push } } =  useForm()

  return <ComposedField label={label} hint={hint} position={position} align={align}>
    <FieldArray name={name}>
      { ({ fields }) => fields.map((name, index) => (
          <Scaffold
            columns={columns}
            key={name}
            fields={prefixNames(name, scaffoldFields)}
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
