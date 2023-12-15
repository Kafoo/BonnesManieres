<template>
  <v-app light>
      <StickyHeader/>
      <HeaderVue/>

      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

import HeaderVue from '~/components/organisms/Header.vue'
import StickyHeader from '~/components/organisms/StickyHeader.vue'

export default {

  components: { HeaderVue, StickyHeader },

  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.theme--dark.v-application {
  background-color: var(--v-background-base, #F5F5F5) !important;
}
.theme--light.v-application {
  background-color: var(--v-background-base, #F5F5F5) !important;
}

</style>
