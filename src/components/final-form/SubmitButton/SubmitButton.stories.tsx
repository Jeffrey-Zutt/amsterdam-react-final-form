import React from "react"
import SubmitButton from "./SubmitButton"
import TextField from "../TextField/TextField"

export default {
  title: "Button/Submit button"
}

export const Example = () => (
  <>
    <TextField name="foo" label="Some field" />
    <SubmitButton label="Save" />
  </>
)
