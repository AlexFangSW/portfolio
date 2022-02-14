<template>
  <div class="CertificateDetails-details">
    <CertificateDetails1 v-if="projectName == 'TOEIC 測驗'" />
  </div>
</template>

<script>
import CertificateDetails1 from "@/components/CertificateDetails/CertificateDetails1";

export default {
  props: ["projectName"],
  components: {
    CertificateDetails1,
  },
};
</script>

<style lang="scss" scoped>
.CertificateDetails-details {
  width: 100%;
  padding-bottom: 1em;
}
</style>
