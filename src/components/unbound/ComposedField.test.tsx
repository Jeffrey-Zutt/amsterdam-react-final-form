import React from "react"
import { mount } from "enzyme"
import ComposedField from "./ComposedField"
import { Label } from "./Label"
import { Hint } from "./Hint"
import { FieldError } from "./FieldError"

describe("ComposedField", () => {
  it("should render a label when given", () => {
    const component = mount(<ComposedField label="Label" />)
    expect(component.find(Label).exists()).toEqual(true)
  })

  it("should render a hint when given", () => {
    const component = mount(<ComposedField hint="hint" />)
    expect(component.find(Hint).exists()).toEqual(true)
  })

  it("should render an error when given", () => {
    const component = mount(<ComposedField error="error" />)
    expect(component.find(FieldError).exists()).toEqual(true)
  })

  it("should render children when given", () => {
    const component = mount(<ComposedField><div>Foo</div></ComposedField>)
    expect(component.find("div").text()).toEqual("Foo")
  })
})
