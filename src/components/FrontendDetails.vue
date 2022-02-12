<template>
  <div class="front-end-details">
    <!-- Front-end Project Details -->
    <FEDetails1 v-if="projectName == '履歷網站(本網頁)'" />
    <FEDetails2 v-if="projectName == '練習HTML、JS、CSS運用'" />
  </div>
</template>

<script>
import FEDetails1 from "@/components/FEDetails/FEDetails1";
import FEDetails2 from "@/components/FEDetails/FEDetails2";
export default {
  props: ["projectName"],
  components: {
    FEDetails1,
    FEDetails2,
  },
};
</script>

<style lang="scss" scoped>
.front-end-details {
  width: 100%;
  padding-bottom: 1em;
}
</style>
