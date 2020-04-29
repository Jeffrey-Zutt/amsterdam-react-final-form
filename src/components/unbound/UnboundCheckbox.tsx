import { Checkbox } from "@datapunt/asc-ui"
import React, { useCallback } from "react"

type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & {
  error?: boolean,
  checked?: boolean
  value: string
  onChange?: (checked:boolean, value:string)=>void
}

/**
 * Unbound checkbox, calls (checked:boolean, value:string) instead of onChange(boolean)
 */

const UnboundCheckbox:React.FC<Props> = ({ value, onChange, ...restProps }) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
       onChange(e.target.checked, value)
    }
  }, [onChange, value])

  return (<Checkbox onChange={handleChange} {...restProps} />)
}

export default UnboundCheckbox
