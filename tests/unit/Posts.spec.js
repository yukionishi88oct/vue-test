import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";

import Posts from "@/components/Posts.vue";
import { createRouter } from "@/createRouter";
import { createStore } from "@/createStore";

const createTestVue = () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);

  const store = createStore();
  const router = createRouter();
  return { store, router, localVue };
};

describe("Posts.vue", () => {
  it("renders a message if passed", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);

    const store = createStore();
    const router = createRouter();
    const message = "New content coming soon!";
    const wrapper = mount(Posts, {
      propsData: { message },
      store,
      router,
    });

    expect(wrapper.find("#message").text()).toBe("New content coming soon!");
  });

  it("renders posts", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);

    const store = createStore();
    const router = createRouter();
    const message = "New content coming soon!";

    const wrapper = mount(Posts, {
      propsData: { message },
      store,
      router,
    });

    wrapper.vm.$store.commit("ADD_POSTS", [{ id: 1, title: "Post" }]);
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".post").length).toBe(1);
  });

  it("renders a message if passed", () => {
    const { localVue, store, router } = createTestVue();
    const message = "New content coming soon!";
    const wrapper = mount(Posts, {
      propsData: { message },
      store,
      router,
      localVue,
    });

    expect(wrapper.find("#message").text()).toBe("New content coming soon!");
  });
});
