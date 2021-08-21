<template>
  <eagle-content>
    <home />
  </eagle-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleContent from "@/components/gears/layout/EagleContent.vue";

import Home from '@/components/pages/home/Home.vue';

@Component({
  components: {
    EagleContent,
    Home
  },
})
export default class HomeView extends Vue {}
</script>