import React from "react"
import { mount } from "enzyme"
import ComplexRadioFields from "./ComplexRadioFields"
import { wrapInForm } from "../__test__/wrapInForm"

describe("ComplexRadioFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
    <ComplexRadioFields
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
    expect(component.find("input[checked=true]").prop("value")).toEqual("2")
  })

  it("should map the given `labelField` to its rendered labels", () => {
    const labels = component.find("label")
    expect(labels.at(0).text()).toEqual("foo")
    expect(labels.at(1).text()).toEqual("zoo")
    expect(labels.at(2).text()).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("input[value='1']")
      .simulate("change", { target: { value: "1" } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": { "myLabelField": "zoo", nested: { value: "zoo" } } },
        expect.anything(),
        expect.anything()
      )
  })
})
