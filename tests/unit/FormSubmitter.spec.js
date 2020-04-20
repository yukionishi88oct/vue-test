import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

describe("FromSubmitter", () => {
    // 1.初期設定
    it("reveals a notification when submitted", async () => {
        const wrapper = shallowMount(FormSubmitter)

        // 2. 実行
        wrapper.find("[data-username]").setValue("alice")
        wrapper.find("form").trigger("submit.prevent")
        await wrapper.vm.$nextTick()

        // 3.検証
        expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice.")
    })
})