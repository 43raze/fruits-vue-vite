<script>
//   DATA BINDING -->>      \  2 WAY
//   <<-- EVENT HANDLING    /  BINDING

export default {
  props: ['message'],

  emits: ['message-changed'],
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>

    <input
      :value="message"
      @input="$emit('message-changed', $event.target.value)"
    />

    <!-- <input :value="message" @input="message = $event.target.value" /> -->

    <!-- <input v-model="message" /> -->

    <button v-on:click="message = 'yo!'">PUSH ME</button>
  </div>
</template>
