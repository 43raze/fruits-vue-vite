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
      fruits: [
        { id: 1, caption: 'Яблоко' },
        { id: 2, caption: 'Банан' },
        { id: 3, caption: 'Апельсин' },
        { id: 4, caption: 'Груша' },
      ],
    }
  },
}
</script>

<template>
  <main>
    {{ fruits }}
    <h1>Фрукты</h1>

    <FruitLasted :last-fruit="fruits.at(-1).caption" />

    <FruitSubmitter @fruit-submit="fruits.push($event)" />

    <button class="delete__last" @click="fruits.pop()">Удалить фрукт</button>

    <!-- <FruitsList :fruits="fruits" @fruits-updated="fruits = $event" /> -->

    <!-- <FruitsList :model-value="fruits" @update:model-value="fruits = $event" /> -->

    <FruitsList v-model="fruits" />
  </main>
</template>
