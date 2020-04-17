import { mount, shallowMount} from '@vue/test-utils'
import Vue from 'vue'

describe('Greeting', () => {
    it('renders a greeting', () => {
        const Child = Vue.component("Child", {
            name: "Child",
            
            template: "<div>Child component</div>"
        })
        const Parent = Vue.component("Parent", {
            name: "Parent",
            
            template: "<div><child /></div>"
        })
        const shallowWrapper = shallowMount(Parent)
        const mountWrapper = mount(Child)

        console.log(shallowWrapper.html())
        console.log(mountWrapper.html())
    })
})