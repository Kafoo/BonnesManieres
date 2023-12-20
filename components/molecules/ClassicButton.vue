<template>
  <div>
    <v-btn
    class="rounded-lg ma-5 pa-5 font-weight-bold"
    outlined
    :to="to"
    :color="color">
      {{text}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    color: { type:String, default: 'black' },
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
