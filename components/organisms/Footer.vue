<template>
  <div>
    <v-sheet class="d-flex justify-space-around align-center flex-wrap-reverse ma-5 mb-8 mt-12" color="background">

        <v-sheet color="background">
          <v-img
          :src="require('@/static/HeadTextLogo.png')"
          width="150px"
          >
          </v-img>
        </v-sheet>

        <v-sheet color="background">
          <p>PARIS - CANNES - BARCELONE</p>
          <p><v-icon>mdi-cellphone</v-icon>+33 (0)6 84 58 67 64</p>
          <p><v-icon>mdi-email</v-icon>nadia@lesbonnesmanieres.paris</p>
          <SocialsIcons/>
        </v-sheet>

        <v-sheet color="background">
          <p v-for="activity in activitesColumn1" :key="activity.name">- {{activity.name}}</p>
        </v-sheet>
        <v-sheet color="background" class="mr-8">
          <p v-for="activity in activitesColumn2" :key="activity.name">- {{activity.name}}</p>
        </v-sheet>


    </v-sheet>
    <v-footer color="secondary" class="d-flex justify-space-around white--text">
      site officiel : tous droits réservés les bonnes manières - © 2023 - mentions légales
    </v-footer>
  </div>
</template>

<script lang="ts">

import SocialsIcons from '../atoms/SocialsIcons.vue';

export default {

  components: { SocialsIcons },

  name: 'DefaultLayout',
  data () {
    return {
      activitesColumn1: [
        { name: 'Concept créatif' },
        { name: 'Stratégie digitale, physique, hybride' },
        { name: 'Création de contenu' },
        { name: 'Design graphique' },
        { name: 'Pop-up store' }
      ],
      activitesColumn2: [
        { name: 'Scénographie et design d’espace' },
        { name: 'Logistique et Production' },
        { name: 'Technique' },
        { name: 'Soirées corporate' },
        { name: 'Séminaires d’entreprise' }
      ]
    }
  }
}
</script>

<style scoped>

.v-footer{
  font-family: 'Montserrat';
  font-size: small;
}

p{
  font-family: 'YESEVA ONE';
  line-height: 10px;
}

</style>
