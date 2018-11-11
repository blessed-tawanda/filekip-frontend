<template>
  <div class="h-6 w-px shadow bg-teal border border-solid border-teal rounded" :style="width"></div>
</template>

<script>
export default {
  props: {
    progress: Number
  },
  computed: {
    width: function () {
      if (this.progress <= 100) {
        return {
          'width': this.progress + '%'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
