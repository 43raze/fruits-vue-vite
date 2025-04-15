<script>
export default {
  props: ['fruit'],

  emits: ['fruit-removed', 'fruit-changed'],
}
</script>

<template>
  <li>
    <input
      :value="fruit"
      @input="$emit('fruit-changed', $event.target.value)"
    />

    <button class="delete__item" @click="$emit('fruit-removed', fruit)">
      x
    </button>
  </li>
</template>
