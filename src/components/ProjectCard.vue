<template>
  <div class="project">
    <div class="title">{{ title }}</div>
    <div class="abstract">
      {{ abstract }}
    </div>
    <button class="call-of-action" @click="openDetails()">
      click for more +
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["title", "abstract", "className"],
  methods: {
    ...mapMutations("details", ["setOpened"]),
    openDetails() {
      this.setOpened({
        cName: this.className,
        pName: this.title,
        abstract: this.abstract,
      });
    },
  },
};
</script>

<style></style>
