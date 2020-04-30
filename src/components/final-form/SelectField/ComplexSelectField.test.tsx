import React from "react"
import { mount } from "enzyme"
import ComplexSelectField from "./ComplexSelectField"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

describe("ComplexSelectField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
    <ComplexSelectField
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
    expect(component.find("select").prop("value")).toEqual("2")
  })

  it("should map the given `labelField` to its rendered options", () => {
    const options = component.find("option")
    expect(options.at(0).text()).toEqual("foo")
    expect(options.at(1).text()).toEqual("zoo")
    expect(options.at(2).text()).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("select")
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

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: "bar" },
      <ComplexSelectField
        name="myField"
        optionLabelField="myLabelField"
        validate={() => "always errors"}
        options={[
          { "myLabelField": "foo", nested: { value: "foo" } },
          { "myLabelField": "zoo", nested: { value: "zoo" } },
          { "myLabelField": "bar", nested: { value: "bar" } }
        ]}
      />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("select")
          .simulate("focus")
          .simulate("change", { target: { value: "1" } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })
})
