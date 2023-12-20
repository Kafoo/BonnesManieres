<template>
  <v-sheet class="text-no-wrap">

    <hr class="mb-4"/>

    <FooterImage/>

    <FooterInfosDesktop v-if="!mobile"/>

    <v-sheet
    v-if="mobile"
    class="d-flex justify-center flex-grow-1 align-center"
    :class="mobile?'flex-column':''"
    >
      <v-sheet class="ma-5">
        <v-img
        :src="require('@/static/HeadTextLogo.png')"
        width="160px"
        >
        </v-img>
      </v-sheet>

      <v-sheet class='Montserrat--text mx-3 mb-5 d-flex flex-column align-center'>
        <v-sheet class="font-weight-bold mb-3">PARIS - CANNES - BARCELONE</v-sheet>
        <v-icon size="20px">mdi-cellphone</v-icon>
        <v-sheet class="mb-3">+33 (0)6 84 58 67 64</v-sheet>
        <v-icon size="20px">mdi-email</v-icon>
        <v-sheet class="mb-3">nadia@lesbonnesmanieres.paris</v-sheet>
        <SocialsIcons/>
      </v-sheet>
    </v-sheet>

    <v-sheet
    v-if="mobile"
    class="d-flex flex-wrap mx-2 mb-5 justify-center">
      <p
      v-for="activity in activities"
      :key="activity.name"
      class="mr-2"
      >
        - {{ activity.name }}
      </p>
    </v-sheet>

    <v-footer color="secondary" class="d-flex justify-space-around white--text backgrounded Montserrat mentions-légales">
      site officiel : tous droits réservés les bonnes manières - © 2023 - mentions légales
    </v-footer>
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from '@nuxtjs/composition-api'
import SocialsIcons from '../atoms/SocialsIcons.vue'
import FooterImage from '../molecules/FooterImage.vue'
import FooterInfosDesktop from '../molecules/FooterInfosDesktop.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  components: { SocialsIcons, FooterImage, FooterInfosDesktop },

  name: 'DefaultLayout',
  setup () {
    const mobile = isMobile(window)

    const activitesColumn1 = [
      { name: 'Concept créatif' },
      { name: 'Stratégie digitale, physique, hybride' },
      { name: 'Création de contenu' },
      { name: 'Design graphique' },
      { name: 'Pop-up store' }
    ]
    const activitesColumn2 = [
      { name: 'Scénographie et design d’espace' },
      { name: 'Logistique et Production' },
      { name: 'Technique' },
      { name: 'Soirées corporate' },
      { name: 'Séminaires d’entreprise' }
    ]

    const activities = activitesColumn1.concat(activitesColumn2)

    return {
      mobile,
      activitesColumn1,
      activitesColumn2,
      activities
    }
  }
})
</script>

<style scoped>

hr{
  margin: 30px 0 50px 0;
  border: none;
  border-top: 1px solid black;
  color: black;
  height: 2px;
}
.v-footer{
  font-family: 'Montserrat';
  font-size: small;
}

p{
  font-family: 'Montserrat';
  line-height: 20px;
  margin-bottom: 0px;
}

.mentions-légales{
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 25px;
}

.home-picture{
  background-image: url('static/pictures/Home.jpg');
  background-size: contain;
  background-position: 0px -150px;
}

</style>
