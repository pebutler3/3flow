<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <side-panel v-if="activePokemon" :pokemon="activePokemon"></side-panel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidePanel from '@/components/SidePanel';

export default {
  components: {
    SidePanel,
  },
  computed: {
    ...mapGetters({
      activePokemon: 'getActivePokemon',
    })
  }
}
</script>

<style lang="scss">
$green: #c4e2c7;

body {
  margin: 0;
}

#app {
  background-color: $green;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem;
}
</style>
