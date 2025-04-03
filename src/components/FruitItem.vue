<script>
export default {
  props: ['fruit'],

  emits: ['fruit-removed'],
}
</script>

<template>
  <li>{{ fruit }} <button @click="$emit('fruit-removed', fruit)">x</button></li>
</template>
