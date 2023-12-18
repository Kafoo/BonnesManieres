<template>
  <div class="cursor">
      <v-icon class="ma-0" color="text" style="position: relative;">mdi-facebook</v-icon>
      <v-icon class="ma-0" color="text" style="position: relative;">mdi-instagram</v-icon>
      <v-icon class="ma-0" color="text" style="position: relative;">mdi-linkedin</v-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {

  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

.v-icon:hover{
  cursor: pointer;
}

</style>
