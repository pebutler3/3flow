<template>
  <div class="pokemon-list__pagination">
    <button @click="paginatePrevious" v-if="getPagination.previous">PREV</button>
    <button @click="paginateNext" v-if="getPagination.next">NEXT</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getPagination']),
  },
  methods: {
    ...mapActions(['paginatePrevious', 'paginateNext']),
  }
}
</script>