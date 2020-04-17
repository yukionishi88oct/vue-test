import NumberRenderer from "@/components/NumberRenderer.vue"

describe("NumberRenderer", () => {
    it("renders old numbers", () => {
        const localThis = { even: false }

        expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
    })
})