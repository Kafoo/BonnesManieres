<template>
  <div>
    <v-btn min-width="0" text rounded class="pa-1 px-0 ma-0">
      <v-icon style="position: relative;">mdi-facebook</v-icon>
    </v-btn>
    <v-btn min-width="0" text rounded class="pa-1 px-0 ma-0">
      <v-icon style="position: relative;">mdi-instagram</v-icon>
    </v-btn>
    <v-btn min-width="0" text rounded class="pa-1 px-0 ma-0">
      <v-icon style="position: relative;">mdi-linkedin</v-icon>
    </v-btn>
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

</style>
