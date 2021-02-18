import React from "react"
import { mount } from "enzyme"
import DateField from "./DateField"
import { wrapInForm } from "../__test__/wrapInForm"
// import { FieldError } from "../../unbound/FieldError"

describe("DateField", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "myValue" },
    <DateField name='myField' />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input").prop("value")).toEqual("myValue")
  })

  // it("should propagate its changes to the wrapping form", () => {
  //   component
  //     .find("input")
  //     .simulate("change", { target: { value: "Changed value" } })

  //   component
  //     .find("form")
  //     .simulate("submit")

  //   expect(onSubmit)
  //     .toHaveBeenCalledWith({
  //       "myField": "Changed value" },
  //       expect.anything(),
  //       expect.anything()
  //     )
  // })

  // describe("when a validation error is set", () => {
  //   const component = mount(wrapInForm(
  //     onSubmit,
  //     { myField: "myValue" },
  //     <DateField name='myField' validate={() => "always errors"} />
  //   ))

  //   it("should NOT show a FieldError", () => {
  //     expect(component.find(FieldError).exists()).toEqual(false)
  //   })

  //   describe("when a user interacts with the component", () => {
  //     beforeEach(() => {
  //       component
  //         .find("input")
  //         .simulate("focus")
  //         .simulate("change", { target: { value: "Changed value" } })
  //         .simulate("blur")
  //     })

  //     it("should show a FieldError", () => {
  //       expect(component.find(FieldError).text()).toEqual("always errors")
  //     })
  //   })
  // })

  // describe("when isRequired is set", () => {
  //   const component = mount(wrapInForm(
  //     onSubmit,
  //     { myField: "myValue" },
  //     <DateField name='myField' isRequired={true} />
  //   ))

  //   it("should NOT show a FieldError", () => {
  //     expect(component.find(FieldError).exists()).toEqual(false)
  //   })

  //   describe("when a user interacts with the component", () => {
  //     beforeEach(() => {
  //       component
  //         .find("input")
  //         .simulate("focus")
  //         .simulate("change", { target: { value: "" } })
  //         .simulate("blur")
  //     })

  //     it("should show a FieldError", () => {
  //       expect(component.find(FieldError).text()).toEqual("Dit veld is verplicht")
  //     })
  //   })
  // })
})
