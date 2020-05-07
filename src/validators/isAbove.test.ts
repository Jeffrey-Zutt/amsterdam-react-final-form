import { isAbove, isAboveOtherField } from "./isAbove"

describe("isAbove", () => {
  describe("when given invalid input", () => {
    describe("when given numbers", () => {
      it ("should return a message", () => {
        expect(isAbove(10, "Value should be higher than {min}, you gave {value}")(9)).toEqual("Value should be higher than 10, you gave 9")
      })
    })

    describe("when given strings", () => {
      it ("should return a message", () => {
        expect(isAbove("10", "Value should be higher than {min}, you gave {value}")("9")).toEqual("Value should be higher than 10, you gave 9")
      })
    })
  })

  describe("when given valid input", () => {
    describe("when given numbers", () => {
      it ("should return undefined", () => {
        expect(isAbove(10, "Value should be higher than {min}, you gave {value}")(11)).toEqual(undefined)
      })
    })

    describe("when given strings", () => {
      it ("should return undefined", () => {
        expect(isAbove("10", "Value should be higher than {min}, you gave {value}")("11")).toEqual(undefined)
      })
    })
  })
})

describe("isAboveOtherField", () => {
  describe("when given invalid input", () => {
    it ("should return a message", () => {
      expect(isAboveOtherField("otherField", "Value should be higher than {min}, you gave {value}")(9, { "otherField": 10 })).toEqual("Value should be higher than 10, you gave 9")
    })
  })

  describe("when given valid input", () => {
    it ("should return undefined", () => {
      expect(isAboveOtherField("otherField", "Value should be higher than {min}, you gave {value}")(11, { "otherField": "11" })).toEqual(undefined)
    })
  })
})
