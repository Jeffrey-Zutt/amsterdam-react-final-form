import { isBelow, isBelowOtherField } from "./isBelow"

describe("isBelow", () => {
  describe("when given invalid input", () => {
    describe("when given numbers", () => {
      it ("should return a message", () => {
        expect(isBelow(10, "Value should be higher than {max}, you gave {value}")(11)).toEqual("Value should be higher than 10, you gave 11")
      })
    })

    describe("when given strings", () => {
      it ("should return a message", () => {
        expect(isBelow("10", "Value should be higher than {max}, you gave {value}")("11")).toEqual("Value should be higher than 10, you gave 11")
      })
    })
  })

  describe("when given valid input", () => {
    describe("when given numbers", () => {
      it ("should return undefined", () => {
        expect(isBelow(10, "Value should be higher than {max}, you gave {value}")(9)).toEqual(undefined)
      })
    })

    describe("when given strings", () => {
      it ("should return undefined", () => {
        expect(isBelow("10", "Value should be higher than {max}, you gave {value}")("9")).toEqual(undefined)
      })
    })
  })
})

describe("isBelowOtherField", () => {
  describe("when given invalid input", () => {
    it ("should return a message", () => {
      expect(isBelowOtherField("otherField", "Value should be higher than {max}, you gave {value}")(11, { "otherField": 10 })).toEqual("Value should be higher than 10, you gave 11")
    })
  })

  describe("when given valid input", () => {
    it ("should return undefined", () => {
      expect(isBelowOtherField("otherField", "Value should be higher than {max}, you gave {value}")(9, { "otherField": 9 })).toEqual(undefined)
    })
  })
})

