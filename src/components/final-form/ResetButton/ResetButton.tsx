import React, { useCallback } from "react"
import { useForm } from "react-final-form"
import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const ResetButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const {
    // @ts-ignore
    restart
  } = useForm()

  const handleClick = useCallback((e) => {
    e.preventDefault()
    restart()
    if (onClick !== undefined) {
      onClick(e)
    }
  }, [ restart, onClick ])

  return <UnboundButton
    type="button"
    data-e2e-id="reset"
    variant="tertiary"
    onClick={handleClick}
    { ...otherProps }
  >
    { label }
  </UnboundButton>
}

export default ResetButton
