import React, { useCallback } from "react"
import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const Button:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const handleOnClick = useCallback((e) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }, [onClick])

  return <UnboundButton
    type="button"
    onClick={handleOnClick}
    { ...otherProps }
  >
    { label }
  </UnboundButton>
}

export default Button
