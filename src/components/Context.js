import { createContext, useReducer, useContext } from 'react'
import EP1 from 'assets/images/ep1.jpg'
import EP2 from 'assets/images/ep2.jpg'
import EP3 from 'assets/images/ep3.jpg'

export const MainContext = createContext({})

export const useMainContext = () => useContext(MainContext)

const initState = {
  videoObj: {
    1: {
      imageUrl: EP1,
      imageAlt: '商務會展停擺怎麼辦？線上貿易搶先做！',
      title: '商務會展停擺怎麼辦？線上貿易搶先做！',
      badge: 'EP1',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/914080300%3Fsecret_token%3Ds-5vCwAwA5JEM&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep1/s-5vCwAwA5JEM" title="TTime EP1" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP1</a></div>`,
      },
      content: [
        '2020年的國際大新聞就是線上貿易成為主流趨勢啦！COVID-19疫情爆發以後，很多國家都封城、鎖國，防止疫情擴散，影響人員的國際移動，國際貿易產業也因此從線下開始轉往線上運作。',
        '因為疫情衝擊，世界貿易組織（WTO）預估，2020年全球貿易最多可能會萎縮32%，國際指標性會展，像是新加坡國際食品展、泰國國際工業展、日本東京食品展、德國科隆五金展等指標性會展紛紛取消或延期，產業界可以說是面臨前所未有的挑戰。',
        '不過同一時間，也有許多中小企業忙得不可開交，做起線上貿易了！這就得歸功於超前推動數位轉型了。現在很多公司都透過網路來接觸客戶跟行銷產品，例如使用行銷科技精準投廣告、利用數據分析找買主、視訊會議談生意，甚至帶攝影團隊搭棚拍產品VR環景照來向客戶展示（demo）產品。',
        '想要趕上這一波趨勢就快來參加經濟部國際貿易局推出的數位貿易輔導方案跟數位貿易學苑吧！',
        '數位貿易輔導方案，不只教您上面提到的新科技，還包含怎麼寫文案、產品上架電商等撇步，更重要的是，從事進出口貿易的企業還能夠向貿易局申請等值20,000元的輔導經費。',
        '數位貿易學苑，則是實體課程與線上學習並行，讓企業能夠隨時學習國際貿易最新趨勢，例如電商經營戰術解析、數位行銷策略與工具應用、社群媒體經營秘笈等課程。',
        '這麼好康，還在等什麼？趕快上網搜尋「數位貿易輔導方案」和「數位貿易學苑」吧！',
      ],
    },
    2: {
      imageUrl: EP2,
      imageAlt: '不只是美學話題，端莊時尚商機',
      title: '不只是美學話題，端莊時尚商機',
      badge: 'EP2',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/918884062%3Fsecret_token%3Ds-XPVmcRY1XZT&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep2/s-XPVmcRY1XZT" title="TTime EP2-端莊時尚" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP2-端莊時尚</a></div>`,
      },
      content: [
        `端莊要怎麼時尚?端莊時尚又有什麼商機？其實，端莊時尚就是臺灣搶進穆斯林市場的大好機會！無論常見的頭巾或是服飾配件，甚至到美妝小物，都是端莊時尚的熱門品項！`,
        `常見的頭巾其實只是端莊時尚的一部分。簡單講，端莊時尚指得是不暴露的美，而這是根據古蘭經和聖訓中關於「羞體」的概念所延伸出來的衣著與打扮風格。一般而言，男性的羞體包含肚臍至膝蓋一段，而女性，依照伊斯蘭教法學派解釋的不同而有寬有嚴，但通常認為是除了臉與雙掌以外的所有部位，都屬於羞體。`,
        `端莊時尚產業目前成長相當可期。2018年端莊時尚的全球市場規模已經達2,830億美元，並預估在2024年成長至4,020億美元。驚人的市場規模使得非穆斯林國家也積極投入市場，端莊時尚時裝秀也自2016年起在土耳其伊斯坦堡倫敦、杜拜、印尼雅加達、荷蘭阿姆斯特丹等城市舉辦。`,
        `面對端莊時尚，臺灣的機會在哪裡？其實臺灣的美妝小物已經切入端莊時尚了。對於新南向市場的穆斯林女性而言，臺灣製造的假睫毛是人人瘋搶的最愛品項。布局完整的紡織產業鏈以及品質優異的機能布料，也是臺灣搶進端莊時尚產業的優勢。`,
        `為了讓臺灣的優勢能夠在國際上被看到，經濟部國際貿易局委託中華民國紡織業拓展會（紡拓會）執行紡織品整合行銷與開發計畫，除了帶企業參展，還針對永續發展、B2B行銷、數位行銷舉辦研討會，因應COVID-19疫情，紡拓會也利用線上展覽、網路社群、電子商務等策略幫助臺灣企業持續拓展國際市場。紡織品整合行銷與開發計畫甚至提供客製化輔導方案，獲選企業最高可以獲得100萬元的補助經費喔！`,
        `心動了嗎？快上網搜尋紡織品整合行銷與開發計畫來開創端莊時尚商機吧!`,
      ],
    },
    3: {
      imageUrl: EP3,
      imageAlt: '宅經濟當道，另類商機逆勢成長',
      title: '宅經濟當道，另類商機逆勢成長',
      badge: 'EP3',
      videoUrl:
        'https://iframe.videodelivery.net/ceca137e368af4e5b28d873415064802',
      audio: {
        iframeCode: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921829804%3Fsecret_token%3Ds-3UOEU7xBOO2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-388759348" title="TTtime" target="_blank" style="color: #cccccc; text-decoration: none;">TTtime</a> · <a href="https://soundcloud.com/user-388759348/ttime-ep3-podcast/s-3UOEU7xBOO2" title="TTime EP3 宅經濟 Podcast" target="_blank" style="color: #cccccc; text-decoration: none;">TTime EP3 宅經濟 Podcast</a></div>`,
      },
      content: [
        `COVID-19疫情爆發，出現危機，卻也帶來許多轉機！在疫情肆虐之下，大家必須保持社交距離，企業也加速數位轉型，引爆了「宅經濟」逆勢成長！`,
        `面對這一波挑戰，微軟執行長薩提亞（Satya Nadella）即表示，原本估計要兩年才能完成的數位轉型已經提早完成。國內常見的轉變，像是大量興起的外送服務，或是實體店面轉型成為網路電商等，已經帶動宅經濟發威！`,
        `除國內市場，企業也可以加速布局新南向市場。SHOPLINE和Facebook共同發布的「2020跨境電商白皮書」就指出，臺灣的跨境電商首選，就是地理位置鄰近、產業結構相似、喜好重疊度高的東南亞市場，當地電子商務產值已經攀升6倍，從2015年的55億美元成長到2019年的380億美元。`,
        `想要搶攻東南亞這一波宅經濟熱潮？現在就是最適合的切入時機！經濟部國際貿易局的「跨境電商完全解決方案」提供上架日本樂天、美國ebay、越南Tiki、印尼Blibli、泰國PChome Thai、新加坡Qoo10等知名東南亞電商平臺上架優惠。專案依平臺及代營運商提供不同輔導項目，包含選品上架作業、商品說明翻譯、物流處理、在地客服或行銷規劃等。`,
        `如果你是新手，需要專人引路，那也別擔心，趕快上<a href='https://gd.taiwantrade.com/' target='_blank'>GD數位基地</a>吧！GD不只提供專業的上架、物流、翻譯、行銷、金流、支付諮詢，讓想做跨境電商的朋友們能一站式全套練功，也有許多限時優惠方案。路都已經鋪好了，你還在等什麼？立刻進入GD數位基地一探究竟吧！`,
      ],
    },
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const videos = Object.entries(state.videoObj).map(([key, item]) => ({
    ...item,
    id: key,
  }))

  return (
    <MainContext.Provider value={{ state: { ...state, videos, dispatch } }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
