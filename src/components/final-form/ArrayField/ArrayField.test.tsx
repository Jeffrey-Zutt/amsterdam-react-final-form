import React from "react"
import { mount } from "enzyme"
import { wrapInForm } from "../__test__/wrapInForm"
import ArrayField from "./ArrayField"
import { Button } from "@amsterdam/asc-ui"
import TextField from "../TextField/TextField"

describe("ArrayField", () => {
  const component = <ArrayField
    name="myArray"
    allowAdd={true}
    allowRemove={true}
    scaffoldFields={{
      foo: { type: "TextField", props: { name: "foo" } },
      bar: { type: "TextField", props: { name: "bar" } }
    }}
  />

  describe("when clicked on the add button", () => {
    it("should add scaffolded fields", () => {
      const mounted = mount(wrapInForm(jest.fn(), {}, component))
      
      expect(mounted.find(TextField).length).toEqual(0)
      
      mounted.find(Button).last().simulate("click")
      expect(mounted.find(TextField).length).toEqual(2)

      mounted.find(Button).last().simulate("click")
      expect(mounted.find(TextField).length).toEqual(4)
    })
  })

  describe("when clicked on a remove button", () => {
    it ("should remove scaffolded fields", () => {
      const mounted = mount(wrapInForm(jest.fn(), { myArray: [ { foo: "foo", bar: "bar" }, { foo: "foo", bar: "bar" } ]}, component))

      expect(mounted.find(TextField).length).toEqual(4)

      mounted.find(Button).first().simulate("click")
      expect(mounted.find(TextField).length).toEqual(2)

      mounted.find(Button).first().simulate("click")
      expect(mounted.find(TextField).length).toEqual(0)
    })
  })

  describe("when submitted", () => {
    it("should submit an array", () => {
      const onSubmit = jest.fn()

      const mounted = mount(wrapInForm(onSubmit, {}, component))
      mounted.find(Button).last().simulate("click")
      mounted.find(Button).last().simulate("click")

      mounted.find("input").forEach((textField, index) => textField.simulate("change", { target: { value: "change_" + index } }))
      mounted.find("form").simulate("submit")

      expect(onSubmit).toHaveBeenCalledWith(
        { myArray: [{ foo: "change_0", bar: "change_1" }, { foo: "change_2", bar: "change_3" } ]},
        expect.anything(),
        expect.anything()
      )
    })
  })
})
