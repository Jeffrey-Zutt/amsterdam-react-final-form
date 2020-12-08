import React from "react"
import { useFormState } from "react-final-form"
import styled from "styled-components"
import { themeColor } from "@amsterdam/asc-ui"

const Pre = styled.pre`
  margin: 0;
  padding: 20px;
  background-color: ${ themeColor("tint", "level3") }
`

const DebugFormState:React.FC = () => {
  const form = useFormState()
  return (
    <>
      <Pre>
        // debug form state:
      </Pre>
      <Pre>
        { JSON.stringify(form, null, 2) }
      </Pre>
    </>
  )
}

export default DebugFormState
