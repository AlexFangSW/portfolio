<template>
  <div class="ai-details">
    <AIDetails1 v-if="projectName == 'BERT+LSTM 文本分類器'" />
    <AIDetails2 v-if="projectName == 'Auto Summary'" />
  </div>
</template>

<script>
import AIDetails1 from "@/components/AIDetails/AIDetails1";
import AIDetails2 from "@/components/AIDetails/AIDetails2";

export default {
  props: ["projectName"],
  components: {
    AIDetails1,
    AIDetails2,
  },
};
</script>

<style lang="scss" scoped>
.ai-details {
  width: 100%;
  padding-bottom: 1em;
}
</style>
