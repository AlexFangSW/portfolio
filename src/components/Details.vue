<template>
  <div class="details" v-if="opened">
    <div class="top-menu">
      <!-- close icon -->
      <button @click="closeDiv()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <!-- title and abstract -->
    <div class="content">
      <div class="title">{{ projectName }}</div>
      <div class="abstract">
        <div class="subtitle">Abstract</div>
        {{ abstract }}
      </div>
      <div class="detail-content">
        <div class="subtitle">Details</div>
        <!-- 主要改變內容 -->
        <FrontendDetails
          v-if="className == 'front-end'"
          :projectName="projectName"
        />
        <AwardsDetails
          v-if="className == 'awards'"
          :projectName="projectName"
        />
        <AINLPDetails v-if="className == 'ai-nlp'" :projectName="projectName" />
        <CertificateDetails
          v-if="className == 'certificate'"
          :projectName="projectName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FrontendDetails from "@/components/FrontendDetails";
import AwardsDetails from "@/components/AwardsDetails";
import AINLPDetails from "@/components/AINLPDetails";
import CertificateDetails from "@/components/CertificateDetails";

export default {
  computed: {
    ...mapState("details", ["opened", "projectName", "abstract", "className"]),
  },
  methods: {
    ...mapMutations("details", ["setClosed"]),
    closeDiv() {
      this.setClosed();
    },
  },
  components: {
    FrontendDetails,
    AwardsDetails,
    AINLPDetails,
    CertificateDetails,
  },
};
</script>
