import React, { useCallback } from "react"
import { useFormState } from "react-final-form"

import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const Button:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const { submitting } = useFormState()

  const handleOnClick = useCallback((e) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }, [onClick])

  return <UnboundButton
    type="button"
    onClick={handleOnClick}
    disabled={submitting}
    { ...otherProps }
  >
    { label }
  </UnboundButton>
}

export default Button
