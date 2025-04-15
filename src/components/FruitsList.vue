<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruit-removed', 'fruit-changed'],

  methods: {
    updateFruits(newFruit, oldFruit) {
      return this.fruits.map(f => (f === oldFruit ? newFruit : f))
    },
  },
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="(fruit, idx) of fruits"
      :key="idx"
      :fruit="fruit"
      @fruit-changed="$emit('fruits-updated', updateFruits($event, fruit))"
      @fruit-removed="$emit('fruit-removed', $event)"
    />
  </ul>
</template>
