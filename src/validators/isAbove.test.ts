import { isAbove } from "./isAbove"

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
