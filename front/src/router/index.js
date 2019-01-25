import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AnimeView from '@/components/AnimeView'
import AnimeForm from '@/components/AnimeForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/anime',
      name: 'AnimeView',
      component: AnimeView
    },
    {
      path: '/animeForm',
      name: 'AnimeForm',
      component: AnimeForm
    },
    {
      path: '/animeForm/:id',
      name: 'AnimeFormById',
      component: AnimeForm,
      props: true
    }
  ]
})
