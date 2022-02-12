<template>
  <!-- 履歷網站 -->
  <div class="FEDetails-1">
    <!-- RWD -->
    <div class="FEDetails-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z"
        /></svg
      >RWD
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"
        />
      </svg>
    </div>
    <details>
      <summary>玻璃區域(內容主體)</summary>
      <p>使用clamp()。隨螢幕寬度變化，不會太細或太寬。</p>
    </details>
    <details>
      <summary>Project排列</summary>
      <p>依照螢幕寬度調整為橫向/垂直滾動。</p>
    </details>
    <details>
      <summary>文字大小</summary>
      <p>使用clamp()。隨螢幕寬度變化，不會太小或太大。</p>
    </details>

    <!-- Accessibility -->
    <div class="FEDetails-title">Accessibility</div>
    <details>
      <summary>背景明暗</summary>
      <p>當背景圖案開始和中間主體內容重疊，會降低opacity，減少干擾。</p>
    </details>
    <details>
      <summary>向下滑動提示</summary>
      <p>中下方有箭頭告知使用者可以向下滑。到底消失。</p>
    </details>
    <details>
      <summary>標題顏色</summary>
      <p>區塊標題除了變大，還呈現黃色，更好判斷達到下一部分。</p>
    </details>
    <details>
      <summary>Click for more 按鈕</summary>
      <p>希望使用者發現並按下的按鈕，使用較突出的顏色。</p>
    </details>
    <details>
      <summary>可滑動區排列</summary>
      <p>
        Project / Awards
        當能夠滑動時，都會將下一項露出一部分，讓使用者知道可以滑動。
      </p>
    </details>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.FEDetails-1 {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 68%;
  justify-content: center;
}
.FEDetails-title {
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
  font-size: 1.5em;

  svg {
    height: 1em;
  }
}
details {
  cursor: pointer;

  padding: 0.5em;
  summary {
    // Glass effect
    background: rgba(255, 255, 255, 0.25); // 透明
    font-weight: bold;
    padding: 0.5em;
    border-radius: 5px;
  }
}
</style>
