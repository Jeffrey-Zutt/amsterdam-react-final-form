import React from "react"
import { mount } from "enzyme"
import TextField from "./TextField"
import { wrapInForm } from "../__test__/wrapInForm"

describe("TextField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "myValue" },
    <TextField name='myField' />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input").prop("value")).toEqual("myValue")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("input")
      .simulate("change", { target: { value: "Changed value" } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith({
        "myField": "Changed value" },
        expect.anything(),
        expect.anything()
      )
  })
})
