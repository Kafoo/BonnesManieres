<template>
  <div>
    <v-btn class="rounded-lg ma-5" outlined :to="to">
      {{text}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: { type: String },
    to: { type: String }
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

</style>
