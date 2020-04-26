import { mount } from "@vue/test-utils"
import Parent from "@/components/Parent.vue"

describe("Parent", () => {
    it("does not render a span", () => {
        const wrapper = mount(Parent, {
            data () {
                return { showSpan: false }
            }
        })

        expect(wrapper.find("span").isVisible()).toBe(false)
    })
})