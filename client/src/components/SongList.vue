<template>
  <div>
    <song-list-item v-for="(song,idx) of songs" :key="idx" :song="song" ></song-list-item>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "SongList",
  computed:{
    ...mapState(['songs'])
  },
  props: {
    total: {
      type: Number,
      default: 5
    }
  },

  components: {
    SongListItem: () => import("@/components/SongListItem.vue")
  }
};
</script>
