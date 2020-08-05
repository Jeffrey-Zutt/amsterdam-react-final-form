import React from "react"
import { mount } from "enzyme"
import { wrapInForm } from "../__test__/wrapInForm"

import ResetButton from "./ResetButton"
import TextField from "../TextField/TextField"

describe("ResetButton", () => {
  const onSubmit = jest.fn()
  
  const component = mount(wrapInForm(onSubmit, {},
    <>
      <TextField name="foo" />
      <ResetButton />
    </>
  ))
  
  xit("should reset the form when clicked upon", () => {
      component
        .find("input")
        .simulate("change", { target: { value: "Changed value" } })

      expect(component.find("input").prop("value")).toEqual("Changed value")
      component.find("button").simulate("click")
      expect(component.find("input").prop("value")).toEqual("")
  })
  
  describe("when given a onClick callback", () => {
    const onClick = jest.fn()
    const component = mount(wrapInForm(onSubmit, {},
      <>
        <TextField name="foo" />
        <ResetButton onClick={onClick} />
      </>
    ))

    beforeEach(() => {
      onClick.mockReset()
    })

    it("should call the onClick handler", () => {
      component.find("button").simulate("click")
      expect(onClick).toHaveBeenCalled()
    })
  })
})
