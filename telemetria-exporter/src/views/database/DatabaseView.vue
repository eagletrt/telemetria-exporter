<template>
  <eagle-content>
    <database />
  </eagle-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EagleContent from "@/components/gears/layout/EagleContent.vue";

import Database from '@/components/pages/database/Database.vue';

@Component({
  components: {
    EagleContent,
    Database
  },
})
export default class DatabaseView extends Vue {}
</script>