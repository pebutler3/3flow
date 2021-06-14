<template>
  <button @click="setActivePokemon(url)" :disabled="isDisabled" :aria-disabled="isDisabled">View Pokemon</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    url: {
      type: String,
      default: '',
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    ...mapActions(['setActivePokemon']),
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 0.5rem 1rem;

  &:not(:disabled) {
    cursor: pointer;
  }
}
</style>