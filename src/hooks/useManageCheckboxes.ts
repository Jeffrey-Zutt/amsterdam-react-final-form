import { useCallback, useState } from "react"

export const useManageCheckboxes = (
  initialValues?: string[],
  onChange?:(changedValues:string[])=>void
) => {
  const [values, setValues] = useState<string[]>(initialValues ?? [] as string[])

  const handleChange = useCallback((checked:boolean, value:string) => {
    // Either add or remove `value` from array `values`
    const changedValues = checked
      ? [ ...values, value ]
      : values.filter(val => val !== value)

    // Set new values in state:
    setValues(changedValues)

    // Notify everyone interested in the change.
    if (onChange) {
      onChange(changedValues)
    }
  }, [values, setValues, onChange])

  return { values, handleChange }
}
