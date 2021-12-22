<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="album-card" flat>
      <v-card-text>
        <v-img
          class="elevation-10 song-img"
          :src="song.img"
        >
        </v-img>
      </v-card-text>

      <v-card-text class="pt-0">
        <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
          <router-link
            :to="{
              name: 'album',
              params: {
                id: 1
              }
            }"
          >
            {{song.title}}
          </router-link>
        </p>
        <p class="caption font-weight-light mb-4 text-truncate">
          {{song.artist}}
        </p>

        <div
          style="position: absolute; right: 10px; bottom: 10px"
          v-show="hover"
        >
          <v-icon size="35" @click="play(song)">mdi-play-circle-outline</v-icon>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "AlbumCard",
  props:['song'],
  methods:{
    ...mapMutations(['play'])
  }
};
</script>
<style scoped>
.song-img{
  width:150px;
  height:150px;
  object-fit: cover;
}
</style>
