import Vue from 'vue';
import App from './App.vue';

// 打包好的组件--本地测试
import IOCModuleComponent from '../dist/ioc-module-component.es.js';
import '../dist/style.css';

// 打包好的组件--npm包引入测试
// import IOCModuleComponent from 'ioc-module-component';
// import '../node_modules/ioc-module-component/dist/style.css';


Vue.use(IOCModuleComponent);
Vue.use(IOCModuleComponent)
new Vue({
  render: h => h(App)
}).$mount('#app')

// const app = createApp(App);
// app.use(IOCModuleComponent);
// app.mount('#app')


