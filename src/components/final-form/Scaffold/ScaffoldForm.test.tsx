import React from "react"
import { mount } from "enzyme"
import ScaffoldForm from "./ScaffoldForm"
import Scaffold from "./Scaffold"

describe("ScaffoldForm", () => {
  const onSubmit = jest.fn()

  const scaffoldProps:React.ComponentProps<typeof Scaffold> = {
    fields: {
      field: {
        type: "TextField",
        props: {
          label: "Label",
          name: "field",
          position: { row: 0, column: 0 }
        }
      }
    }
  }

  const component = mount(<ScaffoldForm onSubmit={onSubmit} scaffoldProps={scaffoldProps} />)

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should submit values", () => {
    component.find("input").simulate("change", { target: { value: "foo bar" } })
    component.find("form").simulate("submit")

    expect(onSubmit).toHaveBeenCalledWith({ field: "foo bar" }, expect.anything(), expect.anything())
  })
})
