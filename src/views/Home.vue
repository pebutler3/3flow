<template>
  <div class="home">
    <pokemon-list :pokemonList="pokemonList"></pokemon-list>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import PokemonList from '@/components/PokemonList';

export default {
  name: 'Home',
  components: {
    PokemonList,
  },
  computed: {
    ...mapGetters({
      pokemonList: 'getPokemon',
    }),
  },
  created() {
    this.setPokemon();
  },
  methods: {
    ...mapActions(['setPokemon']),
  },
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
