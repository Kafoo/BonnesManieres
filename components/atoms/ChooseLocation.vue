<template>
    <v-toolbar-items
    style="position: absolute; right: 10px;"
    class="d-flex align-center"
    >
      <v-btn min-width="0" text class="px-1 ma-0" >FR</v-btn>
      <v-card height="20px" color="background">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>
      <v-btn min-width="0" text class="px-1 ma-0" >US</v-btn>
    </v-toolbar-items>
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
