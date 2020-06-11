import React from "react"
import { mount } from "enzyme"
import CheckboxFields from "./CheckboxFields"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

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

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: ["foo","bar"]},
      <CheckboxFields name='myField' validate={() => "always errors"} options={{
        "foo": "Foo",
        "bar": "Bar",
        "zoo": "Zoo"
      }} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .at(0)
          .simulate("focus")
          .simulate("change", { target: { checked: true } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })

  describe("when isRequired is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: ["foo"]},
      <CheckboxFields name='myField' isRequired={true} options={{
        "foo": "Foo",
        "bar": "Bar",
        "zoo": "Zoo"
      }} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .at(0)
          .simulate("focus")
          .simulate("change", { target: { checked: false } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("Dit veld is verplicht")
      })
    })
  })
})
