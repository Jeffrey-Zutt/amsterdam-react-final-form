import React from "react"
import { mount } from "enzyme"
import { Label } from "./Label"

describe("Label", () => {
  describe("when NOT given a label property", () => {
    const component = mount(<Label><div>Foo</div></Label>)

    it("should just render its children", () => {
      expect(component.find("StyledLabel").exists()).toEqual(false)
      expect(component.find("div").exists()).toEqual(true)
    })
  })

  describe("when given a label property", () => {
    const component = mount(<Label label='myLabel'><div>Foo</div></Label>)

    it("should render a label and its children", () => {
      const label = component.find("StyledLabel")
      expect(label.exists()).toEqual(true)
      expect(label.prop("label")).toEqual("myLabel")
      expect(component.find("div").exists()).toEqual(true)
    })
  })
})
