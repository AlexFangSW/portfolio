<template>
  <div class="awards-details">
    <ADetails1 v-if="projectName == '實務專題製作競賽'" />
    <ADetails2 v-if="projectName == '程式交易競賽'" />
  </div>
</template>

<script>
import ADetails1 from "@/components/ADetails/ADetails1";
import ADetails2 from "@/components/ADetails/ADetails2";

export default {
  props: ["projectName"],
  components: {
    ADetails1,
    ADetails2,
  },
};
</script>

<style lang="scss" scoped>
.awards-details {
  width: 100%;
  padding-bottom: 1em;
}
</style>
