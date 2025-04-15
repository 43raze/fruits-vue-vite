<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruit-removed', 'fruit-changed'],
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="(fruit, idx) of fruits"
      :key="idx"
      :fruit="fruit"
      @fruit-removed="$emit('fruit-removed', $event)"
      @fruit-changed="$emit('fruit-changed', $event)"
    />
  </ul>
</template>
