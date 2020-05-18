import React from "react"
import { FieldArray } from "react-final-form-arrays"
import { TrashBin, Enlarge } from "@datapunt/asc-assets"
import Scaffold, { RenderEach, ScaffoldFields } from "../Scaffold/Scaffold"
import { useForm } from "react-final-form"
import { prefixNames } from "./utils/prefixNames"
import { AddButtonWrap, RowButtonWrap, StyledButton, StyledLabel } from "./layout"
import { Hint } from "../../unbound/Hint"
import { Responsive } from "../../layout/responsiveProps"
import { Dimensions } from "../../layout/FormGridCell"
import ComposedField from "../../unbound/ComposedField"

export type Props = {
  position?: Responsive<Dimensions>
  columns?: string,
  label?: string,
  hint?: string|JSX.Element,
  name: string,
  allowAdd?: boolean,
  allowRemove?: boolean,
  scaffoldFields: ScaffoldFields,
  renderEach?: RenderEach
}

const defaultRenderEach:RenderEach = (props, renderer) => renderer(props)

const ArrayField:React.FC<Props> = ({ label, columns, hint, position, name, scaffoldFields, renderEach, allowAdd, allowRemove }) => {
  const { mutators: { push } } =  useForm()

  return <ComposedField label={label} hint={hint} position={position}>
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
      <StyledButton
        variant='tertiary'
        icon={<Enlarge />}
        onClick={(e:React.MouseEvent) => { e.preventDefault(); push(name, undefined) } }
      />
    ) }
  </ComposedField>
}

export default ArrayField
