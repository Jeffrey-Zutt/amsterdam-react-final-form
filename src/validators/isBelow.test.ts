import { isBelow } from "./isBelow"

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
