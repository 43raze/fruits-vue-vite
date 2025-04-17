<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruits-updated'],

  methods: {
    swapFruit(newFruit, oldFruit) {
      return this.fruits.map(f => (f === oldFruit ? newFruit : f))
    },

    removeFruit(fruit) {
      return this.fruits.filter(f => f !== fruit)
    },
  },
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="fruit of fruits"
      :key="fruit"
      :fruit="fruit"
      @fruit-changed="$emit('fruits-updated', swapFruit($event, fruit))"
      @fruit-removed="$emit('fruits-updated', removeFruit($event))"
    />
  </ul>
</template>
