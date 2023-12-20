<template>
  <v-sheet class="text-no-wrap">
      <hr/>
      <v-sheet class="d-flex flex-column justify-center align-center backgrounded ma-auto" color="blue" width="90%" height="250px">

        <ClassicTitle
        color='white'
        :text="['Let\'s share who we are', 'watch what we do.']"
        small
        />

      </v-sheet>

    <v-sheet class="d-flex justify-space-around align-center flex-wrap-reverse ma-5 mb-8 mt-12 black--text">
        <v-sheet
        class="d-flex justify-space-around flex-grow-1 align-center"
        :class="mobile?'flex-column':''"
        >
          <v-sheet>
            <v-img
            :src="require('@/static/HeadTextLogo.png')"
            width="120px"
            >
            </v-img>
          </v-sheet>

          <v-sheet class='Montserrat--text'>
            <v-sheet class="font-weight-bold">PARIS - CANNES - BARCELONE</v-sheet>
            <v-sheet><v-icon size="17px">mdi-cellphone</v-icon>+33 (0)6 84 58 67 64</v-sheet>
            <v-sheet><v-icon size="17px">mdi-email</v-icon> nadia@lesbonnesmanieres.paris</v-sheet>
            <SocialsIcons/>
          </v-sheet>
        </v-sheet>

        <v-sheet
        v-if="!mobile"
        class="d-flex justify-space-around flex-grow-1 align-center"
        >
          <v-sheet>
            <p v-for="activity in activitesColumn1" :key="activity.name">- {{activity.name}}</p>
          </v-sheet>
          <v-sheet class="mr-8">
            <p v-for="activity in activitesColumn2" :key="activity.name">- {{activity.name}}</p>
          </v-sheet>
        </v-sheet>

    </v-sheet>

    <v-sheet
    v-if="mobile"
    class="d-flex flex-wrap mx-2 justify-center">
      <p
      v-for="activity in activities"
      :key="activity.name"
      class="mr-2"
      >
        - {{ activity.name }}
      </p>
    </v-sheet>

    <v-footer color="secondary" class="d-flex justify-space-around white--text">
      site officiel : tous droits réservés les bonnes manières - © 2023 - mentions légales
    </v-footer>
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from '@nuxtjs/composition-api';
import SocialsIcons from '../atoms/SocialsIcons.vue'
import ClassicTitle from '../atoms/ClassicTitle.vue';
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  components: { SocialsIcons, ClassicTitle },

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
  line-height: 5px;

}

.Montserrat--text{
  font-size: 12px;
  line-height: 25px;
}

</style>
