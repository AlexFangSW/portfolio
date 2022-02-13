<template>
  <!-- BERT+LSTM 文本分類器 -->
  <div class="ai-details-container">
    <!-- Video -->
    <div class="Video">
      <p>專題比賽所使用講解影片</p>
      <div class="title-2">
        <p>方皓昀(本人) : 架構和實作方法</p>
        <p>李冠篁(隊友) : 開頭和結尾</p>
      </div>
      <iframe src="https://www.youtube.com/embed/yADwqHN9_Ls"> </iframe>
    </div>

    <!-- Paper -->
    <div class="paper">
      <p>成果報告書</p>
      <iframe
        src="https://drive.google.com/file/d/1FkKVnTbeAJWswhDuu5EtA4w6qw_7vWCX/preview"
        width="100%"
        height="480"
        allow="autoplay"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ai-details-container {
  display: grid;
  grid-auto-flow: row;
  row-gap: 2em;
  iframe {
    width: 100%;
    height: 20em;
  }
  p {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
  }
  .title-2 p {
    font-size: 0.8em;
  }
}
</style>
