<template>
  <div class="bg-grey-lighter h-full relative p-4">
    <h1 class="text-center font-semibold px-2">Select A File To Upload</h1>
    <div class="box-center h-64 w-3/4" >
      <div class="border-solid border-black border rounded px-4 py-2 mb-4">
        <input @change="viewFiles($event)" type="file" name="file" id="files" multiple>
      </div>
      <div v-if="showList" class="h-32 overflow-scroll">
        <h3>Selected Files</h3>
        <div class="text-left bg-grey-light px-4 py-2 mb-2" v-for="(file,k) in fileList" :key="k"  > {{file}} </div>
      </div>
      <button type="button" class="px-4 py-2 border border-solid border-teal hover:bg-teal text-black shadow font-semibold text-xl">Upload</button>
      <progress-bar class="mt-6" :progress="progress"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import '@/assets/styles/main.css'
export default {
  name: 'HelloWorld',
  components: {
    ProgressBar: ProgressBar
  },
  data () {
    return {
      showList: false,
      progress: 0,
      fileList: []
    }
  },
  methods: {
    viewFiles: function (event) {
      this.showList = true
      // var vm = this
      // event.target.files.forEach(function (file) {
      //   vm.fileList.append(file.name)
      // })
      for (var i = 0; i < event.target.files.length; i++) {
        var size = (event.target.files[i].size / 1024) / 1024
        size = size.toFixed(2)
        this.fileList.push(`Filename: ${event.target.files[i].name} Size: ${size}mb`)
      }
      // console.log(event.target.files[0])
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
