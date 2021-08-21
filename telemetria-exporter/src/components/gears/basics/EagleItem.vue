<template>
  <div class="eagle-item">
    <span :class="itemClass" @click="$emit('click')">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ItemType } from "@/types";

@Component
export default class EagleItem extends Vue {
  /* PROPS */

  @Prop({ type: String, default: "Item" })
  text!: string;

  @Prop({ validator: (v) => Object.values(ItemType).includes(v), required: true })
  type!: ItemType;

  @Prop({ type: Boolean, default: false })
  selected!: boolean;

  @Prop({ type: Boolean, default: false })
  erased!: boolean;

  /* GETTERS */

  get itemClass(): any {
    return {
      item: true,
      selected: this.selected,
      erased: this.erased,
      database: this.type === "DB",
      collection: this.type === "COLLECTION",
    };
  }
}
</script>

<style lang="scss" scoped>
.eagle-item {
  text-align: center;

  span {
    cursor: pointer;

    &:hover {
      color: #f4f4f4;
    }
  }

  .database {
    color: #757575;
    font-size: 24px;
  }
  .collection {
    color: #bcbcbc;
    font-size: 22px;
  }

  .selected {
    text-align: center;
    color: #ffec00;

    &:hover {
      color: #ffec00;
    }
  }

  .erased {
    &:hover {
      color: #ee9999;
    }
  }
}
</style>