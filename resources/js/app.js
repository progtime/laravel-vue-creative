import Vue from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
require("./bootstrap");

const app = new Vue({
    el: "#app",
    components: { ExampleComponent }
});
