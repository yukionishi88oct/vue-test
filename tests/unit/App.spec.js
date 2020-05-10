import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import NestedRoute from "@/components/NestedRoute.vue";
import routes from "@/routes.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push("/nested-route");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(NestedRoute).exists()).toBe(true);
  });

  it("should have a different route that /nested-route", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
    });
    // This test will fail because we are still on the /nested-route
    expect(wrapper.find(NestedRoute).exists()).toBe(false);
    console.log(router.currentRoute);
  });
});
