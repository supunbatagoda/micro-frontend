import Vue from 'vue';
import VueRouter from 'vue-router'; // Import VueRouter
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import routes from './routes'; // Define routes in a separate file

Vue.config.productionTip = false;

// Use VueRouter in Vue
Vue.use(VueRouter);

// Create the router instance
const router = new VueRouter({
  mode: "history",
  base: "/vue2", // Set the base path
  routes,
});

// Configure Single-SPA lifecycles
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router, // Pass the router instance here
    render(h) {
      return h(App, {
        props: {
          // Single-SPA props can be forwarded here if needed
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

// Export Single-SPA lifecycle hooks
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
