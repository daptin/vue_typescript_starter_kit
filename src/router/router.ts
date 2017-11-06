import Vue from 'vue'
import Router from 'vue-router'
import {RouteConfig} from 'vue-router'
import {RouterOptions} from 'vue-router'
import cHello from '../components/cHello.vue'

Vue.use(Router);

const helloRoute:RouteConfig = 
{
  path: '/',
  name: 'Hello',
  component: cHello
}

const routerOptions:RouterOptions = { routes: [helloRoute] }
 
export default new Router(
  routerOptions
)
