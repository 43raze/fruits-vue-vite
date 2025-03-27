<script>
export default {
  data() {
    return {
      fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Виноград'],
      fruit: 'Вишня',
      lastAddedFruit: '',
    }
  },

  methods: {
    addFruit() {
      if (!this.fruit.trim()) return

      this.fruits.push(this.fruit)
      this.lastAddedFruit = this.fruit
      this.fruit = ''
    },

    removeFruit() {
      this.fruits.pop()
    },
  },
}
</script>

<template>
  <main>
    <h1>Фрукты</h1>
    <h2 v-if="lastAddedFruit">
      Последний добавленный фрукт: {{ lastAddedFruit }}
    </h2>

    <input v-model="fruit" />
    <button @click="addFruit">Добавить фрукт</button>
    <button @click="removeFruit">Удалить фрукт</button>

    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </main>
</template>
