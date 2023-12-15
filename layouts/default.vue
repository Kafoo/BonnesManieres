<template>
  <v-app light>

      <v-container class="sticky-bar">
        <v-row >

          <v-app-bar
          elevation="0"
          height="40px"
          class=" ma-2 mx-4"
          >

            <v-toolbar-items style="position: absolute; left: 10px;">
              <v-img
              :src="require('@/static/HeadLogo.png')"
              width="40px"
              >
              </v-img>
              <v-btn min-width="0" text round class="pa-1 ma-0">
                <v-icon style="position: relative;">mdi-facebook</v-icon>
              </v-btn>
              <v-btn min-width="0" text round class="pa-1 ma-0">
                <v-icon style="position: relative;">mdi-instagram</v-icon>
              </v-btn>
              <v-btn min-width="0" text round class="pa-1 ma-0">
                <v-icon style="position: relative;">mdi-linkedin</v-icon>
              </v-btn>
            </v-toolbar-items>

          <v-toolbar-items class="d-flex mx-auto" >

            <v-btn class="px-3" elevation="0">Notre Expertise</v-btn>

            <v-card height="20px" class="my-2" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Nos Créations</v-btn>

            <v-card height="20px" class="my-2" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Qui Sommes Nous</v-btn>

            <v-card height="20px" class="my-2" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Contact</v-btn>
          </v-toolbar-items>

            <v-toolbar-items style="position: absolute; right: 10px;">
              <v-btn min-width="0" text class="px-1 ma-0" >FR</v-btn>
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
              <v-btn min-width="0" text class="px-1 ma-0" >US</v-btn>
            </v-toolbar-items>

          </v-app-bar>

        </v-row>
      </v-container>

    <v-container class="mt-n15">

      <v-row justify="center">
        <v-card elevation="0" color="background" width="100%" class="pa-9 d-flex justify-center">
          <v-img
            :width="200"
            :max-width="200"
            cover
            :src="require('@/static/TextLogo.png')"
            >
          </v-img>
        </v-card>

      </v-row>

      <v-row>

        <v-app-bar
        elevation="0"
        height="20px"
        class="mb-2 mt-0 mx-4"
        >

          <v-toolbar-items style="position: absolute; left: 10px;">
            <v-btn min-width="0" text round class="pa-1 ma-0">
              <v-icon style="position: relative;">mdi-facebook</v-icon>
            </v-btn>
            <v-btn min-width="0" text round class="pa-1 ma-0">
              <v-icon style="position: relative;">mdi-instagram</v-icon>
            </v-btn>
            <v-btn min-width="0" text round class="pa-1 ma-0">
              <v-icon style="position: relative;">mdi-linkedin</v-icon>
            </v-btn>
          </v-toolbar-items>

          <v-toolbar-items class="d-flex mx-auto primary" >

            <v-btn class="px-3" elevation="0">Notre Expertise</v-btn>

            <v-card height="20px" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Nos Créations</v-btn>

            <v-card height="20px" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Qui Sommes Nous</v-btn>

            <v-card height="20px" color="background">
              <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            </v-card>

            <v-btn class="px-3" elevation="0">Contact</v-btn>
          </v-toolbar-items>

          <v-toolbar-items style="position: absolute; right: 10px;">
            <v-btn min-width="0" text class="px-1 ma-0" >FR</v-btn>
            <v-divider class="ma-0" color="#00000070" vertical></v-divider>
            <v-btn min-width="0" text class="px-1 ma-0" >US</v-btn>
          </v-toolbar-items>

        </v-app-bar>

      </v-row>

      <v-row>
        <v-card height="1500px">
        </v-card>
      </v-row>

    </v-container>

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
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
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
.sticky-bar{
  z-index: 0;
  position: sticky;
  top: 0;
  left: 0;
}

.v-app-bar .v-icon{
  position: absolute;
  left: 2px;
}

.test{
  position: absolute;
  right: 50px;
}

</style>
