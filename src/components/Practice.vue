<template>
  <div class="card practice-container">
    <div class="title head layer-1">Practice</div>
    <div class="practice">
      <!-- practice -->
      <ProjectCard
        v-for="(v, index) in practice"
        :key="index"
        :title="v.title"
        :abstract="v.abstract"
        :githubLink="v.githubLink"
        :className="'practice'"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
// Maps
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("practice", ["practice"]),
  },
  components: {
    ProjectCard,
  },
};
</script>
<style lang="scss" scoped>
$gap-size: 0.5rem;
$padding-size: 1rem;
$font-size: 0.8rem;
$transition-time: 0.25s;
$card-opacity: 0.4;
.card {
  width: 100%;
  min-height: 13em * 2;
  // Where to snap to
  // scroll-snap-align: start;
  font-size: $font-size;
  &.practice-container {
    max-height: 100vh;
    display: grid;
    grid-template:
      "practice-title" 1fr
      "practice" 3fr;
    padding: $padding-size;
    row-gap: $gap-size;
    .title {
      grid-area: practice-title;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(2.5em, 5vw, 3em);
      font-weight: bold;
      border-top: 2px solid rgb(0, 0, 0, 0.5);
    }
    .practice {
      grid-area: practice;
      display: grid;
      align-items: center;
      // PC version
      grid-template-rows: repeat(2, 13em);
      grid-auto-flow: column;
      grid-auto-columns: 40em;
      padding: $padding-size;
      gap: $padding-size;
      overflow: auto;
      overscroll-behavior: none;
    }
  }
}
@media (max-width: 1000px) {
  .card {
    &.practice-container {
      .practice {
        // mobile version
        height: 13em * 1.8;
        grid-template-columns: 100%;
        grid-template-rows: none; // override
        grid-auto-flow: row; // override
        grid-auto-rows: 13em;
      }
    }
  }
}
</style>
