<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img :src="image" alt="" v-if="loaded">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      image: '',
      loaded: false
    }
  },
  methods: {
    async getImage() {
      await fetch('https://picsum.photos/300/300')
        .then((data) => {
          console.log(data.url)
          this.image = data.url;
          this.loaded = true;
        });
    }
  },
  mounted() {
    this.getImage();
  }


})

</script>
