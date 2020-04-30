import React from "react"
import { mount } from "enzyme"
import SelectField from "./SelectField"
import { wrapInForm } from "../__test__/wrapInForm"

describe("SelectField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "bar" },
    <SelectField name='myField' options={{ "foo": "Foo", "bar": "Bar" }} />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("select").prop("value")).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("select")
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
