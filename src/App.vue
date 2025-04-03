<script>
import FruitItem from './components/FruitItem.vue'
import FruitSubmitter from './components/FruitSubmitter.vue'

export default {
  components: { FruitItem, FruitSubmitter },

  data() {
    return {
      fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Виноград'],
      lastFruit: '',
    }
  },

  methods: {
    doSomething() {
      if (this.fruits.includes(this.fruit)) return
      this.fruits.push(this.fruit)
      this.lastFruit = this.fruit
    },

    removeFruit(fruit) {
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

    <FruitSubmitter @fruit-submit="fruits.push($event)" />

    <button @click="fruits.pop()">Удалить последний фрукт</button>

    <ul>
      <FruitItem
        v-for="(fruit, idx) of fruits"
        :key="idx"
        :fruit="fruit"
        @fruit-removed="removeFruit"
      />
    </ul>
  </main>
</template>
