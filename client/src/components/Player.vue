<template>

  <v-row class="player-attr">
    <v-col class="py-0" cols="12" sm="auto">
      <v-row v-if="current" class="justify-center align-center" style="height: 100%;">
        <v-col cols="auto">
          <v-img
            class="elevation-10"
            :src="current.img"
            width="56"
            height="56"
          ></v-img>
        </v-col>
        <v-col class="pl-1 text-truncate">
          <span>
            <router-link
              class="body-2 font-weight-medium ma-0"
              :to="{
                name: 'album',
                params: {
                  id: 1
                }
              }"
            >
              {{current.title}}
            </router-link>
          </span>
          <br />
          <span class="caption font-weight-light">
            <router-link
              class="ma-0"
              :to="{
                name: 'artist',
                params: {
                  id: 1
                }
              }"
            >
              {{current.artist}} </router-link
            >
            
          </span>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="py-0 d-flex align-center">
      <v-row class="justify-center align-center">
        <div
          
          class="mx-3"
        >
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            
          >
          
            <v-icon v-text="`mdi-shuffle`"></v-icon>
          </v-btn>
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            @click="prev"
          >
            <v-icon v-text="`mdi-skip-previous`"></v-icon>
          </v-btn>
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            v-if="!isPlaying"
            @click="play"
          >
            <v-icon v-text="`mdi-play-circle`"></v-icon>
          </v-btn>
           <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            v-else
            @click="pause"
            
          >
            <v-icon v-text="`mdi-stop-circle`"></v-icon>
          </v-btn>
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            @click="next"
          >
            <v-icon v-text="`mdi-skip-next`"></v-icon>
          </v-btn>
         
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
            
          >
            <v-icon v-text="`mdi-repeat`"></v-icon>
            
          </v-btn>
        </div>
        
        <div class="ml-5 caption hidden-sm-and-down">
          {{current.time}}
        </div>
      </v-row>
    </v-col>
    <v-col class="d-flex align-center" cols="auto">
      <v-btn :to="{ name: 'queue' }" icon>
        <v-icon>mdi-playlist-play</v-icon>
      </v-btn>
    </v-col>
  </v-row>

</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "Player",
  computed:{
    ...mapState(['current','isPlaying'])
  },
  methods:{
    ...mapMutations(['next','pause','play','prev'])
  }
  

};

</script>
<style scoped>
.player-attr{
  background-color: #e13475;
  
}

</style>
