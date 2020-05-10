import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import { bustCache } from "./bust-cache.js";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.shouldBustCache)) {
    bustCache();
  }
  next();
});

export default router;
