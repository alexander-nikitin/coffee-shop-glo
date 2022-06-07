<template>
  <router-link tag="div" :class="classItem" to="/item-page">
    <img :src="require(`@/assets/img/${image}`)" alt="coffee">
    <div class="best__item-title">
      {{ name }}
    </div>
    <div class="best__item-price">{{ price }}$</div>
  </router-link>
</template>

<script>

  export default {
   props: {
     name: {
       type: String,
       required: true
     },
     price: {
       type: [Number, String],
       required: true
     },
     image: {
       type: String,
       required: true
     },
     classItem: {
       type: String,
       required: false
     }
   }
  }
</script>