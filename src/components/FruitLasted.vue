<script>
export default {
  props: ['lastFruit'],
}
</script>

<template>
  <div>
    <h2 v-if="lastFruit">Последний добавленный фрукт: {{ lastFruit }}</h2>
    <h2 v-else>Фруктов еще не добавлялось</h2>
  </div>
</template>
