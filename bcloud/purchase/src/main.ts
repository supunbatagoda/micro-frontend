import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import "./assets/main.css";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    // Any app-specific configuration can go here
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// Add this to ensure the app is only mounted through single-spa
if (!window.singleSpaNavigate) {
  const app = createApp(App);
  app.mount("#app");
}
