import React, { useCallback } from "react"
import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const ResetButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const handleClick = useCallback((e) => {
    if (onClick !== undefined) {
      onClick(e)
    }
  }, [ onClick ])

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
