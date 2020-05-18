export const generateColumnsValue = (num:number, addButtonColumn:boolean) => {
  const fractions = [...Array(num)].map(_ => "1fr")
  if (addButtonColumn) {
    fractions.push("auto")
  }
  return fractions.join(" ")
}
