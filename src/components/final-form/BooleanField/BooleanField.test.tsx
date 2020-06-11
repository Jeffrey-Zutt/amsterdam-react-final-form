import React from "react"
import { mount } from "enzyme"
import BooleanField from "./BooleanField"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

describe("BooleanField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: true },
    <BooleanField name='myField'  />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input").prop("checked")).toEqual(true)
  })

  it("should propagate its changes to the wrapping form", () => {
    const checkbox = component.find("input")

    checkbox.simulate("change", { target: { value: false } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": false },
        expect.anything(),
        expect.anything()
      )
  })

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: true },
      <BooleanField name='myField' validate={() => "always errors"} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
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
      { myField: true },
      <BooleanField name='myField' isRequired={true} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .simulate("focus")
          .simulate("change", { target: { checked: true } })
          .simulate("blur")
          .simulate("change", { target: { checked: false } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("Dit veld is verplicht")
      })
    })
  })
})
