import React from "react"
import { mount } from "enzyme"
import { wrapInForm } from "../__test__/wrapInForm"
import Scaffold from "./Scaffold"
import TextField from "../TextField/TextField"

const render = (component:JSX.Element, initialValues:any = {}) => mount(
  wrapInForm(
    jest.fn(),
    initialValues,
    component
  )
)

describe("ScaffoldField", () => {
  it("should be able to render multiple fields", () => {
    const component = render(<Scaffold fields={{
      foo: { type: "TextField", props: { name: "foo" } },
      bar: { type: "TextField", props: { name: "bar" } }
    }} />)

    const textFields = component.find(TextField)
    expect(textFields.at(0).prop("name")).toEqual("foo")
    expect(textFields.at(1).prop("name")).toEqual("bar")
  })

  it("should be able to modify its scaffolded fields", () => {
    const renderEach = jest.fn((props, renderer) => <section>{ renderer(props) }</section>)

    const component = render(<Scaffold
      fields={{
        foo: { type: "TextField", props: { name: "foo" } },
        bar: { type: "TextField", props: { name: "bar" } }
      }}
      renderEach={renderEach}
    />)

    // TextField should now been wrapped with a 'section':
    const sections = component.find("section")
    expect(sections.at(0).find("TextField").exists()).toEqual(true)

    expect(renderEach).toHaveBeenCalledTimes(2)
    expect(renderEach).toHaveBeenNthCalledWith(1, { type: "TextField", props: { name: "foo" } }, expect.anything())
    expect(renderEach).toHaveBeenNthCalledWith(2, { type: "TextField", props: { name: "bar" } }, expect.anything())
  })
})
