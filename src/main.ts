import { createApp } from 'vue';
import vue3GoogleLogin from 'vue3-google-login';
// import native from 'naive-ui';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
const clientId = '1019482140223-7pa4snouqg9njc0p306jsjvqhrqdcmv5.apps.googleusercontent.com';
// app.use(native);
app.use(vue3GoogleLogin, {
    clientId,
});
app.use(store);
app.use(router);
app.mount('#app');

