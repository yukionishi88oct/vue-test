import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn(),
};

const store = new Vuex.Store({ mutations });

describe("ComponentWithButtons", () => {
  it("commits a mutation when a button is clicked", async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue,
    });

    wrapper.find(".commit").trigger("click");
    await wrapper.vm.$nextTick();

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: "Test Commit" }
    );
  });
});
