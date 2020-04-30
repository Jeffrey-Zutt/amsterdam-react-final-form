import React from "react"
import { mount } from "enzyme"
import RadioFields from "./RadioFields"
import { wrapInForm } from "../__test__/wrapInForm"

describe("RadioFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "bar" },
    <RadioFields name='myField' options={{ "foo": "Foo", "bar": "Bar" }} />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input[checked=true]").prop("value")).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("input[value='foo']")
      .simulate("change", { target: { value: "foo" } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": "foo" },
        expect.anything(),
        expect.anything()
      )
  })
})
