<template>
  <div class="background"></div>
  <div class="container">
    <div class="glass-background">
      <!-- introduction -->
      <Introduction />
      <!-- projects & skills -->
      <ProjectsAndSkills />
      <!-- practice -->
      <Practice />
      <!-- certificate  -->
      <Certificate />
      <!-- awards -->
      <Awards />
    </div>
    <!-- Arrow 讓人知道可以往下滑 -->
    <FloatingArrow />
    <!-- Details -->
    <Details />
  </div>
</template>

<script>
// Components
import Introduction from "@/components/Introduction";
import ProjectsAndSkills from "@/components/ProjectsAndSkills";
import Awards from "@/components/Awards";
import FloatingArrow from "@/components/FloatingArrow";
import Details from "@/components/Details";
import Certificate from "@/components/Certificate";
import Practice from "@/components/Practice";

export default {
  mounted() {
    // Detect if scrolled to bottom.
    let container = document.querySelector(".container");
    container.addEventListener("scroll", () => {
      //當影藏的 + 看的到的 == 全長。 代表到底了
      let distence =
        container.scrollTop + container.clientHeight - container.scrollHeight;
      if (distence <= 10 && distence >= -10) {
        document.querySelector(".floating-arrow").style.opacity = "0";
      } else {
        document.querySelector(".floating-arrow").style.opacity = "1";
      }
    });
  },
  components: {
    Introduction,
    ProjectsAndSkills,
    Awards,
    FloatingArrow,
    Details,
    Certificate,
    Practice,
  },
};
</script>

<style lang="scss" scoped></style>
