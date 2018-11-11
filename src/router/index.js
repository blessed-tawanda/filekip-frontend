import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/components/Upload'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/',
      name: 'Download',
      component: Download
    }
  ]
})
