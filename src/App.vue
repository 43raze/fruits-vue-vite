<script>
// import FruitsList from './components/FruitsList.vue'
// import FruitLasted from './components/FruitLasted.vue'
// import FruitSubmitter from './components/FruitSubmitter.vue'
import TestTest from './TestTest.vue'

export default {
  components: {
    // FruitSubmitter,
    // FruitLasted,
    // FruitsList,
    TestTest,
  },

  data() {
    return {
      // fruits: ['Яблоко', 'Банан', 'Апельсин', 'Груша'],
      message: 'всем привет',
    }
  },

  // methods: {
  //   addFruit(fruit) {
  //     if (this.fruits.includes(fruit)) return
  //     this.fruits.push(fruit)
  //   },

  //   removeFruit(fruit) {
  //     this.fruits = this.fruits.filter(f => f !== fruit)
  //   },
  // },
}
</script>

<template>
  <TestTest :message="message" @message-changed="message = $event" />

  <i>{{ message }}</i>

  <!-- <main>
    <h1>Фрукты</h1>

    <FruitLasted :last-fruit="fruits.at(-1)" />

    <FruitSubmitter @fruit-submit="addFruit" />

    <button class="delete__last" @click="fruits.pop()">
      Удалить последний фрукт
    </button>

    <FruitsList :fruits="fruits" @fruit-removed="removeFruit" />
  </main>
  <br />
  <br />
  <br />
  {{ fruits }} -->
</template>

<style>
input,
button,
textarea,
select,
option,
html {
  font-family: sans-serif;
  font-size: 22px;
  color: #234;
  font-weight: bold;
}
body {
  padding: 25px;
}
</style>
