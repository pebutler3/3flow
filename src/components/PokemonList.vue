<template>
  <section class="pokemon-list">
    <h1>Select Your Favorite Pokemon</h1>
    <div class="pokemon-list__pagination">
      <button @click="paginatePrevious" v-if="getPagination.previous">PREV</button>
      <button @click="paginateNext" v-if="getPagination.next">NEXT</button>
    </div>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <span>{{ pokemon.name }}</span>
        <view-pokemon-button :url="pokemon.url" :isDisabled="getActivePokemon && (getActivePokemon.name === pokemon.name)" />
      </li>
    </ul>
    <div class="pokemon-list__pagination">
      <button @click="paginatePrevious" v-if="getPagination.previous">PREV</button>
      <button @click="paginateNext" v-if="getPagination.next">NEXT</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ViewPokemonButton from '@/components/ViewPokemonButton';

export default {
  props: {
    pokemonList: {
      type: Array,
      default: () => [],
      required: true,
    }
  },
  components: {
    ViewPokemonButton,
  },
  computed: {
    ...mapGetters(['getActivePokemon', 'getPagination']),
  },
  methods: {
    ...mapActions(['paginatePrevious', 'paginateNext']),
  },
}
</script>

<style lang="scss" scoped>
.pokemon-list {
  max-width: 50%;

  &__pagination {
    display: flex;
    justify-content: space-between;
  }
}

ul {
  list-style: none;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
      text-transform: capitalize;
    }
  }
}
</style>