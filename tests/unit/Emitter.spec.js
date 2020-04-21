import Emitter from "@/components/Emitter.vue"
import { shallowMount } from "@vue/test-utils"

describe("Emitter", () => {
    it("２つの引数があるイベントを発火する", () => {
        const wrapper = shallowMount(Emitter)

        wrapper.vm.emitEvent()

        // console.log(wrapper.emitted().myEvent)
        expect(wrapper.emitted().myEvent[0]).toEqual(['name', "password"])
    })

    it("コンポーネントをレンダーせずにイベントを検証する", () => {
        const events = {}
        const $emit = (event, ...args) => { events[event] = [...args] }

        Emitter.methods.emitEvent.call({ $emit })

        expect(events.myEvent).toEqual(["name", "password"])
    })
})