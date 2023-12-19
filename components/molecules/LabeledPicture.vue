<template>
  <div>
      <v-sheet class="d-flex flex-column mx-5" width="240px">
        <v-img
        :src=imageSrc
        width="240px"
        height="400px"
        ></v-img>
        <v-sheet class="mt-3">
          <p class="text-uppercase Yeseva--text sous-image mt-3">{{ text }}</p>
        </v-sheet>
      </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    imageSrc: { type: String, default: require('@/static/pictures/Dior-303.jpg') },
    text: String
  },
  setup () {
    return {
    }
  }
})
</script>

<style scoped>

.sous-image{
  letter-spacing: 3px;
  font-size: 12px;
}

</style>
