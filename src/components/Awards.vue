<template>
  <div class="card awards">
    <div class="title head layer-1">Awards</div>
    <div class="awards">
      <!-- Awards -->
      <ProjectCard
        v-for="(v, index) in awards"
        :key="index"
        :title="v.title"
        :abstract="v.abstract"
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
    ...mapState("awards", ["awards"]),
  },
  components: {
    ProjectCard,
  },
};
</script>
