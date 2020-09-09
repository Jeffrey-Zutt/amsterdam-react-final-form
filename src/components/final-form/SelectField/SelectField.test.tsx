import React from "react"
import { mount } from "enzyme"
import SelectField from "./SelectField"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

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
      .find("select option[value='foo']")
      .simulate("change")

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

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: "bar" },
      <SelectField name='myField' options={{ "foo": "Foo", "bar": "Bar" }} validate={() => "always errors"} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("select")
          .simulate("focus")

        component
          .find("select option[value='foo']")
          .simulate("change")

        component
          .find("select")
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })

  describe("when isRequired error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: "bar" },
      <SelectField name='myField' options={{ "": "-", "foo": "Foo", "bar": "Bar" }} isRequired={true} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("select")
          .simulate("focus")

        component
          .find("select option[value='']")
          .simulate("change")

        component
          .find("select")
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("Dit veld is verplicht")
      })
    })
  })
})
