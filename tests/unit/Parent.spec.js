import { mount } from "@vue/test-utils"
import Parent from "@/components/Parent.vue"
import Child from "@/components/Child.vue"
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue"

describe("Parent", () => {
    it("does not render a span", () => {
        const wrapper = mount(Parent, {
            data () {
                return { showSpan: false }
            }
        })

        expect(wrapper.find("span").isVisible()).toBe(false)
    })

    it("does not render a Child component", () => {
        const wrapper = mount(Parent)
        
        expect(wrapper.find(Child).exists()).toBe(false)
    })

    it("renders a Child component", () => {
        const wrapper = mount(Parent, {
          data() {
            return { showChild: true }
          }
        })
      
        expect(wrapper.find({ name: "Child" }).exists()).toBe(true)
    })

    it("renders many children", () => {
        const wrapper = mount(ParentWithManyChildren)
      
        expect(wrapper.findAll(Child).length).toBe(3)
    })
})