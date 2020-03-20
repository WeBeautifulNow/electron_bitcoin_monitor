import Vue from "vue";
import App from "./App.vue";
import ViweUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(ViweUI);

new Vue({
	render: h => h(App)
}).$mount("#app");
