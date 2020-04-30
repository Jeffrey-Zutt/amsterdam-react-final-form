import React from "react"
import { mount } from "enzyme"
import NumberField from "./NumberField"
import { wrapInForm } from "../__test__/wrapInForm"

describe("NumberField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "5" },
    <NumberField name='myField' min='0' max='10' />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input").prop("value")).toEqual("5")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("input")
      .simulate("change", { target: { value: "6" } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith({
          "myField": "6" },
        expect.anything(),
        expect.anything()
      )
  })
})
