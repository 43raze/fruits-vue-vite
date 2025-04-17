<script>
export default {
  emits: ['fruit-submit'],

  data() {
    return {
      id: 0,
      fruit: { id: ++id, caption: '' },
    }
  },

  methods: {
    addFruit() {
      this.fruit.caption = this.fruit.caption.trim()
      if (!this.fruit.caption) return
      this.$emit('fruit-submit', this.fruit)
      this.fruit.caption = ''

      this.$refs.fruitInput.focus()
    },
  },
}
</script>

<template>
  <div>
    <input v-model="fruit.caption" ref="fruitInput" />
    <button @click="addFruit">Добавить фрукт</button>
  </div>
</template>
