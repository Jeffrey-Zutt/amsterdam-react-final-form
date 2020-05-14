import React from "react"
import { mount } from "enzyme"
import { wrapInForm } from "../__test__/wrapInForm"
import ScaffoldField from "./ScaffoldField"
import BooleanField from "../BooleanField/BooleanField"
import CheckboxFields from "../CheckboxFields/CheckboxFields"
import NumberField from "../NumberField/NumberField"
import RadioFields from "../RadioFields/RadioFields"
import SelectField from "../SelectField/SelectField"
import TextAreaField from "../TextAreaField/TextAreaField"
import TextField from "../TextField/TextField"
import ArrayField from "../ArrayField/ArrayField"

const render = (component:JSX.Element, initialValues:any = {}) => mount(
  wrapInForm(
    jest.fn(),
    initialValues,
    component
  )
)

describe("ScaffoldField", () => {
  it("should be able to render a ArrayField", () => {
    const component = render(<ScaffoldField field={{ type: "ArrayField", props: { name: "name", scaffoldFields: { foo: { type: "TextField", props: { name: "foo" } } } } }} />)
    const field = component.find(ArrayField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render a BooleanField", () => {
    const component = render(<ScaffoldField field={{ type: "Boolean", props: { name: "name" } }} />)
    const field = component.find(BooleanField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render CheckboxFields", () => {
    const component = render(<ScaffoldField field={{ type: "CheckboxFields", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = component.find(CheckboxFields)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render a NumberField", () => {
    const component = render(<ScaffoldField field={{ type: "NumberField", props: { name: "name" } }} />)
    const field = component.find(NumberField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render RadioFields", () => {
    const component = render(<ScaffoldField field={{ type: "RadioFields", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = component.find(RadioFields)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render a SelectField", () => {
    const component = render(<ScaffoldField field={{ type: "SelectField", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = component.find(SelectField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render a TextAreaField", () => {
    const component = render(<ScaffoldField field={{ type: "TextAreaField", props: { name: "name" } }} />)
    const field = component.find(TextAreaField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to render a TextField", () => {
    const component = render(<ScaffoldField field={{ type: "TextField", props: { name: "name" } }} />)
    const field = component.find(TextField)

    expect(field.exists()).toEqual(true)
    expect(field.prop("name")).toEqual("name")
  })

  it("should be able to set initial values", () => {
    const component = render(<ScaffoldField field={{ type: "TextField", props: { name: "name" } }} />, { name: "foo" })
    const field = component.find("input")
    expect(field.prop("value")).toEqual("foo")
  })
})
