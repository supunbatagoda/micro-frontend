import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";

const routes = [
  {
    path: "/first",
    name: "FirstComponent",
    component: FirstComponent,
  },
  {
    path: "/second",
    name: "SecondComponent",
    component: SecondComponent,
  },
  {
    path: "*",
    redirect: "/first", // Redirect to the first component by default
  },
];

export default routes;
