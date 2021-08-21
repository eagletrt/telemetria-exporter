<template>
  <div class="home">
    <home-title />
    <home-content />
    <home-buttons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HomeTitle from "./gears/HomeTitle.vue";
import HomeContent from "./gears/HomeContent.vue";
import HomeButtons from "./gears/HomeButtons.vue";

@Component({
  components: {
    HomeTitle,
    HomeContent,
    HomeButtons
  },
})
export default class Home extends Vue {}
</script>