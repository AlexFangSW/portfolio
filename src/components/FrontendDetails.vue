<template>
  <div class="front-end-details">
    <!-- Front-end Project Details -->
    <FEDetails1 v-if="projectName == '履歷網站(本網頁)'" />
  </div>
</template>

<script>
import FEDetails1 from "@/components/FEDetails/FEDetails1";
export default {
  props: ["projectName"],
  components: {
    FEDetails1,
  },
};
</script>

<style></style>
