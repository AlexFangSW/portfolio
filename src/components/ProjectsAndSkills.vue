<template>
  <div class="card project-container">
    <div class="skills layer-1 title head">Skills & Projects</div>
    <div class="buttons layer-1">
      <button class="active">Front-end</button>
      <button>AI (NLP)</button>
    </div>
    <!-- front-end -->
    <ProjectContainer
      :className="'front-end'"
      :skills="frontendSkills"
      :projects="frontendProjects"
      :isActive="frontendShow"
    />
    <!-- AI (NLP) -->
    <ProjectContainer
      :className="'ai-nlp'"
      :skills="aiNLPSkills"
      :projects="aiNLPProjects"
      :isActive="aiNLPShow"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProjectContainer from "@/components/ProjectContainer";
export default {
  computed: {
    ...mapState("frontend", {
      frontendSkills: (state) => state.skills,
      frontendProjects: (state) => state.projects,
      frontendShow: (state) => state.active,
    }),
    ...mapState("aiNLP", {
      aiNLPSkills: (state) => state.skills,
      aiNLPProjects: (state) => state.projects,
      aiNLPShow: (state) => state.active,
    }),
  },
  components: {
    ProjectContainer,
  },
};
</script>
