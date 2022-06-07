<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

      <link-component
        :link-to="links.header.link"
        classItem="header__item"
      >
        <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
      </link-component>
      <link-component
          v-for="link in links.other"
          :key="link.id"
          classItem="header__item"
          :text="link.text"
          :link-to="link.link"
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
        links: {
          header: {
            id: 0,
            icon: 'Logo.svg',
            link: '/'
          },
          other: [
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
  }
</script>