import React from "react"
import { useFormState } from "react-final-form"
import { Spinner } from "@datapunt/asc-ui"

import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const SubmitButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const { submitting, invalid } = useFormState()

  return <UnboundButton
    type="submit"
    icon={ submitting ? <Spinner /> : undefined }
    variant="secondary"
    disabled={ submitting || invalid }
    data-e2e-id="submit"
    { ...otherProps }
  >
    { label }
  </UnboundButton>
}

export default SubmitButton
