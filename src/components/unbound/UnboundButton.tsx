import React from "react"
import { Button } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = React.ComponentProps<typeof Button> & ComposedFieldProps

const UnboundButton:React.FC<Props> = ({ position, ...restProps }) => (<ComposedField position={position}>
  <Button {...restProps} />
</ComposedField>)

export default UnboundButton
