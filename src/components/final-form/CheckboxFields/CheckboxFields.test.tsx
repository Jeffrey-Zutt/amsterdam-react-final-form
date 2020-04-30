import React from "react"
import { mount } from "enzyme"
import CheckboxFields from "./CheckboxFields"
import { wrapInForm } from "../__test__/wrapInForm"

describe("CheckboxFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: ["foo","bar"]},
    <CheckboxFields name='myField' options={{
      "foo": "Foo",
      "bar": "Bar",
      "zoo": "Zoo"
    }} />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const checkboxes = component.find("input")
    expect(checkboxes.at(0).prop("checked")).toEqual(true)
    expect(checkboxes.at(1).prop("checked")).toEqual(true)
    expect(checkboxes.at(2).prop("checked")).toEqual(false)
  })

  it("should propagate its changes to the wrapping form", () => {
    const checkboxes = component.find("input")

    // Uncheck 'foo'
    checkboxes.at(0).simulate("change", { target: { checked: false } })
    // Check 'zoo'
    checkboxes.at(2).simulate("change", { target: { checked: true } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": ["bar", "zoo"]},
        expect.anything(),
        expect.anything()
      )
  })
})
