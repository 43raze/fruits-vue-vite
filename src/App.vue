<script>
import ItemFruit from './ItemFruit.vue'

export default {
  components: { ItemFruit },

  data() {
    return {
      fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Виноград'],
      fruit: 'Вишня',
      lastFruit: '',
    }
  },

  methods: {
    addFruit() {
      this.fruit = this.fruit.trim()
      if (!this.fruit || this.fruits.includes(this.fruit)) return
      this.fruits.push(this.fruit)
      this.lastFruit = this.fruit
      this.fruit = ''
    },

    removeFruit(fruit) {
      console.log(fruit)
      this.fruits = this.fruits.filter(f => f !== fruit)
    },
  },
}
</script>

<template>
  <main>
    <h1>Фрукты</h1>
    <h2 v-if="lastFruit">Последний добавленный фрукт: {{ lastFruit }}</h2>
    <h2 v-else>Фруктов еще не добавлялось</h2>

    <input v-model="fruit" />
    <button @click="addFruit">Добавить фрукт</button>
    <button @click="fruits.pop()">Удалить последний фрукт</button>

    <ul>
      <ItemFruit
        v-for="(fruit, idx) of fruits"
        :key="idx"
        :fruit="fruit"
        @fruit-removed="() => removeFruit(fruit)"
      />
    </ul>
  </main>
</template>
