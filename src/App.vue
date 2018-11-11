<template>
  <div class="container mx-auto h-myscreen bg-white shadow mt-12 overflow-hidden">
    <nav class="flex justify-around w-full content-center">
      <router-link tag="a" to="/" class="py-2 block no-underline font-semibold text-center hover:bg-grey-light  text-3xl text-black self-center w-1/2 border-b-2 border-transparent" active-class="bg-grey-lighter border-b-2 border-teal" exact>Download A File</router-link>
      <router-link tag="a" to="/upload" class="py-2 block no-underline font-semibold text-center hover:bg-grey-light  text-3xl text-black self-center w-1/2 border-b-2 border-transparent" active-class="bg-grey-lighter border-b-2 border-teal" exact>Upload A File</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
export default {
  name: 'App'
}
</script>

<style>

</style>
