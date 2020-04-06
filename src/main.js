import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMicrophone, faRocket, faPenFancy, faCommentAlt, faCommentDots, faRedo, faUserSecret, faCoffee, faHome, faUser, faEnvelope, faShoppingCart, faChartLine, faChartBar, faTable, faWrench, faFileAlt, faSearch, faComments, faBell, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import Chat from 'vue-beautiful-chat'


Vue.use(Chat)


library.add(faMicrophone, faRocket, faPenFancy, faCommentDots, faRedo, faCommentAlt, faFacebook, faUserSecret, faCoffee, faHome, faUser, faEnvelope, faShoppingCart, faChartLine, faChartBar, faTable, faWrench, faFileAlt, faSearch, faComments, faBell, faSignOutAlt)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)





Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')