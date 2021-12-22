import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: {},
    index: 0,
    isPlaying: false,
    songs: [
      {
        title: "Angle 2 me",
        artist: "Je",
        time:'3.17',
        img:'https://storage.googleapis.com/store_mp3/angle2me.jpg',
        src: require("../assets/music1.mp3"),
      },
      {
        title: "Baby I told you",
        time:'4.14',
        artist: "Monstart",
        img:'https://storage.googleapis.com/store_mp3/baby.png',
        src: require("../assets/music2.mp3"),
      },
    ],
    player: new Audio(),
  },
  mutations: {
    play(state,song) {
      if (typeof song.src != "undefined") {
        state.current = song;
        state.player.src = state.current.src;
      }
      state.player.play();
      state.player.addEventListener(
        "ended",
        function () {
          state.index++;
          if (state.index > state.songs.length - 1) {
            state.index = 0;
          }
          state.current = state.songs[state.index];
          // this.commit('play',state.current)

          state.play(state.current);
        }.bind(state)
      );
      state.isPlaying = true;
    },
    pause(state) {
      state.player.pause();
      state.isPlaying = false;
    },
    next(state) {
      state.index++;
      if (state.index > state.songs.length - 1) {
        state.index = 0;
      }
      state.current = state.songs[state.index];
      this.commit('play',state.current)
      // state.play(state.current);
    },
    prev(state) {
      state.index--;
      if (state.index < 0) {
        state.index = state.songs.length - 1;
      }
      state.current = state.songs[state.index];
      this.commit('play',state.current)
      // state.play(state.current);
    
  },
  },
  actions: {},
  modules: {}
});
