import React from "react"
import { useFormState } from "react-final-form"
import styled from "styled-components"
import { themeColor } from "@amsterdam/asc-ui"

const Pre = styled.pre`
  margin: 0;
  padding: 20px;
  background-color: ${ themeColor("tint", "level3") }
`

const DebugFormValues:React.FC = () => {
  const { values } = useFormState()
  return (
    <>
      <Pre>
        \/\/ debug form values:
      </Pre>
      <Pre>
        { JSON.stringify(values, null, 2) }
      </Pre>
    </>
  )
}

export default DebugFormValues
