import React from "react"
import { FieldArray } from "react-final-form-arrays"
import { TrashBin, Enlarge } from "@datapunt/asc-assets"
import Scaffold, { RenderEach, ScaffoldFields } from "../Scaffold/Scaffold"
import { useForm } from "react-final-form"
import { prefixNames } from "./utils/prefixNames"
import { AddButtonWrap, Column, Row, RowButtonWrap, StyledButton, StyledLabel } from "./layout"

export type Props = {
  label?: string,
  name: string,
  allowAdd?: boolean,
  allowRemove?: boolean,
  scaffoldFields: ScaffoldFields,
  renderEach?: RenderEach
}

const defaultRenderEach:RenderEach = (props, renderer) => <Column>{ renderer(props) }</Column>

const ArrayField:React.FC<Props> = ({ label, name, scaffoldFields, renderEach, allowAdd, allowRemove }) => {
  const { mutators: { push } } =  useForm()

  return <>
    { label && <StyledLabel>{ label }</StyledLabel> }
    <FieldArray name={name}>
      { ({ fields }) => fields.map((name, index) => (
        <Row key={name}>
          <Scaffold  fields={prefixNames(name, scaffoldFields)} renderEach={renderEach ?? defaultRenderEach} />
          { allowRemove && (
            <RowButtonWrap>
              <StyledButton
                variant='tertiary'
                icon={<TrashBin />}
                onClick={(e:React.MouseEvent) => { e.preventDefault(); fields.remove(index) }}
              />
            </RowButtonWrap>
          ) }
        </Row>
      ))}
    </FieldArray>
    <AddButtonWrap>
      { allowAdd && (
        <StyledButton
          variant='tertiary'
          icon={<Enlarge />}
          onClick={(e:React.MouseEvent) => { e.preventDefault(); push(name, undefined) } }
        />
      ) }
    </AddButtonWrap>
  </>
}

export default ArrayField
