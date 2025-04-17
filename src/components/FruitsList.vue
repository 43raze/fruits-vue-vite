<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruit-removed', 'fruit-changed', 'fruits-updated'],

  methods: {
    updateFruits(newFruit, oldFruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.map(f => (f === oldFruit ? newFruit : f))
      )
    },

    removeFruit(fruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.filter(f => f !== fruit)
      )
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
      @fruit-changed="updateFruits($event, fruit)"
      @fruit-removed="removeFruit($event)"
    />
  </ul>
</template>
