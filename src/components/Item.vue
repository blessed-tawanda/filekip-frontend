<template>
  <div class="py-2 px-2 text-black flex justify-between items-center text-sm font-semibold bg-grey-lighter m-2">
    <p>{{filename}}</p>
    <button class="border border-teal border-solid font-semibold py-2 px-2 hover:bg-teal shadown-sm" >Download</button>
  </div>
</template>

<script>
export default {
  props: {
    filename: String
  }
}
</script>

<style>

</style>
