import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

describe("ParentWithAPICallChild.vue", () => {
    it("renders with mount and does initialize API call", () => {
        const wrapper = mount(ParentWithAPICallChild, {
            stubs: {
                ComponentWithAsyncCall: "<div class='stub'></div>"
            }
        })

        expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true)
    })

    it("renders with shallowMount and does initialize API call", () => {

        const wrapper = shallowMount(ParentWithAPICallChild)

        expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true)
    })
})