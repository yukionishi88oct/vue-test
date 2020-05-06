import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithVuex from "@/components/ComponentWithVuex.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

// mock store
const store = new Vuex.Store({
  state: {
    username: "alice",
  },
});

describe("ComponentWithVuex", () => {
  it("renders a username using a real Vuex store", () => {
    const wrapper = mount(ComponentWithVuex, {
      store,
      localVue,
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });
});
