<template>
  <div>
    <h1>
      {{text}}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: { type: String }
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

</style>
