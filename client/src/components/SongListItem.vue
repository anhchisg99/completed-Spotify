<template>
<div class="list">
  <!-- <v-hover v-slot:default="{ hover }"> -->
    <!-- <v-list-item class="pl-0" :dense="dense" link two-line> -->
      <v-list-item-content class="py-0">
        <v-row class="align-center">
          <v-col class="py-0" cols="auto"
            ><v-img
              src="https://www.poeticous.com/system/poets/photos/000/027/934/large/18665740.jpg?1499224152"
              width="64px"
              height="64px"
            >
              <v-overlay absolute opacity="0" :value="hover">
                <v-icon size="35">mdi-play-circle-outline</v-icon>
              </v-overlay>
            </v-img>
          </v-col>
          <v-col>
            <v-list-item-title>
              <v-list-item-title>
                <router-link
                  :to="{
                    name: 'album',
                    params: {
                      id: 1
                    }
                  }"
                >
                  <!-- Siento Miedo de Pensar -->
                  {{song.title}}
                </router-link>
              </v-list-item-title>
              <v-list-item-subtitle>
                <router-link
                  :to="{
                    name: 'artist',
                    params: {
                      id: 1
                    }
                  }"
                >
                  Rosario Alfonso
                </router-link>
              </v-list-item-subtitle>
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item-content>

      <!-- <v-list-item-action>
        3:49
      </v-list-item-action> -->
    <!-- </v-list-item> -->
  <!-- </v-hover> -->
  </div>
</template>

<script>
export default {
  name: "SongListItem",

  props: ["dense","song"]
};
</script>
