<template>
  <div class="tools layer-1" :class="[{ active: isActive }, className]">
    <!-- Skills Div[分類] span[內容]-->
    <div v-for="(v, k, index) in skills" :key="index" :class="k">
      <span v-for="(value, k, i) in v" :key="i">{{ value }}</span>
    </div>
  </div>
  <div class="projects" :class="[{ active: isActive }, className]">
    <ProjectCard
      v-for="(v, index) in projects"
      :key="index"
      :title="v.title"
      :abstract="v.abstract"
    />
  </div>
</template>

<script>
// components
import ProjectCard from "@/components/ProjectCard";

export default {
  props: ["className", "skills", "projects", "isActive"],
  components: {
    ProjectCard,
  },
};
</script>

<style></style>
