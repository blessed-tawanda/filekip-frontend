<template>
   <div class="bg-grey-lighter h-full overflow-hidden">
     <div class="flex flex-no-wrap items-start h-full overflow-hidden ">
       <div class="bg-white flex-none shadow-sm mt-4 w-48">
         <router-link class="block px-4 py-2 border-l-4 border-teal no-underline hover:bg-grey-lighter font-semibold text-xl text-black" tag="a" to="/">Video</router-link>
         <router-link class="block px-4 py-2 border-l-4 border-transparent no-underline hover:bg-grey-lighter font-semibold text-xl text-black" tag="a" to="/">Audio</router-link>
         <router-link class="block px-4 py-2 border-l-4 border-transparent no-underline hover:bg-grey-lighter font-semibold text-xl text-black" tag="a" to="/">Pictures</router-link>
         <router-link class="block px-4 py-2 border-l-4 border-transparent no-underline hover:bg-grey-lighter font-semibold text-xl text-black" tag="a" to="/">Misc</router-link>
       </div>
       <div class="bg-white shadow h-5/6 m-4 w-full overflow-scroll">
         <item filename="Blessed"></item>
         <item filename="Tawanda"></item>
         <item filename="Mahuni"></item>
         <item filename="Josie"></item>
         <item filename="Vickie"></item>
         <item filename="Blessed"></item>
         <item filename="Tawanda"></item>
         <item filename="Mahuni"></item>
       </div>
     </div>
   </div>
</template>

<script>
import '@/assets/styles/main.css'
import Item from '@/components/Item.vue'
export default {
  components: {
    Item: Item
  }
}
</script>

<style>

</style>
