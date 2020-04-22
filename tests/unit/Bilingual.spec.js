import { mount } from "@vue/test-utils"
import Bilingual from "@/components/Bilingual.vue"

describe("Bilingual", () => {
    it("renders successfully", () => {
        const wrapper = mount(Bilingual)
        console.log(wrapper.html())
        // const wrapper = mount(Bilingual, {
        //     mocks: {
        //         $t: (msg) => msg
        //     }
        // })
        // console.log(wrapper.find(".hello").text())
        // expect(wrapper.find(".hello").text()).not.toBe("")
    })
})