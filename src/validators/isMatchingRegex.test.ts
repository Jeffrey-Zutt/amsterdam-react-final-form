import { isMatchingRegex } from "./isMatchingRegex"

describe("isMatchingRegex", () => {
  describe("when given invalid input", () => {
    it ("should return a message", () => {
      expect(isMatchingRegex(/^\d\d$/, "Value should be of pattern 00, was given {value}")("999")).toEqual("Value should be of pattern 00, was given 999")
    })
  })

  describe("when given valid input", () => {
    it("should return undefined", () => {
      expect(isMatchingRegex(/^\d\d$/, "Value should be of pattern 00, was given {value}")("99")).toEqual(undefined)
    })
  })
})
