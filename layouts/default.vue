<template>
  <v-app light>
      <StickyHeader/>
      <HeaderVue/>

            <v-row>
        <v-card height="1000px">
        </v-card>
      </v-row>

      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <FooterVue/>
  </v-app>
</template>

<script>

import HeaderVue from '~/components/organisms/Header.vue'
import StickyHeader from '~/components/organisms/StickyHeader.vue'
import FooterVue from '~/components/organisms/Footer.vue'

export default {

  components: { HeaderVue, StickyHeader, FooterVue },

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
