import React from "react"
import { mount } from "enzyme"
import ScaffoldForm from "./ScaffoldForm"
import Scaffold, { ScaffoldFields } from "./Scaffold"

describe("ScaffoldForm", () => {
  const onSubmit = jest.fn()

  const fields:ScaffoldFields = {
      field: {
        type: "TextField",
        props: {
          label: "Label",
          name: "field",
          position: { row: 0, column: 0 }
        }
      }
  }

  const component = mount(
    <ScaffoldForm onSubmit={onSubmit}>
      <Scaffold fields={fields} />
    </ScaffoldForm>
  )

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should submit values", () => {
    component.find("input").simulate("change", { target: { value: "foo bar" } })
    component.find("form").simulate("submit")

    expect(onSubmit).toHaveBeenCalledWith({ field: "foo bar" })
  })
})
