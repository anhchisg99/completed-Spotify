<template>
  <v-row>
    <!-- <v-col cols="6" sm="3" md="2" v-for="i of 4" :key="i"> -->
      <album-card
        v-for="(song,idx) in songs" :key="idx"
        :song="song"
      ></album-card>
    <!-- </v-col> -->
  </v-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "AlbumCardList",
  computed:{
    ...mapState(['songs'])
  },

  components: {
    AlbumCard: () => import("@/components/AlbumCard.vue")
  }
};
</script>
