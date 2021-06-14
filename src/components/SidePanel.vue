<template>
  <aside class="sidepanel">
    <button class="sidepanel__close-button" @click="clearActivePokemon()">Close X</button>
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="`Image of ${pokemon.name}`">
    <h3>Size:</h3>
    <ul>
      <li>Height: {{ pokemon.height }}</li>
      <li>Weight: {{ pokemon.weight }}</li>
    </ul>
  </aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    pokemon: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
  methods: {
    ...mapActions(['clearActivePokemon']),
  },
}
</script>

<style lang="scss" scoped>
$darkPurple: #201029;
$offYellow: #ebebc1;

.sidepanel {
  background-color: $darkPurple;
  color: $offYellow;
  height: 100vh;
  max-width: 33.333333%;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;

  &__close-button {
    background-color: $offYellow;
    border: none;
    color: $darkPurple;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 0;
  }

  h2 {
    text-transform: capitalize;
  }

  img {
    max-width: 200px;
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
