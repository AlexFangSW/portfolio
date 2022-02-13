<template>
  <!-- Auto Summary -->
  <div class="ai-details-container">
    <!-- Steps -->
    <div>
      <p>Steps</p>
      <p class="steps">產生語意向量 => 分割主題 => 提取摘要</p>
    </div>
    <!-- Example -->
    <div>
      <p>Example</p>
      <div class="from">文章:〈鬼頭刀〉廖鴻基</div>
      <div class="example">
        <div class="summary-menu">
          <button @click="(e) => openContent(e)" class="original">
            原文(句)
          </button>
          <button @click="(e) => openContent(e)" class="block">分割主題</button>
          <button @click="(e) => openContent(e)" class="summary">摘要</button>
        </div>
        <div v-if="open == 'original'" class="original">
          <p>
            <span
              ><span class="lineNum">1.</span
              >漁船鏗鏘的引擎聲，響徹黎明港灣，破曉晨色茫茫。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">2.</span
              >飛魚衝破海面凌空飛起，像一隻亮白的飛鳥，低空劃過東邊浮出海面的火紅朝陽。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">3.</span
              >飛魚飛越了比我歡呼聲更持久的距離，在一個漂亮的弧線轉彎後，墜入海中。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">4.</span
              >掌舵的海湧伯說：「飛魚在逃避，逃避鬼頭刀的追擊。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">5.</span>」鬼頭刀，果然是海中的一把刀。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">6.</span
              >牠快速的身影從船邊一閃而過，在深邃的波光中閃耀著青藍光芒。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">7.</span
              >偶爾，牠會放慢速度，甚或停在船邊，用好奇的龍銀大眼與我在不同的世界裡相互對望。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">8.</span>那眼神肆無忌憚，高傲銳利得像把刀。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">9.</span
              >當飛魚將被追上，驚慌的躍出水面，逃避到另一個空間裡飛翔。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">10.</span
              >水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">11.</span
              >海裡的魚群生性驚惶，只有兩種魚肯大大方方的靠近船筏。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">12.</span
              >那就是海豚和鬼頭刀，牠們用兩種截然不同的方式跟漁人接觸。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">13.</span
              >海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">14.</span
              >這時，海湧伯會把船舵交給我，也許他的年紀不再合適這樣的遊戲。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">15.</span
              >我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">16.</span
              >再把舵搖向另一個方向，讓船筏快速離開，牠們立刻又跟了上來，始終與我們保持一段安全距離。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">17.</span
              >就這樣跟牠們在寬廣的海域蛇行、繞圈子。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">18.</span
              >在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">19.</span
              >那樣友善的接觸，卻始終保持警覺，感覺是溫暖的又有點清冷，不曉得是海豚的聰黠，還是漁人的悲哀。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">20.</span
              >海上遠遠的，時常可以看到一圈激起白色浪花的海面，海豚的背影在其間穿梭跳躍，這是一群海豚正在享用鰹魚大餐。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">21.</span
              >年輕力壯的海豚會分頭追趕一群鰹魚，逐漸把鰹魚群趕入牠們圍住的圈圈裡，讓老弱婦孺共享大餐。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">22.</span
              >人們也沿用這樣的方法把海豚圍入淺灣中，然後集體屠殺，不為了食物，不為了生活的必需，像是嫉妒牠們的聰明，或是怨恨牠們的頑皮。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">23.</span
              >鬼頭刀也會游近船筏，但感覺總是那樣恍然，突然出現又突然失去蹤影。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">24.</span
              >牠游近船筏可沒覺得牠的善意或者惡意，僅僅是路過或者因緣際會罷了。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">25.</span
              >牠一點也不在乎船筏的陰影，不在乎船上虎視眈眈的漁人及漁具。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">26.</span
              >偶爾牠會好奇的停下來與你瞪上兩眼，然後從容離開。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">27.</span
              >牠那毫不畏懼的眼神，顯現牠不是智商不足，就是信心十足。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">28.</span
              >鬼頭刀不同於一般洄游性魚類慣用的灰黑保護色調，牠美麗的色彩像極了熱帶雨林中的花彩鸚鵡，不但不驚惶避諱任何注視的目光，反而是驕傲的展現自我的存在。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">29.</span
              >兩片鮮黃胸鰭平衡著青色的流線身軀，像一艘在海洋中悠游飛翔的潛艇。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">30.</span
              >牠的背上綴飾著藍色發亮星點，在墨藍的海水中如武士佩戴著勳章般的神氣，也像夜暗星光般的神祕與詭異。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">31.</span
              >雖然在魚市場鬼頭刀算是賤價的魚種，但是價錢的高低並不能絲毫減損牠在我心目中的價值。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">32.</span
              >牠的價值表現在牠的生命上，就像牠美麗的色彩與藍色星點，在離開海洋離開生命後，即刻消逝。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">33.</span
              >在我將近五年的海上經驗中，每次看到牠，我的心情都會像槳葉攪動後的海面般，波波痕痕。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">34.</span
              >初初下海的那年夏天，一個烏雲滿天傍晚，暴風雨正盤算跟著夜幕來襲，海湧伯把引擎催趕成急迫的回航節奏。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">35.</span
              >在立霧溪海口，一條大魚咬中了船尾拖釣的假餌，八十磅的粗線及緩衝用的內胎橡皮瞬間被拉成筆直，時空似乎凍結住了，就等候斷裂的一聲巨響。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">36.</span
              >我幾乎是尖叫呼喊著，海湧伯緩下船速回頭看著那條在船後凌空翻跳的大魚，示意我：「拉牠上來！」而且並沒有要過來幫忙的意思。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">37.</span
              >拉扯了半天，那大魚驚人的力量折騰得我手掌都起了水泡。
            </span>
          </p>
          <p>
            <span><span class="lineNum">38.</span>好不容易將牠拉近船尾。 </span>
          </p>
          <p>
            <span
              ><span class="lineNum">39.</span
              >牠也似乎認命了，終於安靜的停止跳躍。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">40.</span
              >這時我清楚的看到水面下這條巨大的鬼頭刀。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">41.</span
              >粉紅色的假餌掛在牠的嘴角，牠游水的姿態竟然還十分從容。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">42.</span
              >充滿自信的緩緩游向左側，用牠大大的左眼狠狠瞪我，那眼神毫無畏懼而且十分的不在乎；再悠閒的游向右方，右眼一樣的對我射出倨傲的神采。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">43.</span
              >當牠背上藍色明亮的星狀光點迷惑在我瞳孔上時，一股強烈的意識瞬間進入我的腦中，清楚的告訴我：「你已經失去了這條魚！」在我的夢裡，開始出現了跟鬼頭刀搏鬥的場景，那倨傲桀驁的眼神經常壓迫著我的夢，一遍又一遍，我撫摸著銳利的魚鉤，一遍又一遍把鮮豔的假餌提在眼前晃動。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">44.</span
              >我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">45.</span
              >我靜靜的等待，等待泡沫後那隻跟在船後游動的鮮美目標。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">46.</span
              >衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">47.</span
              >從海中的鬼頭刀到海面上拉線的漁人，我的精神陷入這樣的輪迴中，一遍遍的反覆演練，從不疲倦。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">48.</span
              >鬥志逐漸被激發成激昂的獸性，等待牠再度出現的心每一次伴隨著我出海。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">49.</span
              >這段期間，海湧伯看出我的沉默及我眼中燃燒的火炬，卻始終不曾為我說一句鼓勵的話，也許他期待的是一場公平的戰爭，或者是一堂漁人入門的必修課程。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">50.</span
              >遠山浮雲飛鳥波濤，海面上的一切是我們習慣了的亮麗世界。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">51.</span
              >薄薄一面之隔的海面下，那鬼頭刀浮沉的空間，是漁人視覺不可及的未知世界。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">52.</span
              >一個個餌鉤沉下水面，就像沉下一個個倒懸的問號，而答案往往是從零到無窮，甚或常常連問號也無法收回。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">53.</span
              >這是在放下餌釣或撒網當初誰也無法預知的結果。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">54.</span
              >所以漁人必須學會承受不自主的命運，學會等待、落空、失望，或者學會如何承受難堪的狂喜。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">55.</span
              >海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">56.</span
              >跟鬼頭刀纏鬥的意志如能量般累積在我的胸腔。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">57.</span
              >船筏一次次的在立霧溪海口巡弋，也一次次的落空失望。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">58.</span
              >感覺上鬼頭刀似乎隱藏在海面下的某個角落窺視著我們，那幽靈般藍色的發亮星點似乎環繞在船筏四周，而又在我興奮的跳躍起來後消失無蹤。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">59.</span
              >海上的日子在苦悶的等待中彷彿海水的味道鹹鹹苦苦的。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">60.</span
              >偶爾低空貼浪覓食的海鳥，常被我誤以為是跳出水面的飛魚而興奮起來，而灰暗下來。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">61.</span
              >鬼頭刀是少數兩性表徵明顯的魚類，公魚額頭高聳如崖壁，就像頭上頂著一把劈水的刀斧，像公牛隆起的肩或雄獅威風的鬃鬣及吼叫；母魚全身體型修長圓潤，連眼神都帶著幾許溫柔。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">62.</span
              >「鬼頭刀」這樣的名稱似乎是來自公魚的威容，漁人又稱牠為「飛魚虎」，從「鬼」、「刀」、「虎」這三個字就足以形容鬼頭刀在漁人眼中是如此神祕、銳利及凶猛。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">63.</span
              >同樣時間、同樣地點、同樣場景，船尾的魚線再度被拉成筆直。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">64.</span
              >大約在船後一百米處中鉤的鬼頭刀不斷的翻躍到空中，重重的摔滾在水面上。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">65.</span
              >我用興奮得幾乎顫抖的聲音，呼喊海湧伯放慢船速，多日來等待的抑鬱都在中魚的瞬間明朗起來。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">66.</span
              >如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">67.</span
              >心裡充滿自信的告訴自己：「決戰的時刻終於來了。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">68.</span
              >」一把，一把，隨著牠跳躍的節奏有力的收線，我嘴裡咕噥著海湧伯不堪入耳的髒話。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">69.</span
              >在比鬼頭刀更威猛的氣勢下，我可以想像背後海湧伯讚許點頭的微笑表情。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">70.</span
              >已經收回了大約五十米線，牠再度躍出水面。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">71.</span
              >我竟然看到兩隻鬼頭刀一起跳出水面，大概是眼裡的戰鬥火花模糊了我的視覺，用袖口抹了下眼角……沒有看錯，是兩隻鬼頭刀幾乎是頭靠著頭一起躍出水面。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">72.</span
              >這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">73.</span
              >並沒有放鬆我收線的手，再拉進了將近三十米線。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">74.</span
              >兩隻鬼頭刀一起躍起，一起摔下，一起游在水裡。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">75.</span
              >這樣的距離已經可以確定，中鉤的只有一隻，而另一隻是自由的。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">76.</span
              >為什麼會這樣呢？第二個問號重重的打進我的意志中。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">77.</span
              >再拉近十多米，這場鬥爭似乎已接近尾聲。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">78.</span
              >現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">79.</span
              >母魚游向左方，公魚也貼著身游向左邊，那親密的距離彷彿是在耳邊叮嚀，在耳邊安慰。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">80.</span
              >尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">81.</span
              >那眼神說話了：「讓我來分擔妳的痛苦，我願意與妳同生共死陪伴妳到永遠。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">82.</span
              >」牠們背上的藍色光點一起躍進我的眼裡，竟然是那般的刺眼、光亮。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">83.</span
              >海湧伯似乎察覺到了我逐漸鬆垮的臂膀，不知什麼時候已站立在我的身旁。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">84.</span
              >我感覺到他在我的耳邊說：「眼睛閉起來吧！如果當做是一場戰爭，就該忘掉眼淚……。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">85.</span
              >」高傲美麗而且多情的鬼頭刀哇！如果是岸上的鬥爭我絕不遲疑，因為在岸上的世界，溫情就是懦弱就是包袱。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">86.</span
              >但，我心裡的這片海原本多情，為這美麗的魚和這美麗的情意，這場景畢竟人間少見，我捨不得閉眼。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">87.</span
              >堅持的肩膀很快的完全鬆垮了，手臂不再有力。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">88.</span
              >把岸上的鬥爭習性帶來海洋，原本就是我最大的錯誤。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">89.</span
              >海湧伯撿起折斷了的魚鉤說：「這不是普通的力量。
            </span>
          </p>
          <p>
            <span
              ><span class="lineNum">90.</span
              >」夕陽煥照，紅霞滿天，船隻落寞回航，蓊鬱遠山以其永恆不變的姿態橫亙浪緣，飛魚照樣飛起，照樣。
            </span>
          </p>
        </div>
        <div v-if="open == 'block'" class="block">
          <p>
            <span class="blockNum">block : 1</span
            ><span
              ><span class="lineNum">1.</span
              >漁船鏗鏘的引擎聲，響徹黎明港灣，破曉晨色茫茫。 </span
            ><br /><span
              ><span class="lineNum">2.</span
              >飛魚衝破海面凌空飛起，像一隻亮白的飛鳥，低空劃過東邊浮出海面的火紅朝陽。 </span
            ><br /><span
              ><span class="lineNum">3.</span
              >飛魚飛越了比我歡呼聲更持久的距離，在一個漂亮的弧線轉彎後，墜入海中。 </span
            ><br /><span
              ><span class="lineNum">4.</span
              >掌舵的海湧伯說：「飛魚在逃避，逃避鬼頭刀的追擊。 </span
            ><br /><span
              ><span class="lineNum">5.</span
              >」鬼頭刀，果然是海中的一把刀。 </span
            ><br /><span
              ><span class="lineNum">6.</span
              >牠快速的身影從船邊一閃而過，在深邃的波光中閃耀著青藍光芒。 </span
            ><br /><span
              ><span class="lineNum">7.</span
              >偶爾，牠會放慢速度，甚或停在船邊，用好奇的龍銀大眼與我在不同的世界裡相互對望。 </span
            ><br /><span
              ><span class="lineNum">8.</span
              >那眼神肆無忌憚，高傲銳利得像把刀。 </span
            ><br /><span
              ><span class="lineNum">9.</span
              >當飛魚將被追上，驚慌的躍出水面，逃避到另一個空間裡飛翔。 </span
            ><br /><span
              ><span class="lineNum">10.</span
              >水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 2</span
            ><span
              ><span class="lineNum">11.</span
              >海裡的魚群生性驚惶，只有兩種魚肯大大方方的靠近船筏。 </span
            ><br /><span
              ><span class="lineNum">12.</span
              >那就是海豚和鬼頭刀，牠們用兩種截然不同的方式跟漁人接觸。 </span
            ><br /><span
              ><span class="lineNum">13.</span
              >海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。 </span
            ><br /><span
              ><span class="lineNum">14.</span
              >這時，海湧伯會把船舵交給我，也許他的年紀不再合適這樣的遊戲。 </span
            ><br /><span
              ><span class="lineNum">15.</span
              >我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。 </span
            ><br /><span
              ><span class="lineNum">16.</span
              >再把舵搖向另一個方向，讓船筏快速離開，牠們立刻又跟了上來，始終與我們保持一段安全距離。 </span
            ><br /><span
              ><span class="lineNum">17.</span
              >就這樣跟牠們在寬廣的海域蛇行、繞圈子。 </span
            ><br /><span
              ><span class="lineNum">18.</span
              >在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。 </span
            ><br /><span
              ><span class="lineNum">19.</span
              >那樣友善的接觸，卻始終保持警覺，感覺是溫暖的又有點清冷，不曉得是海豚的聰黠，還是漁人的悲哀。 </span
            ><br /><span
              ><span class="lineNum">20.</span
              >海上遠遠的，時常可以看到一圈激起白色浪花的海面，海豚的背影在其間穿梭跳躍，這是一群海豚正在享用鰹魚大餐。 </span
            ><br /><span
              ><span class="lineNum">21.</span
              >年輕力壯的海豚會分頭追趕一群鰹魚，逐漸把鰹魚群趕入牠們圍住的圈圈裡，讓老弱婦孺共享大餐。 </span
            ><br /><span
              ><span class="lineNum">22.</span
              >人們也沿用這樣的方法把海豚圍入淺灣中，然後集體屠殺，不為了食物，不為了生活的必需，像是嫉妒牠們的聰明，或是怨恨牠們的頑皮。 </span
            ><br /><span
              ><span class="lineNum">23.</span
              >鬼頭刀也會游近船筏，但感覺總是那樣恍然，突然出現又突然失去蹤影。 </span
            ><br /><span
              ><span class="lineNum">24.</span
              >牠游近船筏可沒覺得牠的善意或者惡意，僅僅是路過或者因緣際會罷了。 </span
            ><br /><span
              ><span class="lineNum">25.</span
              >牠一點也不在乎船筏的陰影，不在乎船上虎視眈眈的漁人及漁具。 </span
            ><br /><span
              ><span class="lineNum">26.</span
              >偶爾牠會好奇的停下來與你瞪上兩眼，然後從容離開。 </span
            ><br /><span
              ><span class="lineNum">27.</span
              >牠那毫不畏懼的眼神，顯現牠不是智商不足，就是信心十足。 </span
            ><br /><span
              ><span class="lineNum">28.</span
              >鬼頭刀不同於一般洄游性魚類慣用的灰黑保護色調，牠美麗的色彩像極了熱帶雨林中的花彩鸚鵡，不但不驚惶避諱任何注視的目光，反而是驕傲的展現自我的存在。 </span
            ><br /><span
              ><span class="lineNum">29.</span
              >兩片鮮黃胸鰭平衡著青色的流線身軀，像一艘在海洋中悠游飛翔的潛艇。 </span
            ><br /><span
              ><span class="lineNum">30.</span
              >牠的背上綴飾著藍色發亮星點，在墨藍的海水中如武士佩戴著勳章般的神氣，也像夜暗星光般的神祕與詭異。 </span
            ><br /><span
              ><span class="lineNum">31.</span
              >雖然在魚市場鬼頭刀算是賤價的魚種，但是價錢的高低並不能絲毫減損牠在我心目中的價值。 </span
            ><br /><span
              ><span class="lineNum">32.</span
              >牠的價值表現在牠的生命上，就像牠美麗的色彩與藍色星點，在離開海洋離開生命後，即刻消逝。 </span
            ><br /><span
              ><span class="lineNum">33.</span
              >在我將近五年的海上經驗中，每次看到牠，我的心情都會像槳葉攪動後的海面般，波波痕痕。 </span
            ><br /><span
              ><span class="lineNum">34.</span
              >初初下海的那年夏天，一個烏雲滿天傍晚，暴風雨正盤算跟著夜幕來襲，海湧伯把引擎催趕成急迫的回航節奏。 </span
            ><br /><span
              ><span class="lineNum">35.</span
              >在立霧溪海口，一條大魚咬中了船尾拖釣的假餌，八十磅的粗線及緩衝用的內胎橡皮瞬間被拉成筆直，時空似乎凍結住了，就等候斷裂的一聲巨響。 </span
            ><br /><span
              ><span class="lineNum">36.</span
              >我幾乎是尖叫呼喊著，海湧伯緩下船速回頭看著那條在船後凌空翻跳的大魚，示意我：「拉牠上來！」而且並沒有要過來幫忙的意思。 </span
            ><br /><span
              ><span class="lineNum">37.</span
              >拉扯了半天，那大魚驚人的力量折騰得我手掌都起了水泡。 </span
            ><br /><span
              ><span class="lineNum">38.</span>好不容易將牠拉近船尾。 </span
            ><br /><span
              ><span class="lineNum">39.</span
              >牠也似乎認命了，終於安靜的停止跳躍。 </span
            ><br /><span
              ><span class="lineNum">40.</span
              >這時我清楚的看到水面下這條巨大的鬼頭刀。 </span
            ><br /><span
              ><span class="lineNum">41.</span
              >粉紅色的假餌掛在牠的嘴角，牠游水的姿態竟然還十分從容。 </span
            ><br /><span
              ><span class="lineNum">42.</span
              >充滿自信的緩緩游向左側，用牠大大的左眼狠狠瞪我，那眼神毫無畏懼而且十分的不在乎；再悠閒的游向右方，右眼一樣的對我射出倨傲的神采。 </span
            ><br /><span
              ><span class="lineNum">43.</span
              >當牠背上藍色明亮的星狀光點迷惑在我瞳孔上時，一股強烈的意識瞬間進入我的腦中，清楚的告訴我：「你已經失去了這條魚！」在我的夢裡，開始出現了跟鬼頭刀搏鬥的場景，那倨傲桀驁的眼神經常壓迫著我的夢，一遍又一遍，我撫摸著銳利的魚鉤，一遍又一遍把鮮豔的假餌提在眼前晃動。 </span
            ><br /><span
              ><span class="lineNum">44.</span
              >我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。 </span
            ><br /><span
              ><span class="lineNum">45.</span
              >我靜靜的等待，等待泡沫後那隻跟在船後游動的鮮美目標。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 3</span
            ><span
              ><span class="lineNum">46.</span
              >衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。 </span
            ><br /><span
              ><span class="lineNum">47.</span
              >從海中的鬼頭刀到海面上拉線的漁人，我的精神陷入這樣的輪迴中，一遍遍的反覆演練，從不疲倦。 </span
            ><br /><span
              ><span class="lineNum">48.</span
              >鬥志逐漸被激發成激昂的獸性，等待牠再度出現的心每一次伴隨著我出海。 </span
            ><br /><span
              ><span class="lineNum">49.</span
              >這段期間，海湧伯看出我的沉默及我眼中燃燒的火炬，卻始終不曾為我說一句鼓勵的話，也許他期待的是一場公平的戰爭，或者是一堂漁人入門的必修課程。 </span
            ><br /><span
              ><span class="lineNum">50.</span
              >遠山浮雲飛鳥波濤，海面上的一切是我們習慣了的亮麗世界。 </span
            ><br /><span
              ><span class="lineNum">51.</span
              >薄薄一面之隔的海面下，那鬼頭刀浮沉的空間，是漁人視覺不可及的未知世界。 </span
            ><br /><span
              ><span class="lineNum">52.</span
              >一個個餌鉤沉下水面，就像沉下一個個倒懸的問號，而答案往往是從零到無窮，甚或常常連問號也無法收回。 </span
            ><br /><span
              ><span class="lineNum">53.</span
              >這是在放下餌釣或撒網當初誰也無法預知的結果。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 4</span
            ><span
              ><span class="lineNum">54.</span
              >所以漁人必須學會承受不自主的命運，學會等待、落空、失望，或者學會如何承受難堪的狂喜。 </span
            ><br /><span
              ><span class="lineNum">55.</span
              >海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。 </span
            ><br /><span
              ><span class="lineNum">56.</span
              >跟鬼頭刀纏鬥的意志如能量般累積在我的胸腔。 </span
            ><br /><span
              ><span class="lineNum">57.</span
              >船筏一次次的在立霧溪海口巡弋，也一次次的落空失望。 </span
            ><br /><span
              ><span class="lineNum">58.</span
              >感覺上鬼頭刀似乎隱藏在海面下的某個角落窺視著我們，那幽靈般藍色的發亮星點似乎環繞在船筏四周，而又在我興奮的跳躍起來後消失無蹤。 </span
            ><br /><span
              ><span class="lineNum">59.</span
              >海上的日子在苦悶的等待中彷彿海水的味道鹹鹹苦苦的。 </span
            ><br /><span
              ><span class="lineNum">60.</span
              >偶爾低空貼浪覓食的海鳥，常被我誤以為是跳出水面的飛魚而興奮起來，而灰暗下來。 </span
            ><br /><span
              ><span class="lineNum">61.</span
              >鬼頭刀是少數兩性表徵明顯的魚類，公魚額頭高聳如崖壁，就像頭上頂著一把劈水的刀斧，像公牛隆起的肩或雄獅威風的鬃鬣及吼叫；母魚全身體型修長圓潤，連眼神都帶著幾許溫柔。 </span
            ><br /><span
              ><span class="lineNum">62.</span
              >「鬼頭刀」這樣的名稱似乎是來自公魚的威容，漁人又稱牠為「飛魚虎」，從「鬼」、「刀」、「虎」這三個字就足以形容鬼頭刀在漁人眼中是如此神祕、銳利及凶猛。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 5</span
            ><span
              ><span class="lineNum">63.</span
              >同樣時間、同樣地點、同樣場景，船尾的魚線再度被拉成筆直。 </span
            ><br /><span
              ><span class="lineNum">64.</span
              >大約在船後一百米處中鉤的鬼頭刀不斷的翻躍到空中，重重的摔滾在水面上。 </span
            ><br /><span
              ><span class="lineNum">65.</span
              >我用興奮得幾乎顫抖的聲音，呼喊海湧伯放慢船速，多日來等待的抑鬱都在中魚的瞬間明朗起來。 </span
            ><br /><span
              ><span class="lineNum">66.</span
              >如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。 </span
            ><br /><span
              ><span class="lineNum">67.</span
              >心裡充滿自信的告訴自己：「決戰的時刻終於來了。 </span
            ><br /><span
              ><span class="lineNum">68.</span
              >」一把，一把，隨著牠跳躍的節奏有力的收線，我嘴裡咕噥著海湧伯不堪入耳的髒話。 </span
            ><br /><span
              ><span class="lineNum">69.</span
              >在比鬼頭刀更威猛的氣勢下，我可以想像背後海湧伯讚許點頭的微笑表情。 </span
            ><br /><span
              ><span class="lineNum">70.</span
              >已經收回了大約五十米線，牠再度躍出水面。 </span
            ><br /><span
              ><span class="lineNum">71.</span
              >我竟然看到兩隻鬼頭刀一起跳出水面，大概是眼裡的戰鬥火花模糊了我的視覺，用袖口抹了下眼角……沒有看錯，是兩隻鬼頭刀幾乎是頭靠著頭一起躍出水面。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 6</span
            ><span
              ><span class="lineNum">72.</span
              >這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。 </span
            ><br /><span
              ><span class="lineNum">73.</span
              >並沒有放鬆我收線的手，再拉進了將近三十米線。 </span
            ><br /><span
              ><span class="lineNum">74.</span
              >兩隻鬼頭刀一起躍起，一起摔下，一起游在水裡。 </span
            ><br />
          </p>
          <p>
            <span class="blockNum">block : 7</span
            ><span
              ><span class="lineNum">75.</span
              >這樣的距離已經可以確定，中鉤的只有一隻，而另一隻是自由的。 </span
            ><br /><span
              ><span class="lineNum">76.</span
              >為什麼會這樣呢？第二個問號重重的打進我的意志中。 </span
            ><br /><span
              ><span class="lineNum">77.</span
              >再拉近十多米，這場鬥爭似乎已接近尾聲。 </span
            ><br /><span
              ><span class="lineNum">78.</span
              >現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。 </span
            ><br /><span
              ><span class="lineNum">79.</span
              >母魚游向左方，公魚也貼著身游向左邊，那親密的距離彷彿是在耳邊叮嚀，在耳邊安慰。 </span
            ><br /><span
              ><span class="lineNum">80.</span
              >尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。 </span
            ><br /><span
              ><span class="lineNum">81.</span
              >那眼神說話了：「讓我來分擔妳的痛苦，我願意與妳同生共死陪伴妳到永遠。 </span
            ><br /><span
              ><span class="lineNum">82.</span
              >」牠們背上的藍色光點一起躍進我的眼裡，竟然是那般的刺眼、光亮。 </span
            ><br /><span
              ><span class="lineNum">83.</span
              >海湧伯似乎察覺到了我逐漸鬆垮的臂膀，不知什麼時候已站立在我的身旁。 </span
            ><br /><span
              ><span class="lineNum">84.</span
              >我感覺到他在我的耳邊說：「眼睛閉起來吧！如果當做是一場戰爭，就該忘掉眼淚……。 </span
            ><br /><span
              ><span class="lineNum">85.</span
              >」高傲美麗而且多情的鬼頭刀哇！如果是岸上的鬥爭我絕不遲疑，因為在岸上的世界，溫情就是懦弱就是包袱。 </span
            ><br /><span
              ><span class="lineNum">86.</span
              >但，我心裡的這片海原本多情，為這美麗的魚和這美麗的情意，這場景畢竟人間少見，我捨不得閉眼。 </span
            ><br /><span
              ><span class="lineNum">87.</span
              >堅持的肩膀很快的完全鬆垮了，手臂不再有力。 </span
            ><br /><span
              ><span class="lineNum">88.</span
              >把岸上的鬥爭習性帶來海洋，原本就是我最大的錯誤。 </span
            ><br /><span
              ><span class="lineNum">89.</span
              >海湧伯撿起折斷了的魚鉤說：「這不是普通的力量。 </span
            ><br /><span
              ><span class="lineNum">90.</span
              >」夕陽煥照，紅霞滿天，船隻落寞回航，蓊鬱遠山以其永恆不變的姿態橫亙浪緣，飛魚照樣飛起，照樣。 </span
            ><br />
          </p>
        </div>

        <div v-if="open == 'summary'" class="summary">
          <p>
            <span class="blockNum">block : 1</span>
            水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。
          </p>
          <p>
            <span class="blockNum">block : 2</span>
            海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。
            我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。
            在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。
            我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。
          </p>
          <p>
            <span class="blockNum">block : 3</span>
            衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。
          </p>
          <p>
            <span class="blockNum">block : 4</span>
            海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。
          </p>
          <p>
            <span class="blockNum">block : 5</span>
            如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。
          </p>
          <p>
            <span class="blockNum">block : 6</span>
            這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。
          </p>
          <p>
            <span class="blockNum">block : 7</span>
            現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。
            尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("AIDetails", ["open"]),
  },
  methods: {
    ...mapMutations("AIDetails", ["setOpen"]),
    openContent(e) {
      this.setOpen(e.target.classList[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
$color1: #7209b7;
$color2: #b5179e;
$color3: #f72585;

.ai-details-container {
  display: grid;
  grid-auto-flow: row;
  row-gap: 1em;
  p {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    &.steps {
      font-weight: normal;
      font-size: clamp(1em, 2vw, 1.5em);
    }
  }
}
.from {
  font-size: 1em;
  text-align: center;
}
.example {
  position: relative;
  padding: 0.5em;
  .summary-menu {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    column-gap: 1em;
    button {
      border: none;
      cursor: pointer;
      font-size: clamp(1em, 2vw, 1.2em);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      color: white;
      padding: 0.5em;
      &:nth-of-type(1) {
        background-color: $color1;
      }
      &:nth-of-type(2) {
        background-color: $color2;
      }
      &:nth-of-type(3) {
        background-color: $color3;
      }
    }
  }
  .original,
  .block,
  .summary {
    display: grid;
    grid-auto-flow: row;
    row-gap: 0.5em;
    padding: 0.5em;
    border-radius: 5px;
    p {
      display: flex;
      flex-direction: column;
      row-gap: 0;
      br {
        display: block; /* makes it have a width */
        content: ""; /* clears default height */
        margin-top: 0.5em; /* change this to whatever height you want it */
      }
      .lineNum {
        font-weight: bold;
        padding-right: 0.5em;
      }
    }
  }

  .original {
    background-color: $color1;
  }
  .block {
    background-color: $color2;
  }
  .summary {
    background-color: $color3;
  }
  p {
    text-align: left;
    font-size: 1em;
    font-weight: normal;
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 0.5em;
  }
  .blockNum {
    text-align: center;
    font-weight: bold;
  }
}
</style>
