<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['modelValue'],

  emits: ['update:model-value'],

  methods: {
    swapFruit(newFruit, oldFruit) {
      return this.modelValue.map(f => (f === oldFruit ? newFruit : f))
    },

    removeFruit(fruit) {
      return this.modelValue.filter(f => f !== fruit)
    },
  },
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="fruit of modelValue"
      :key="fruit"
      :fruit="fruit"
      @fruit-changed="$emit('update:model-value', swapFruit($event, fruit))"
      @fruit-removed="$emit('update:model-value', removeFruit($event))"
    />
  </ul>
</template>
