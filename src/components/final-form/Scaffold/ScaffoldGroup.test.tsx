import React from "react"
import { mount } from "enzyme"
import { wrapInForm } from "../__test__/wrapInForm"
import ScaffoldGroup from "./ScaffoldGroup"
import { ScaffoldFields } from "./Scaffold"

describe("ScaffoldGroup", () => {
  const fields:ScaffoldFields = {
    foo: {
      type: "TextField",
      props: {
        name: "foo"
      }
    }
  }

  const onSubmit = jest.fn()
  const component = mount(wrapInForm(onSubmit, [], <ScaffoldGroup name='zoo.bar' fields={fields} />))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should prefix fieldnames with the given name", () => {
      component.find("input").simulate("change", { target: { value: "value" } })
      component.find("form").simulate("submit")

      expect(onSubmit).toHaveBeenCalledWith(
        { zoo: { bar: { foo: "value" } } },
        expect.anything(),
        expect.anything()
      )
  })
})
