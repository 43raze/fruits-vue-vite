<script>
export default {
  emits: ['fruit-submit'],

  data() {
    return {
      fruit: 'Вишня',
    }
  },

  methods: {
    addFruit() {
      this.fruit = this.fruit.trim()
      if (!this.fruit) return
      this.$emit('fruit-submit', this.fruit)
      this.fruit = ''

      this.$refs.fruitInput.focus()
    },
  },
}
</script>

<template>
  <div>
    <input v-model="fruit" ref="fruitInput" />
    <button @click="addFruit">Добавить фрукт</button>
  </div>
</template>
