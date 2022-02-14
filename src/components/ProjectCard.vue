<template>
  <div class="project">
    <div class="title">{{ title }}</div>
    <div class="abstract">
      {{ abstract }}
    </div>
    <!-- Project with details -->
    <button
      v-if="className != 'practice'"
      class="call-of-action"
      @click="openDetails()"
    >
      click for more +
    </button>
    <!-- Practice (To GitHub page) -->
    <a
      v-if="className == 'practice'"
      class="call-of-action"
      :href="githubLink"
      target="_blank"
    >
      <img src="@/assets/img/GitHub-Mark-120px-plus.png" />
      <img src="@/assets/img/GitHub_Logo.png" />
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["title", "abstract", "className", "githubLink"],
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
