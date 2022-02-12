<template>
  <div class="FEDetails2-container">
    <div class="header">SHOWCASE</div>
    <!-- Drop Shadow -->
    <div class="drop_shadow">
      <div class="drop_shadow_text">DROP SHADOW</div>
    </div>
    <!-- Navigetor -->
    <div class="navigator">
      <div class="indicator">
        <div class="outer"></div>
        <div class="inner"></div>
        <div class="dot_right"></div>
      </div>
      <a class="active">
        <ion-icon name="bus"></ion-icon>
        <span>Bus</span>
      </a>
      <a>
        <ion-icon name="fast-food-outline"></ion-icon>
        <span>Food</span>
      </a>
      <a>
        <ion-icon name="headset-outline"></ion-icon>
        <span>Music</span>
      </a>
      <a>
        <ion-icon name="skull-outline"></ion-icon>
        <span>Skull</span>
      </a>
      <a>
        <ion-icon name="rocket-outline"></ion-icon>
        <span>Rocket</span>
      </a>
    </div>
    <!-- Soft Circle -->
    <div class="soft_circle"></div>
    <!-- Red Circle -->
    <div class="circle">
      <div class="lighting">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="inner_circle1"></div>
      <div class="circle_text">CIRCLE</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // ===================
    // Navigator
    // ===================
    let a_links = document.querySelectorAll(".navigator a");
    let indicator = document.querySelector(".navigator .indicator");
    const one_step = 2.85;
    a_links.forEach((item) => {
      item.addEventListener("click", () => {
        // Add class active
        a_links.forEach((temp) => {
          temp.classList.remove("active");
        });
        item.classList.add("active");
        let count = 0;
        // Move indicator
        a_links.forEach((temp) => {
          if (temp.classList.contains("active")) {
            indicator.style.transform = `translate(${2.85 * count}rem)`;
          }
          count++;
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Gafata&display=swap");
.FEDetails2-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 1em;
  padding-block-end: 3em;
  gap: 2em;
  background-color: #dcdfe4;
  font-family: "Gafata", sans-serif;
  border-radius: 5px;
}
.header {
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 2rem;
  background: -webkit-linear-gradient(
    -90deg,
    rgba(2, 0, 36, 0.647963408996411) 0%,
    rgba(1, 85, 124, 1) 38%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/*
====================
  Drop Shadow Square
====================
  */
.drop_shadow {
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e4e6eb;
  box-shadow: 0.8em 0.8em 1em rgba(167, 176, 192, 0.3),
    -0.8em -0.8em 1em rgb(255, 255, 255, 0.5);
  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
}
.drop_shadow:hover {
  background: -webkit-linear-gradient(
    -90deg,
    rgba(2, 0, 36, 0.647963408996411) 0%,
    rgba(1, 85, 124, 1) 38%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  box-shadow: 0.1rem 0.1rem 0.1rem rgb(255, 255, 255, 0.6),
    -0.1rem -0.1rem 0.1rem rgba(167, 176, 192, 0.3);
}
.drop_shadow_text {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}

/*
====================
  Red Circle
====================
  */
$scale: -5rem;
.circle {
  position: relative;
  height: 15rem + $scale;
  width: 15rem + $scale;
  font-size: 2rem;
  border: 1rem solid transparent;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: -0.5rem -0.5rem 0.5rem rgba(255, 255, 255, 0.6),
    0.5rem 0.5rem 0.5rem rgb(0, 0, 0, 0.15);
}
.inner_circle1 {
  position: absolute;
  width: 14rem + $scale;
  height: 14rem + $scale;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b92d2d;
  box-shadow: inset 0.3rem 0.3rem 1rem rgba(24, 14, 14, 0.3),
    inset -0.5rem -0.5rem 1rem rgba(218, 129, 129, 0.3);
}
.circle_text {
  position: absolute;
  background-color: transparent;
  animation: text_glow 2s ease-out infinite alternate;
}
.lighting {
  position: absolute;
  background-color: #700000;
  width: 14.5rem + $scale;
  height: 14.5rem + $scale;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 2s infinite;
}
.lighting span {
  position: absolute;
  background-color: #4af7ee;
  width: 2rem;
  height: 15rem + $scale;
}
.lighting span:nth-child(1) {
  transform: rotate(90deg);
}
.lighting span:nth-child(2) {
  transform: rotate(45deg);
}
.lighting span:nth-child(3) {
  transform: rotate(135deg);
}
@keyframes text_glow {
  100% {
    color: #4af7ee;
    text-shadow: 0rem 0rem 0.3rem rgb(74, 247, 238);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
// /*
// ====================
//   Soft Circle
// ====================
//   */
.soft_circle {
  background-color: #dcdfe4;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* AEAEC0 20%, FFFFFF 100% */
  box-shadow: 0.2rem 0.2rem 0.3rem rgb(174, 174, 192, 0.2),
    -0.2rem -0.2rem 0.3rem rgba(255, 255, 255),
    inset 0.2rem 0.2rem 0.3rem rgba(255, 255, 255),
    inset -0.2rem -0.2rem 0.3rem rgb(174, 174, 192, 0.2);
}
.soft_circle::after {
  content: "SOFT CIRCLE";
  color: rgb(0, 0, 0, 0.5);
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  /* AEAEC0 20%, FFFFFF 100% */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2rem 0.2rem 0.3rem #ffffff,
    -0.2rem -0.2rem 0.3rem rgb(174, 174, 192, 0.2),
    inset 0.2rem 0.2rem 0.3rem rgb(174, 174, 192, 0.2),
    inset -0.2rem -0.2rem 0.3rem #ffffff;
}
// /*
// ====================
//   Navigator
// ====================
.navigator {
  position: relative;
  background-color: #dcdfe4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15rem;
  height: 2.5rem;
  padding: 0.3rem;
  gap: 0.1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid rgb(0, 0, 0, 0.7);
}
.navigator a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
}
.navigator a ion-icon {
  position: absolute;
  font-size: 1rem;
  transition: transform 0.35s ease-out, font-size 0.35s ease-out,
    color 0.35s ease-out;
}
.navigator a span {
  position: absolute;
  transform: translate(0rem, 0.9rem);
  opacity: 0;
  font-size: 0.8rem;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-out;
}
.navigator a.active span {
  transform: translate(0rem, 0rem);
  opacity: 1;
}
.navigator a.active ion-icon {
  font-size: 1.2rem;
  transform: translate(0rem, -1.5rem);
  color: #ffffff;
}
.indicator {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 2rem;
  height: 2rem;
  margin-top: -1.65rem;
  margin-left: 0.4rem;
  transition: transform 0.25s ease-out;
}
.indicator .inner {
  position: absolute;
  background-color: #424244;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.indicator .outer {
  position: absolute;
  background-color: #dcdfe4;
  width: 2.2rem;
  height: 0.9rem;
  border-bottom-left-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  margin-top: 1.3rem;
}
.indicator::after {
  content: "";
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #424244;
  margin-top: 0.6rem;
  margin-left: -2.3rem;
}
.indicator .dot_right {
  content: "";
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #424244;
  margin-top: 0.6rem;
  margin-left: 2.3rem;
}
/* One Step */
/* .navigator .indicator {
  transform: translate(calc(2.85rem*4));
} */
</style>
