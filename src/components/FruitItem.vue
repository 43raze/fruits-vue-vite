<script>
export default {
  props: ['fruit'],

  emits: ['fruit-removed'],
}
</script>

<template>
  <li>
    <input :value="fruit" />
    <button class="delete__item" @click="$emit('fruit-removed', fruit)">
      x
    </button>
  </li>
</template>
