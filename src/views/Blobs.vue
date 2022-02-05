<template>
  <div class="container">
    <div class="background">
      <!-- Content -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(1, 20, 29);
  .background {
    content: "";
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/Blobs_TL.png"),
      url("../assets/Blobs_ML.png"), url("../assets/Blobs_BL.png"),
      url("../assets/Blobs_TR.png"), url("../assets/Blobs_BR.png");
    background-position: top left, center left, bottom left, top right,
      bottom right;
    background-repeat: no-repeat;
    background-size: 10rem, 5rem, 8rem, 10rem, 10rem;
  }
}

@media only screen and (max-width: 400px) {
  .background {
    opacity: 0.5;
  }
}
</style>
