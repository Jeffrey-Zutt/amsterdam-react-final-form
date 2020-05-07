import { isNotIntersectingWith } from "./isNotIntersectingWith"

describe("isNotIntersectingWith", () => {
  describe("when given invalid input", () => {
    describe("when values are strings", () => {
      it ("should return a message", () => {
        expect(isNotIntersectingWith("otherField", "{item} is intersecting")("foo", { otherField: "foo" }))
          .toEqual("foo is intersecting")
      })
    })

    describe("when values are arrays", () => {
      it ("should return a message", () => {
        expect(isNotIntersectingWith("otherField", "{item} is intersecting")(["foo", "bar", "zoo"], { otherField: ["foo", "something different"]}))
          .toEqual("foo is intersecting")
      })
    })
  })

  describe("when given valid input", () => {
    describe("when values are strings", () => {
      it ("should return undefined", () => {
        expect(isNotIntersectingWith("otherField", "{item} is intersecting")("foo", { otherField: "bar" }))
          .toEqual(undefined)
      })
    })

    describe("when values are arrays", () => {
      it ("should return undefined", () => {
        expect(isNotIntersectingWith("otherField", "{item} is intersecting")(["foo", "bar", "zoo"], { otherField: ["something else", "something different"]}))
          .toEqual(undefined)
      })
    })
  })

  describe("when given empty input", () => {
    it("should return undefined", () => {
      expect(isNotIntersectingWith("otherField", "{item} is intersecting")(undefined, {}))
        .toEqual(undefined)
    })
  })
})
