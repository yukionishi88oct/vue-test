import flushPromises from "flush-promises"
import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue" 

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe("FromSubmitter", () => {
    // 1.初期設定
    it("フォームを更新するとお知らせを表示", async () => {
        // const wrapper = shallowMount(FormSubmitter)
        const wrapper = shallowMount(FormSubmitter, {
            mocks: {
                $http: mockHttp
            }
        })

        // 2. 実行
        wrapper.find("[data-username]").setValue("alice")
        wrapper.find("form").trigger("submit.prevent")
        // await wrapper.vm.$nextTick()
        await flushPromises()

        // 3.検証
        // expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice.")
        expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice.")
    })
})