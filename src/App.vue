<script>
import FruitsList from './components/FruitsList.vue'
import FruitLasted from './components/FruitLasted.vue'
import FruitSubmitter from './components/FruitSubmitter.vue'

export default {
  components: {
    FruitSubmitter,
    FruitLasted,
    FruitsList,
  },

  data() {
    return {
      fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша'],
    }
  },

  methods: {
    addFruit(fruit) {
      if (this.fruits.includes(fruit)) return
      this.fruits.push(fruit)
    },

    removeFruit(fruit) {
      this.fruits = this.fruits.filter(f => f !== fruit)
    },

    updateFruit(newFruit, oldFruit) {
      this.fruits = this.fruits.map(f => (f === oldFruit ? newFruit : f))
    },
  },
}
</script>

<template>
  <main>
    <h1>Фрукты</h1>

    <FruitLasted :last-fruit="fruits.at(-1)" />

    <FruitSubmitter @fruit-submit="addFruit" :fruits="fruits" />

    <button class="delete__last" @click="fruits.pop()">
      Удалить последний фрукт
    </button>

    <FruitsList
      :fruits="fruits"
      @fruit-removed="removeFruit"
      @fruit-changed="updateFruit($event)"
    />
  </main>
</template>
