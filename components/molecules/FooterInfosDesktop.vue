<template>
<v-sheet class="d-flex justify-space-around align-center flex-wrap ma-5 my-5 black--text">
        <v-sheet
        class="d-flex justify-center flex-grow-1 align-center"
        >
          <v-sheet class="mr-5 mb-5">
            <v-img
            :src="require('@/static/HeadTextLogo.png')"
            width="120px"
            >
            </v-img>
          </v-sheet>

          <v-sheet class='Montserrat--text mx-3'>
            <v-sheet class="font-weight-bold">PARIS - CANNES - BARCELONE</v-sheet>
            <v-sheet><v-icon size="17px">mdi-cellphone</v-icon>+33 (0)6 84 58 67 64</v-sheet>
            <v-sheet><v-icon size="17px">mdi-email</v-icon> nadia@lesbonnesmanieres.paris</v-sheet>
            <SocialsIcons/>
          </v-sheet>
        </v-sheet>

        <v-sheet
        class="d-flex justify-center flex-grow-1 align-center"
        >
          <v-sheet class="mx-3 mr-5">
            <p v-for="activity in activitesColumn1" :key="activity.name">- {{activity.name}}</p>
          </v-sheet>
          <v-sheet class="mx-3">
            <p v-for="activity in activitesColumn2" :key="activity.name">- {{activity.name}}</p>
          </v-sheet>
        </v-sheet>

    </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SocialsIcons from '../atoms/SocialsIcons.vue'

export default defineComponent({

  name: 'FooterInfosDesktop',

  components: { SocialsIcons },

  setup () {
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
      activitesColumn1,
      activitesColumn2,
      activities
    }
  }
})

</script>

<style scoped>

.v-footer{
  font-family: 'Montserrat';
  font-size: small;
}

p{
  font-family: 'Montserrat';
  line-height: 20px;
  margin-bottom: 0px;
}

.Montserrat--text{
  font-size: 12px;
  line-height: 25px;
}

</style>
