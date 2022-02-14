<template>
  <div class="card certificate">
    <div class="title head layer-1">Certificate</div>
    <div class="certificate">
      <!-- certificate -->
      <ProjectCard
        v-for="(v, index) in certificate"
        :key="index"
        :title="v.title"
        :abstract="v.abstract"
        :className="'certificate'"
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
    ...mapState("certificate", ["certificate"]),
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
  min-height: 13em * 2; //override
  &.certificate {
    max-height: 100vh;
    padding: $padding-size;
    display: grid;
    grid-template:
      "title title title" 2fr
      "awards awards awards" 3fr / 1fr;
    .title {
      grid-area: title;
      display: flex;
      align-items: center;
      justify-content: center;
      &.head {
        font-size: clamp(2.5em, 5vw, 3em);
        font-weight: bold;
        border-top: 2px solid rgb(0, 0, 0, 0.5);
      }
    }
    .certificate {
      grid-area: awards;
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: 13em;
      height: 100%;
      gap: 1em;
      overflow-y: auto;
      overscroll-behavior: none;
      padding: $padding-size;
    }
  }
}
</style>
