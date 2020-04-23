import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

describe("ParentWithAPICallChild.vue", () => {
    it("renders with mount and does initialize API call", () => {
        const wrapper = mount(ParentWithAPICallChild)

        expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true)
    })
})