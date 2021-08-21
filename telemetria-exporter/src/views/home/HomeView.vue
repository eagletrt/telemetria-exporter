<template>
  <eagle-content>
    <h1>ciaocoaes</h1>
  </eagle-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleContent from "@/components/gears/layout/EagleContent.vue";

@Component({
  components: {
    EagleContent,
  },
})
export default class HomeView extends Vue {}
</script>