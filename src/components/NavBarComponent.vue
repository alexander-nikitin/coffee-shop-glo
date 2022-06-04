<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <li class="header__item">
        <router-link :to="links[0].link">
          <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
        </router-link>
      </li>
      <link-component
          classItem="header__item"
          :text="links[1].text"
          :link-to="links[1].link"
      />
      <link-component
          classItem="header__item"
          :text="links[2].text"
          :link-to="links[2].link"
      />
      <link-component
          classItem="header__item"
          :text="links[3].text"
          :link-to="links[3].link"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from '@/components/LinkComponent.vue';

  export default {
    components: {LinkComponent},
    data() {
      return {
        links: [
          {
            id: 0,
            icon: 'Logo.svg',
            link: '/'
          },
          {
            id: 1,
            text: 'Our coffee',
            link: '/our-coffee'
          },
          {
            id: 2,
            text: 'For your pleasure',
            link: '/goods'
          },
          {
            id: 3,
            text: 'Contact us',
            link: '/contacts'
          }
        ]
      }
    }
  }
</script>