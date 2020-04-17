import { mount} from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'


describe('Greeting', () => {
    it('renders a greeting', () => {
        const wrapper = mount(Greeting)
        // expect(wrapper.html().includes("Vue and TDD")).toBe(true
        expect(wrapper.text()).toMatch("Vue and TDD")
    })
})