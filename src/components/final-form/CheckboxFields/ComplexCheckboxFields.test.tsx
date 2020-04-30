import React from "react"
import { mount } from "enzyme"
import ComplexCheckboxFields from "./ComplexCheckboxFields"
import { wrapInForm } from "../__test__/wrapInForm"

describe("ComplexCheckboxFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: [
      { "myLabelField": "bar", nested: { value: "bar" } },
      { "myLabelField": "zoo", nested: { value: "zoo" } }
    ]},
    <ComplexCheckboxFields
      name="myField"
      optionLabelField="myLabelField"
      options={[
        { "myLabelField": "foo", nested: { value: "foo" } },
        { "myLabelField": "zoo", nested: { value: "zoo" } },
        { "myLabelField": "bar", nested: { value: "bar" } }
      ]}
    />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const input = component.find("input")
    expect(input.at(0).prop("checked")).toEqual(false)
    expect(input.at(1).prop("checked")).toEqual(true)
    expect(input.at(2).prop("checked")).toEqual(true)
  })

  it("should map the given `labelField` to its rendered labels", () => {
    const labels = component.find("label")
    expect(labels.at(0).text()).toEqual("foo")
    expect(labels.at(1).text()).toEqual("zoo")
    expect(labels.at(2).text()).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    // Check 'foo'
    component
      .find("input")
      .at(0)
      .simulate("change", { target: { checked: true } })

    // Uncheck 'zoo'
    component
      .find("input")
      .at(1)
      .simulate("change", { target: { checked: false } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": [
          { "myLabelField": "bar", nested: { value: "bar" } },
          { "myLabelField": "foo", nested: { value: "foo" } }
        ]},
        expect.anything(),
        expect.anything()
      )
  })
})
