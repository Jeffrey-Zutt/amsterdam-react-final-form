import React from "react"
import { mount } from "enzyme"
import NumberField from "./NumberField"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

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
      .toHaveBeenCalledWith(
        { "myField": 6 },
        expect.anything(),
        expect.anything()
      )
  })

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: "5" },
      <NumberField name='myField' validate={() => "always errors"} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .simulate("focus")
          .simulate("change", { target: { value: "Changed value" } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })
})
