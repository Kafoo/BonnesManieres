<template>
  <v-app light>
      <!-- <StickyHeader/> -->

      <v-row justify="center">
        <v-card
        elevation="0"
        color="background"
        width="100%"
        class="pa-9 d-flex justify-center"
        v-intersect="onIntersect"
        >
          <router-link to="/">
            <v-img
              :width="200"
              :max-width="200"
              cover
              :src="require('@/static/TextLogo.png')"
              to="/"
              >
            </v-img>
          </router-link>
        </v-card>

      </v-row>
      <HeaderVue :head= "head.value" />

      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <FooterVue/>
  </v-app>
</template>

<script lang="ts">

import { defineComponent, reactive } from '@nuxtjs/composition-api'
import HeaderVue from '~/components/organisms/Header.vue'
import FooterVue from '~/components/organisms/Footer.vue'

export default defineComponent({
  components: { HeaderVue, FooterVue },
  name: 'Default',

  setup () {
    // To know if HeadLogo has to be shown in Navigation
    const head = reactive({ value: true })
    function onIntersect (isIntersecting:any) { head.value = !isIntersecting[0].isIntersecting }

    return {
      onIntersect,
      head
    }
  }
})

</script>

<style scoped>

.page-enter-active,
.page-leave-active {

}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transition: all 0.15s;
}

.plop{
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
}

</style>
