import React, { useCallback } from "react"
import { useForm } from "react-final-form"
import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const ResetButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const {
    reset
  } = useForm()

  const handleClick = useCallback((e) => {
    reset()
    if (onClick !== undefined) {
      onClick(e)
    }
  }, [ reset, onClick ])

  return <UnboundButton
    type="reset"
    data-e2e-id="reset"
    variant="tertiary"
    onClick={handleClick}
    { ...otherProps }
  >
    { label }
  </UnboundButton>
}

export default ResetButton
