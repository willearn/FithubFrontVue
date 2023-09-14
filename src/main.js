import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
import VueReCaptcha  from 'vue-recaptcha-v3'


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.config.productionTip = false;

app.use(pinia);
app.use(router);
app.use(VueReCaptcha, { siteKey:'6LeOWiQoAAAAANyo0GEo7P_qI47U9uQ67q1FOlYq'});
app.use(vue3GoogleLogin, {
  clientId:
    "1052054161616-ierb817mjstfe847c2diep8911njsgap.apps.googleusercontent.com",
});


app.mount("#app");
