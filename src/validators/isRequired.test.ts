import { isRequired } from "./isRequired"

describe("isRequired", () => {
  describe("when given an undefined value", () => {
      it ("should return a message", () => {
        expect(isRequired("Value is required")(undefined)).toEqual("Value is required")
      })
  })

  describe("when given an empty array", () => {
    it ("should return a message", () => {
      expect(isRequired("Value is required")([])).toEqual("Value is required")
    })
  })

  describe("when given valid input", () => {
    it("should return undefined", () => {
      expect(isRequired("Value is required")("foo")).toEqual(undefined)
    })
  })
})
