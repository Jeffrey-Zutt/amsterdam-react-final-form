import React from "react"
import { Close } from "@datapunt/asc-assets"
import ResetButton from "./ResetButton"
import TextField from "../TextField/TextField"

export default {
  title: "Reset button"
}

export const WithIcon = () => (
  <>
    <TextField name="foo" label="Some field" />
    <ResetButton icon={<Close />} variant="tertiary" />
  </>
)
