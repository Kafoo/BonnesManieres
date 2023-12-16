<template>
  <div class="on-top">

    <v-container class="mt-n15">

      <v-row justify="center">
        <v-card elevation="0" color="background" width="100%" class="pa-9 d-flex justify-center">
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

      <v-row>

        <v-app-bar
        elevation="0"
        height="40px"
        class="mb-2 mt-0 mx-4"
        >

          <v-toolbar-items style="position: absolute; left: 10px;">
            <SocialsIcons/>
          </v-toolbar-items>

          <Navigation/>

          <ChooseLocation/>

        </v-app-bar>

      </v-row>

    </v-container>
  </div>
</template>

<script>

import Navigation from '~/components/molecules/Navigation.vue'
import SocialsIcons from '~/components/atoms/SocialsIcons.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'

export default {

  components: { Navigation, SocialsIcons, ChooseLocation },

  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.on-top{
  z-index: 2;
}

</style>
