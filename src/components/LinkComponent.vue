<template>
  <li :class="classItem">
    <router-link :to="linkTo">
      {{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    props: {
      classItem: {
        type: String,
        required: false
      },
      linkTo: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false
      }
    }
  }
</script>