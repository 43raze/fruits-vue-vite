<script>
// let i = 0
// const nextId = () => ++i

export default {
  emits: ['fruit-submit'],

  data() {
    return {
      fruit: { id: 5, caption: '' },
    }
  },

  methods: {
    addFruit() {
      this.fruit.caption = this.fruit.caption.trim()
      if (!this.fruit.caption) return
      this.$emit('fruit-submit', this.fruit)
      this.fruit.caption = ''
      this.fruit.id = this.fruit.id + 1
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
