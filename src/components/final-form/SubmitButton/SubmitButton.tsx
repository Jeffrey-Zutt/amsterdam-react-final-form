import React from "react"
import { useFormState } from "react-final-form"
import { Spinner } from "@datapunt/asc-ui"

import SubmitButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const ResetButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const { submitting, dirty, hasValidationErrors } = useFormState()

  return <SubmitButton
    type="submit"
    icon={ submitting ? <Spinner /> : undefined }
    variant="secondary"
    disabled={ submitting || hasValidationErrors || !dirty }
    { ...otherProps }
  >
    { label }
  </SubmitButton>
}

export default ResetButton
