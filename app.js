const DATA_VERSION = "2026-08-14";

const moods = [
  { id: "refreshing", label: "解暑", color: "#168b80" },
  { id: "milk", label: "奶茶", color: "#9b6a3a" },
  { id: "fruit", label: "水果", color: "#e0783c" },
  { id: "tea", label: "茶感", color: "#2e6bb5" },
  { id: "sweet", label: "甜一點", color: "#c45562" },
  { id: "budget", label: "省錢", color: "#6f8f36" },
  { id: "new", label: "換口味", color: "#8159b4" },
];

let stores = [
  {
    id: "magu-innovation",
    name: "麻古茶坊 楠梓創新店",
    area: "創新路",
    address: "高雄市楠梓區創新路21號",
    rating: 4.9,
    reviews: "370+",
    budget: 85,
    eta: "約 20-35 分",
    mood: ["fruit", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#e0783c",
    summary: "果粒茶、柳橙綠和紅茶拿鐵都穩，早上到晚上都容易納入團訂。",
    picks: ["翡翠柳橙", "波霸紅茶拿鐵", "百香雙Q果"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E9%BA%BB%E5%8F%A4%E8%8C%B6%E5%9D%8A-%E6%A5%A0%E6%A2%93%E5%89%B5%E6%96%B0%E5%BA%97/DC4QpXR2UKCD3369SoheGg",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "chatanghui-nanzi",
    name: "茶湯會 楠梓新店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路194號1樓",
    rating: 4.9,
    reviews: "2000+",
    budget: 80,
    eta: "約 20-40 分",
    mood: ["tea", "milk", "group"],
    caffeine: true,
    group: true,
    color: "#2e6bb5",
    summary: "茶味派的安全牌，觀音拿鐵和翡翠綠茶適合多人各自選甜度冰塊。",
    picks: ["觀音珍珠拿鐵", "特級翡翠綠茶", "蔗香紅茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/d5yb/cha-tang-hui-nan-zi-xin-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%8C%B6%E6%B9%AF%E6%9C%83-%E6%A5%A0%E6%A2%93%E6%96%B0%E5%BA%97/SJgzjIzCTo2pAepzB3GzRg",
    },
    source: "Foodpanda / Uber Eats 公開頁面",
  },
  {
    id: "waterlane-nanzi",
    name: "水巷茶弄 高雄楠梓店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路218號",
    rating: 4.9,
    reviews: "1000+",
    budget: 90,
    eta: "約 20-40 分",
    mood: ["refreshing", "fruit", "sweet", "new", "group"],
    caffeine: false,
    group: true,
    color: "#42a5a1",
    summary: "愛玉、小紫蘇和檸檬蘆薈很適合高雄熱天，想避開咖啡因時很好用。",
    picks: ["寒天愛玉小紫蘇", "桔香小紫蘇", "檸檬蜂蜜蘆薈"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%B0%B4%E5%B7%B7%E8%8C%B6%E5%BC%84-%E9%AB%98%E9%9B%84%E6%A5%A0%E6%A2%93%E5%BA%97/2wD6CfbgQyWOubMVU82pdg",
    },
    promotion: {
      label: "Uber Eats 買一送一",
      detail: "Uber Eats 公開頁面列出指定飲品買一送一，資格需依登入後地址確認。",
      items: ["寒天愛玉小紫蘇買一送一 $90", "桔香小紫蘇買一送一 $85", "新顧客 0 元外送費線索"],
      url: "https://www.ubereats.com/tw/store/%E6%B0%B4%E5%B7%B7%E8%8C%B6%E5%BC%84-%E9%AB%98%E9%9B%84%E6%A5%A0%E6%A2%93%E5%BA%97/2wD6CfbgQyWOubMVU82pdg",
      verified: DATA_VERSION,
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "sugarcane-mom",
    name: "甘蔗の媽媽 楠梓站前店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路153號",
    rating: 4.9,
    reviews: "500+",
    budget: 80,
    eta: "約 20-40 分",
    mood: ["refreshing", "fruit", "sweet", "new"],
    caffeine: false,
    group: false,
    color: "#6f8f36",
    summary: "甘蔗青茶、甘蔗檸檬和原汁走清爽路線，下午覺得乾的時候很合。",
    picks: ["招牌四季甘蔗青茶", "甘蔗檸檬", "新鮮甘蔗原汁"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E7%94%98%E8%94%97%E3%81%AE%E5%AA%BD%E5%AA%BD-%E6%A5%A0%E6%A2%93%E7%AB%99%E5%89%8D%E5%BA%97/JObpgAd6Xsquix1ibqDvug",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "unocha-tuku",
    name: "烏弄 楠梓土庫店",
    area: "清豐二路",
    address: "高雄市楠梓區清豐二路88號",
    rating: 4.9,
    reviews: "190+",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#946c43",
    summary: "金萱、冬片和紅茶拿鐵表現穩，想喝有茶香的奶類可以抽它。",
    picks: ["金萱烏龍拿鐵", "玉霞紅茶拿鐵", "檸檬冬片仔"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E7%83%8F%E5%BC%84-%E6%A5%A0%E6%A2%93%E5%9C%9F%E5%BA%AB%E5%BA%97/Tlhj-WfVXNWzcNKXcRwdOA",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "ninetea-dexian",
    name: "拾汣茶屋 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路241號",
    rating: 4.9,
    reviews: "500+",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["new", "milk", "fruit", "sweet", "group"],
    caffeine: true,
    group: true,
    color: "#8159b4",
    summary: "品項比較有記憶點，粉粿、港奶、抹茶和水果茶都能照顧到不同同事。",
    picks: ["小王秘蜜粿果綠", "港式奶茶", "蜜桃桂花烏"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/zr04/shi-cha-wu-nan-zi-de-xian-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%8B%BE%E6%B1%A3%E8%8C%B6%E5%B1%8B-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/mibnUWnbWs-TqVa_dZfHTQ",
    },
    source: "Foodpanda / Uber Eats 公開頁面",
  },
  {
    id: "ching-shin-dexian",
    name: "清心福全 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路232號",
    rating: 5,
    reviews: "220+",
    budget: 70,
    eta: "約 25-45 分",
    mood: ["budget", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#168b80",
    summary: "預算友善又好分杯，優多綠、蜂蜜烏龍和鮮奶茶都是不容易踩雷的選項。",
    picks: ["優多綠茶", "蜂蜜烏龍", "鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%B8%85%E5%BF%83%E7%A6%8F%E5%85%A8-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/ejKcl7ltXK-aMQz1ChgTuQ",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "sugarstand-dexian",
    name: "蔗一攤 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路171號1樓",
    rating: 4.9,
    reviews: "72+",
    budget: 75,
    eta: "約 25-45 分",
    mood: ["refreshing", "fruit", "sweet", "budget"],
    caffeine: false,
    group: false,
    color: "#83a33b",
    summary: "甘蔗系另一個好選擇，德賢路商圈營業到較晚，夜班前也能考慮。",
    picks: ["甘蔗青茶", "鮮甘蔗汁", "冬瓜檸檬"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%94%97%E4%B8%80%E6%94%A4-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/Ceped7cHWz-irE2kDwFogQ",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "coco-dexian",
    name: "CoCo都可 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路商圈",
    rating: 4.9,
    reviews: "1000+",
    budget: 75,
    eta: "約 25-45 分",
    mood: ["budget", "milk", "fruit", "group"],
    caffeine: true,
    group: true,
    color: "#c45562",
    summary: "Foodpanda 常見優惠型候選，想用活動湊團或買多杯時可以先看它。",
    picks: ["28茉粉角輕乳茶", "鮮調果茶", "奶茶系列"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/h9hl/cocodu-ke-nan-zi-de-xian-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/coco%E9%83%BD%E5%8F%AF-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2/ExmQsdrUVpWag_wTZi5KvQ",
    },
    promotion: {
      label: "50% 指定品項",
      detail: "Foodpanda 公開頁面列出指定品項 50% 優惠，會自動套用；活動商品客製化選項需相同。",
      items: [
        "28茉粉角輕乳茶(L) x2: $100，原 $200",
        "粉角奶茶(L) x2: $70，原 $140",
        "紅柚香檸美式(L) x2: $90，原 $180",
      ],
      url: "https://www.foodpanda.com.tw/restaurant/h9hl/cocodu-ke-nan-zi-de-xian-dian",
      verified: DATA_VERSION,
    },
    source: "Foodpanda 公開頁面",
  },
  {
    id: "zhenzhudan-dexian",
    name: "珍煮丹 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路商圈",
    rating: 4.9,
    reviews: "3000+",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["milk", "sweet", "group"],
    caffeine: true,
    group: true,
    color: "#9b6a3a",
    summary: "黑糖珍珠鮮奶系的熱門選擇，想喝甜一點或珍珠控同事多時很適合。",
    picks: ["黑糖珍珠鮮奶", "琥珀烏龍拿鐵", "黑糖綿芋鮮奶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/n8ua/zhen-zhu-dan-nan-zi-de-xian-dian",
    },
    promotion: {
      label: "首次訂餐免外送費",
      detail: "Foodpanda 公開頁面列出首次訂餐享免外送服務費，需消費滿 79 元。",
      items: ["首次訂餐免外送服務費 $9", "適用門檻: 消費滿 $79"],
      url: "https://www.foodpanda.com.tw/restaurant/n8ua/zhen-zhu-dan-nan-zi-de-xian-dian",
      verified: DATA_VERSION,
    },
    source: "Foodpanda 公開頁面",
  },
  {
    id: "mumu-nanzi",
    name: "沐沐MUMU 高雄楠梓店",
    area: "宏毅一路",
    address: "高雄市楠梓區宏毅一路6號",
    rating: 5,
    reviews: "12+",
    budget: 85,
    eta: "約 15-30 分",
    mood: ["new", "milk", "sweet"],
    caffeine: true,
    group: false,
    color: "#c45562",
    summary: "離園區感覺近、口味偏有特色，適合想跳脫連鎖安全牌的中午。",
    picks: ["沐沐紅玉", "紫米拿鐵", "醇奶紅玉"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%B2%90%E6%B2%90mumu-%E9%AB%98%E9%9B%84%E6%A5%A0%E6%A2%93%E5%BA%97/79jnKSc3VYKPoaRvKLKy6A",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "xiaoya-dexian",
    name: "小雅芋頭西米露專賣 楠梓店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路264號",
    rating: 4.9,
    reviews: "410+",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["milk", "sweet", "new"],
    caffeine: false,
    group: false,
    color: "#8b6fbd",
    summary: "芋頭西米露和鮮奶系很有飽足感，下午想把點心一起解決可以抽它。",
    picks: ["芋頭西米露鮮奶", "芋頭西米露", "冬瓜杏仁凍"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%B0%8F%E9%9B%85%E8%8A%8B%E9%A0%AD%E8%A5%BF%E7%B1%B3%E9%9C%B2%E5%B0%88%E8%B3%A3-%E6%A5%A0%E6%A2%93%E5%BA%97/tcG84iaQV_mhmklSI3uxgw",
    },
    promotion: {
      label: "Uber Eats 新客優惠",
      detail: "公開頁面顯示新顧客 0 元外送費提示，資格和距離需依登入後地址確認。",
      items: ["新顧客 0 元外送費", "需依 Uber Eats 登入後地址與資格確認"],
      url: "https://www.ubereats.com/tw/store/%E5%B0%8F%E9%9B%85%E8%8A%8B%E9%A0%AD%E8%A5%BF%E7%B1%B3%E9%9C%B2%E5%B0%88%E8%B3%A3-%E6%A5%A0%E6%A2%93%E5%BA%97/tcG84iaQV_mhmklSI3uxgw",
      verified: DATA_VERSION,
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "fiftylan-lequn",
    name: "50嵐 楠梓樂群店",
    area: "樂群路",
    address: "高雄市楠梓區樂群路152號",
    rating: 4.8,
    reviews: "500+",
    budget: 70,
    eta: "約 25-45 分",
    mood: ["budget", "tea", "milk", "group"],
    caffeine: true,
    group: true,
    color: "#e7b742",
    summary: "經典茶飲和奶茶選項完整，大家意見很分散時可以用它收斂。",
    picks: ["四季春", "珍珠奶茶", "冰淇淋紅茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/g62j/50lan-nan-zi-le-qun-dian",
    },
    source: "Foodpanda 公開頁面",
  },
  {
    id: "laolai-nanzi-station",
    name: "老賴茶棧 楠梓站前店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路150號",
    rating: 5,
    reviews: "100+",
    budget: 70,
    eta: "約 20-40 分",
    mood: ["tea", "budget", "refreshing"],
    caffeine: true,
    group: true,
    color: "#8b4f2f",
    summary: "招牌紅茶與奶茶系適合想喝古早味的下午，靠近楠梓站前商圈。",
    picks: ["招牌紅茶", "豆香紅茶", "太后牛乳"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%80%81%E8%B3%B4%E8%8C%B6%E6%A3%A7-%E6%A5%A0%E6%A2%93%E7%AB%99%E5%89%8D%E5%BA%97/3zDQKY-dVYOz6NNOuo12Fg",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "tea-manager-nanzi",
    name: "茶總管紅茶冰 楠梓新店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路163號",
    rating: 4.9,
    reviews: "100+",
    budget: 55,
    eta: "約 20-40 分",
    mood: ["budget", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#b85b35",
    summary: "大杯紅茶冰路線，想壓低預算或團訂很多杯時很實用。",
    picks: ["古早味紅茶", "冬瓜茶", "鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%8C%B6%E7%B8%BD%E7%AE%A1%E7%B4%85%E8%8C%B6%E5%86%B0-%E6%A5%A0%E6%A2%93%E6%96%B0%E5%BA%97/EH59tUW2SPG9p2LuOmUi6Q",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "blacktea-dad-nanzi",
    name: "紅茶老爹 楠梓新店",
    area: "楠梓新路",
    address: "高雄市楠梓區楠梓新路158號",
    rating: 4.9,
    reviews: "95+",
    budget: 60,
    eta: "約 20-40 分",
    mood: ["budget", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#a7432c",
    summary: "紅茶冰與奶茶系選項簡單直接，適合需要快速決策的辦公室團單。",
    picks: ["老爹紅茶", "老爹鮮奶茶", "冬瓜檸檬"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E7%B4%85%E8%8C%B6%E8%80%81%E7%88%B9-%E6%A5%A0%E6%A2%93%E5%BE%8C%E5%8B%81%E5%BA%97/BtvvkaUYWKqgEBcbOe4YYA",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "ching-shin-qingfeng",
    name: "清心福全 楠梓清豐店",
    area: "清豐二路",
    address: "高雄市楠梓區清豐二路78號",
    rating: 4.9,
    reviews: "130+",
    budget: 70,
    eta: "約 20-40 分",
    mood: ["budget", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#168b80",
    summary: "清豐一帶的清心候選，適合 K10 想找近一點又穩定的基本款。",
    picks: ["優多綠茶", "烏龍綠茶", "鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%B8%85%E5%BF%83%E7%A6%8F%E5%85%A8-%E6%A5%A0%E6%A2%93%E6%B8%85%E8%B1%90%E5%BA%97/4XaYo57HR5GcjRiFWwRwIg",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "milksha-dexian",
    name: "迷客夏 高雄德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路145-2號",
    rating: 4.9,
    reviews: "700+",
    budget: 95,
    eta: "約 25-45 分",
    mood: ["milk", "tea", "sweet", "group"],
    caffeine: true,
    group: true,
    color: "#2c9c86",
    summary: "鮮奶茶和拿鐵系強項，適合想喝奶味清楚一點的下午。",
    picks: ["珍珠紅茶拿鐵", "伯爵紅茶拿鐵", "綠光牧場鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%BF%B7%E5%AE%A2%E5%A4%8Fmilksha-%E9%AB%98%E9%9B%84%E5%BE%B7%E8%B3%A2%E5%BA%97/iZvTQ9pJQ5OcXo7CYT3MpA",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "chahai-dexian",
    name: "茶海 CHA Hi 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路261號",
    rating: 4.9,
    reviews: "50+",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["tea", "fruit", "new"],
    caffeine: true,
    group: false,
    color: "#3676a8",
    summary: "德賢路上的換口味候選，水果茶和茶飲都能顧到。",
    picks: ["鮮萃茶", "水果茶", "鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%8C%B6%E6%B5%B7cha-hi-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/W8VYgWhQWOS50fJRRF1irA",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "drinkstore-qingfeng",
    name: "飲料店 楠梓清豐店",
    area: "清豐二路",
    address: "高雄市楠梓區清豐二路",
    rating: 4.8,
    reviews: "21+",
    budget: 75,
    eta: "約 20-40 分",
    mood: ["new", "tea", "refreshing"],
    caffeine: true,
    group: false,
    color: "#5d8fba",
    summary: "名字很直白的清豐候選，適合想探索附近小店時抽。",
    picks: ["招牌茶飲", "鮮奶茶", "水果茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E9%A3%B2%E6%96%99%E5%BA%97-%E6%A5%A0%E6%A2%93%E6%B8%85%E8%B1%90%E5%BA%97/HRWGyf8YU6WYxMnRXFpz-w",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "teatop-dexian",
    name: "TEA TOP 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路220巷",
    rating: 4.8,
    reviews: "500+",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "group"],
    caffeine: true,
    group: true,
    color: "#7b6b40",
    summary: "高山茶、奶茶和冬瓜系都有，團訂時容易找到大家都能接受的杯。",
    picks: ["高山青茶", "珍珠奶茶", "冬瓜青茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/p0uo/tea-top-nan-zi-de-xian-dian",
    },
    source: "Foodpanda 公開頁面",
  },
  {
    id: "teajohnny-dexian",
    name: "茶約翰手搖飲品 高雄楠梓店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.8,
    reviews: "100+",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["new", "tea", "fruit"],
    caffeine: true,
    group: false,
    color: "#536c9f",
    summary: "德賢路上偏探索型的手搖候選，適合想換一間沒喝過的時候。",
    picks: ["招牌茶飲", "水果茶", "奶蓋茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/q72c/cha-yue-han-shou-yao-yin-pin-gao-xiong-nan-zi-dian",
    },
    source: "Foodpanda 公開頁面",
  },
  {
    id: "firsttea-houchang",
    name: "先喝道 楠梓後昌店",
    area: "後昌路",
    address: "高雄市楠梓區後昌路760號",
    rating: 4.9,
    reviews: "240+",
    budget: 90,
    eta: "約 35-55 分",
    mood: ["tea", "milk", "new", "group"],
    caffeine: true,
    group: true,
    color: "#4d7b6d",
    summary: "茶感路線更明顯，想喝不那麼甜的茶拿鐵可以列入遠一點的候選。",
    picks: ["英式水果茶", "伯爵茶拿鐵", "蜜桃風味茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%85%88%E5%96%9D%E9%81%93-%E6%A5%A0%E6%A2%93%E5%BE%8C%E6%98%8C%E5%BA%97/5pJxZlpRUh2E6Wp6X7UpAQ",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "dancing-charm-houchang",
    name: "舞動魅力 楠梓後昌店",
    area: "後昌路",
    address: "高雄市楠梓區後昌路",
    rating: 4.8,
    reviews: "100+",
    budget: 85,
    eta: "約 35-55 分",
    mood: ["milk", "sweet", "new"],
    caffeine: true,
    group: false,
    color: "#a64b75",
    summary: "甜點感飲品和奶類較多，適合夜班或想喝甜一點的時候。",
    picks: ["鮮奶茶", "奶蓋茶", "水果茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E8%88%9E%E5%8B%95%E9%AD%85%E5%8A%9B-%E6%A5%A0%E6%A2%93%E5%BE%8C%E6%98%8C%E5%BA%97/mxX3-f-aQZaLgCOWmf42_A",
    },
    source: "Uber Eats 公開頁面",
  },
  {
    id: "naptea-lantian",
    name: "再睡5分鐘 楠梓藍田店",
    area: "藍田路",
    address: "高雄市楠梓區藍田路",
    rating: 4.9,
    reviews: "1000+",
    budget: 100,
    eta: "約 40-60 分",
    mood: ["milk", "sweet", "new"],
    caffeine: true,
    group: true,
    color: "#7d6fd0",
    summary: "奶蓋、歐蕾和黑糖珍珠系是主打，想喝甜感鮮奶茶時很適合。",
    picks: ["棉被午茉綠", "黑糖珍珠好濃鮮奶", "日安紅珍珠歐蕾"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/vqo2/zai-shui-5fen-zhong-nan-zi-lan-tian-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%86%8D%E7%9D%A15%E5%88%86%E9%90%98-%E6%A5%A0%E6%A2%93%E8%97%8D%E7%94%B0%E5%BA%97/fPKhennlV-KwXVVLoEKwZA",
    },
    promotion: {
      label: "Foodpanda 免費外送線索",
      detail: "平台頁曾出現外送優惠線索，實際資格需以下單時顯示為準。",
      items: ["外送優惠線索", "依平台 App 即時狀態確認"],
      url: "https://www.foodpanda.com.tw/restaurant/vqo2/zai-shui-5fen-zhong-nan-zi-lan-tian-dian",
      verified: DATA_VERSION,
    },
    source: "K10 使用者實測回報 / Foodpanda 與 Uber Eats 外送頁",
  },
  {
    id: "dont-yell-nanzi",
    name: "不要對我尖叫 高雄楠梓店",
    area: "大學二十街",
    address: "高雄市楠梓區大學二十街11號",
    rating: 5,
    reviews: "500+",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["fruit", "tea", "milk", "new", "group"],
    caffeine: true,
    group: true,
    color: "#d35c74",
    summary: "氣泡飲、歐蕾和花草茶品項很有辨識度，想喝清爽或換口味都適合。",
    picks: ["伯爵紅茶歐蕾", "冬瓜菊花茶", "香柚檸檬氣泡飲"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/chain/cr8ax/bu-yao-dui-wo-jian-jiao",
    },
    promotion: {
      label: "Foodpanda 15% 優惠",
      detail: "Foodpanda 公開頁面列出所有項目 15% 優惠自動套用，另有胖達幣回饋門檻。",
      items: ["所有項目 15% 優惠", "冬瓜菊花茶 $47 起，原 $55", "伯爵紅茶歐蕾 $60 起，原 $70"],
      url: "https://www.foodpanda.com.tw/chain/cr8ax/bu-yao-dui-wo-jian-jiao",
      verified: DATA_VERSION,
    },
    source: "K10 使用者實測回報 / Foodpanda 公開頁面",
  },
  {
    id: "mrwish-jiachang",
    name: "Mr. Wish 希望好茶 楠梓加昌店",
    area: "加昌路",
    address: "高雄市楠梓區加昌路",
    rating: 4.9,
    reviews: "待補",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["fruit", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#4d9b74",
    summary: "水果茶與鮮果系選項多，適合熱天或團訂想要清爽路線。",
    picks: ["鮮果茶", "熟成紅茶", "鮮奶茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/xfo1/mr-wish-xi-wang-hao-cha-nan-zi-jia-chang-dian",
    },
    source: "Foodpanda 外送頁 / 使用者提供",
  },
  {
    id: "kebuke-dexian",
    name: "可不可熟成紅茶 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.9,
    reviews: "待補",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "budget", "group"],
    caffeine: true,
    group: true,
    color: "#8f3f2e",
    summary: "紅茶與熟成茶系的穩定選項，適合想喝茶感明確的下午。",
    picks: ["熟成紅茶", "白玉歐蕾", "胭脂紅茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/kvmx/ke-bu-ke-shou-cheng-cha-xing-nan-zi-de-xian-dian",
    },
    source: "Foodpanda 外送頁 / 使用者提供",
  },
  {
    id: "hechalou-dexian",
    name: "鶴茶樓 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.9,
    reviews: "待補",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "new", "group"],
    caffeine: true,
    group: true,
    color: "#355f78",
    summary: "鶴頂紅茶與奶茶系主打，德賢路上適合團訂的茶飲候選。",
    picks: ["鶴頂紅茶", "綺夢那堤", "舶來那堤"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/y01w/he-cha-lou-nan-zi-de-xian-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E9%B6%B4%E8%8C%B6%E6%A8%93-%E9%B6%B4%E9%A0%82%E7%B4%85%E8%8C%B6%E5%95%86%E5%BA%97-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/J8Moyx1ZVaybW0P96ExURA",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "donutes-dexian",
    name: "多那之咖啡 高雄德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.8,
    reviews: "待補",
    budget: 100,
    eta: "約 25-45 分",
    mood: ["milk", "sweet", "new", "group"],
    caffeine: true,
    group: true,
    color: "#9a5d3a",
    summary: "咖啡、茶飲和點心一起解決的選項，適合下午茶團單。",
    picks: ["拿鐵", "鮮奶茶", "冰沙飲品"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/tosa/duo-na-zhi-gao-xiong-de-xian-men-shi",
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%A4%9A%E9%82%A3%E4%B9%8B%E5%92%96%E5%95%A1donutes-%E9%AB%98%E9%9B%84%E5%BE%B7%E8%B3%A2%E5%BA%97/JmeETMi-UsiCX5vGQQQtSg",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "songben-haizhuan",
    name: "松本鮮奶茶 楠梓海專店",
    area: "海專路",
    address: "高雄市楠梓區海專路",
    rating: 4.8,
    reviews: "待補",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["milk", "tea", "sweet"],
    caffeine: true,
    group: false,
    color: "#6f5a44",
    summary: "鮮奶茶系主打，想喝奶味更明顯時可以列入候選。",
    picks: ["招牌鮮奶茶", "黑糖鮮奶", "紅茶鮮奶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%9D%BE%E6%9C%AC%E9%AE%AE%E5%A5%B6%E8%8C%B6-%E6%A5%A0%E6%A2%93%E6%B5%B7%E5%B0%88%E5%BA%97/4BO5x5A3WLaweMH6_B_p2w",
    },
    source: "Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "letea-shoufeng",
    name: "樂台羽茶 楠梓壽豐店",
    area: "壽豐路",
    address: "高雄市楠梓區壽豐路",
    rating: 4.9,
    reviews: "待補",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["tea", "fruit", "new", "group"],
    caffeine: true,
    group: true,
    color: "#4f8f8f",
    summary: "壽豐路上的茶飲候選，適合想換口味或水果茶路線。",
    picks: ["招牌茶飲", "水果茶", "鮮奶茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/jpwi/le-tai-yu-cha-nan-zi-shou-feng-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E6%A8%82%E5%8F%B0%E7%BE%BD%E8%8C%B6-%E6%A5%A0%E6%A2%93%E5%A3%BD%E8%B1%90%E5%BA%97/-rlanli-W62ixyXtuQYZ1w",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "qingtea-studio",
    name: "小公煮 青茶製造室",
    area: "楠梓",
    address: "高雄市楠梓區",
    rating: 4.9,
    reviews: "待補",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["tea", "refreshing", "new"],
    caffeine: true,
    group: false,
    color: "#4b8a62",
    summary: "青茶與清爽茶飲候選，適合想探索小店時抽。",
    picks: ["青茶", "奶茶", "水果茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/cjts/xiao-gong-zhu-qing-cha-zhi-zao-shi",
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%B0%8F%E5%85%AC%E7%85%AE-%E9%9D%92%E8%8C%B6%E8%A3%BD%E9%80%A0%E5%AE%A4/q_Ny8VgDUcibW8lmKveAcA",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "dezheng-dexian",
    name: "得正 楠梓德賢計劃",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.9,
    reviews: "待補",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "group"],
    caffeine: true,
    group: true,
    color: "#314f8f",
    summary: "烏龍茶專門路線，適合想喝茶感和烏龍拿鐵的人。",
    picks: ["春烏龍", "焙烏龍鮮奶", "芝士奶蓋茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/jfu8/de-zheng-oolong-tea-project-nan-zi-de-xian-ji-hua",
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%BE%97%E6%AD%A3-oolong-tea-project-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E8%A8%88%E5%8A%83/9dZaJgggXWCLkGREufEU0g",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "islandtea",
    name: "小島嶼茶",
    area: "K10 可外送",
    address: "高雄市楠梓區",
    rating: 4.8,
    reviews: "待補",
    budget: 90,
    eta: "請查平台",
    mood: ["tea", "fruit", "new"],
    caffeine: true,
    group: false,
    color: "#3c8a9b",
    summary: "小店風格的茶飲候選，適合想試試非連鎖品牌的下午。",
    picks: ["招牌茶飲", "水果茶", "鮮奶茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E5%B0%8F%E5%B3%B6%E5%B6%BC%E8%8C%B6/yb1W9DCFU2y32bIv2xs1fg",
    },
    source: "Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "yimuri-shoufeng",
    name: "一沐日 高雄壽豐店",
    area: "壽豐路",
    address: "高雄市楠梓區壽豐路",
    rating: 4.9,
    reviews: "待補",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "fruit", "group"],
    caffeine: true,
    group: true,
    color: "#507845",
    summary: "招牌粉粿和茶飲都有記憶點，適合團訂想換一間熱門品牌。",
    picks: ["粉粿桂花檸檬", "逮丸奶茶", "招牌紅茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E4%B8%80%E6%B2%90%E6%97%A5%E9%AB%98%E9%9B%84%E5%A3%BD%E8%B1%90%E5%BA%97/yIImEwa3Qbyz8uHDDWhEpw",
    },
    source: "Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "marchmu-dexian",
    name: "三月沐現泡茶飲 德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.8,
    reviews: "待補",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["tea", "fruit", "new"],
    caffeine: true,
    group: false,
    color: "#7c9b49",
    summary: "現泡茶飲候選，適合想要茶味和小店感的選擇。",
    picks: ["現泡茶", "鮮奶茶", "水果茶"],
    platforms: {
      ubereats:
        "https://www.ubereats.com/tw/store/%E4%B8%89%E6%9C%88%E6%B2%90%E7%8F%BE%E6%B3%A1%E8%8C%B6%E9%A3%B2-%E5%BE%B7%E8%B3%A2%E5%BA%97/vkOnnYg2Ugei3_CwpRuPpw",
    },
    source: "Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "xinge-tea",
    name: "鑫閣茶業 楠梓總店",
    area: "楠梓",
    address: "高雄市楠梓區",
    rating: 4.9,
    reviews: "待補",
    budget: 80,
    eta: "約 25-45 分",
    mood: ["tea", "refreshing", "new"],
    caffeine: true,
    group: false,
    color: "#465f3d",
    summary: "楠梓在地茶飲候選，招牌茶飲與鮮奶茶都適合日常點單。",
    picks: ["招牌茶飲", "鮮奶茶", "冬瓜茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/frqt/xin-ge-cha-ye-nan-zi-zong-dian",
      ubereats:
        "https://www.ubereats.com/tw/store/%E9%91%AB%E9%96%A3%E8%8C%B6%E6%A5%AD-%E6%A5%A0%E6%A2%93%E7%B8%BD%E5%BA%97/z_Q5KejNWD6QMokfwftjrQ",
    },
    source: "Foodpanda / Uber Eats 外送頁 / 使用者提供",
  },
  {
    id: "wootea-dexian",
    name: "伍桐號 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路",
    rating: 4.9,
    reviews: "待補",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "fruit", "group"],
    caffeine: true,
    group: true,
    color: "#7f6347",
    summary: "茶凍、奶茶和水果茶都適合團訂，德賢路熱門品牌候選。",
    picks: ["杏仁凍五桐茶", "老實人鮮奶茶", "荔枝冰茶凍飲"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/zk9s/wu-tong-hao-wootea-nan-zi-de-xian-dian",
    },
    source: "Foodpanda 外送頁 / 使用者提供",
  },
  {
    id: "toptiertea-nanzi",
    name: "特好喝 TOPTIERTEA 高雄楠梓店",
    area: "楠梓",
    address: "高雄市楠梓區",
    rating: 4.8,
    reviews: "待補",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["tea", "milk", "new"],
    caffeine: true,
    group: false,
    color: "#536b8f",
    summary: "楠梓區茶飲候選，招牌茶飲、鮮奶茶和水果茶都有。",
    picks: ["招牌茶飲", "鮮奶茶", "水果茶"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/di3c/te-hao-he-toptiertea-gao-xiong-nan-zi-dian",
    },
    source: "Foodpanda 外送頁 / 使用者提供",
  },
  {
    id: "tongfengtang-nanzi",
    name: "桐封堂 楠梓店",
    area: "加昌路",
    address: "高雄市楠梓區加昌路83號",
    rating: 4.8,
    reviews: "新店待累積",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["new", "tea", "milk", "sweet", "group"],
    caffeine: true,
    group: true,
    color: "#9a573d",
    summary: "2026 年 3 月開幕的新中式茶飲店，也有鍋燒麵；想試超大杯茶飲或奶茶可選它。",
    picks: ["招牌珍珠奶茶", "原茶系列", "鮮奶茶"],
    platforms: {
      ubereats: "https://www.ubereats.com/tw/store/%E6%A1%90%E5%B0%81%E5%A0%82-%E6%A5%A0%E6%A2%93%E5%BA%97/hMx8-Q8dV9CCUhrn5psKDA",
    },
    source: "品牌開幕公告 / Uber Eats 外送頁",
    newArrival: true,
    openedAt: "2026-03-20",
  },
  {
    id: "muchatea-nanzi",
    name: "莯茶 高雄楠梓店",
    area: "德民路",
    address: "高雄市楠梓區德民路1008之2號",
    rating: 4.8,
    reviews: "新店待累積",
    budget: 95,
    eta: "約 30-50 分",
    mood: ["new", "fruit", "tea", "milk"],
    caffeine: true,
    group: false,
    color: "#7b9461",
    summary: "2025 年底加入楠梓的特色茶飲，水果特調、雪泡與蜜香紅烏龍適合換口味。",
    picks: ["桃樂檬檬", "水蜜桃鮮奶", "蜜香紅烏龍"],
    platforms: {
      ubereats: "https://www.ubereats.com/tw/store/%E8%8E%AF%E8%8C%B6-%E9%AB%98%E9%9B%84%E6%A5%A0%E6%A2%93%E5%BA%97/iItyXo56WLaDU_mPCtVpOA",
    },
    source: "店家公開資訊 / Uber Eats 外送頁",
    newArrival: true,
    openedAt: "2025-10-03",
  },
  {
    id: "magu-dexian",
    name: "麻古茶坊 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路249號",
    rating: 4.8,
    reviews: "待補",
    budget: 85,
    eta: "約 25-45 分",
    mood: ["fruit", "tea", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#df713d",
    summary: "補回 2025 年開幕的德賢路分店，果粒茶、芝芝系列與紅茶拿鐵都適合團訂。",
    picks: ["翡翠柳橙", "芝芝葡萄果粒", "波霸紅茶拿鐵"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/arij/ma-gu-cha-fang-nan-zi-de-xian-dian",
      ubereats: "https://www.ubereats.com/tw/store/%E9%BA%BB%E5%8F%A4%E8%8C%B6%E5%9D%8Amacu-tea-%E5%BE%B7%E8%B3%A2%E5%BA%97/HsC9i1jGXCaVji69luyTMw",
    },
    source: "品牌開幕公告 / Foodpanda 與 Uber Eats 外送頁",
  },
  {
    id: "nanafru-huixin",
    name: "nanafru 娜娜福 楠梓惠心店",
    area: "惠心街",
    address: "高雄市楠梓區惠心街96號",
    rating: 4.8,
    reviews: "待補",
    budget: 100,
    eta: "約 20-40 分",
    mood: ["new", "fruit", "refreshing", "sweet"],
    caffeine: false,
    group: false,
    color: "#d8667f",
    summary: "果昔優格與手作茶飲為主，想喝水果、優格或避開茶類咖啡因時多一個選擇。",
    picks: ["果昔優格", "水果冰沙", "手作茶飲"],
    platforms: {
      foodpanda: "https://www.foodpanda.com.tw/restaurant/hq0m/nanafru-nan-zi-hui-xin-dian",
      ubereats: "https://www.ubereats.com/tw/store/nanafru-%E6%A5%A0%E6%A2%93%E6%83%A0%E5%BF%83%E5%BA%97/GXrGQmqRXJK5rzTjJP6X7w",
    },
    source: "品牌開幕公告 / Foodpanda 與 Uber Eats 外送頁",
  },
  {
    id: "peaktea-dexian",
    name: "青山 青茶專業製作 楠梓德賢店",
    area: "德賢路",
    address: "高雄市楠梓區德賢路202號",
    rating: 4.8,
    reviews: "新店待累積",
    budget: 90,
    eta: "約 25-45 分",
    mood: ["new", "tea", "milk", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#315b50",
    summary: "2026 年 5 月開幕的青茶專門店，原葉青茶、玄米茶與茶拿鐵適合偏好清爽茶感的人。",
    picks: ["冬青", "桂花玄米茶", "天蟬那堤"],
    platforms: {
      ubereats: "https://www.ubereats.com/tw/store/%E9%9D%92%E5%B1%B1-%E9%9D%92%E8%8C%B6%E5%B0%88%E6%A5%AD%E8%A3%BD%E4%BD%9C-%E6%A5%A0%E6%A2%93%E5%BE%B7%E8%B3%A2%E5%BA%97/DJGIrJmGWWqYy63vYRYavQ",
    },
    mapUrl: "https://maps.app.goo.gl/Qw18fefSvCzKSyxA7",
    source: "品牌開幕公告 / Uber Eats 外送頁 / 使用者提供",
    newArrival: true,
    openedAt: "2026-05-23",
  },
  {
    id: "dawow-dexian",
    name: "大王茶迷 楠梓店｜沁心",
    area: "德賢路",
    address: "高雄市楠梓區德賢路196號",
    rating: 4.8,
    reviews: "新店待累積",
    budget: 90,
    eta: "約 20-40 分",
    mood: ["new", "tea", "fruit", "refreshing", "group"],
    caffeine: true,
    group: true,
    color: "#8b2433",
    summary: "2026 年 7 月開幕，主打台灣原葉烏龍、檸檬汁與水果茶，可從 Uber Eats 或官方頁面線上點餐。",
    picks: ["大王靜焙烏龍", "霍頓莊園水果茶", "大王檸檬汁"],
    platforms: {
      ubereats: "https://www.ubereats.com/tw/store/%E5%A4%A7%E7%8E%8B%E8%8C%B6%E8%BF%B7%E4%B8%A8%E5%8E%9F%E8%91%89%E7%83%8F%E9%BE%8D%E6%AA%B8%E6%AA%AC%E8%8C%B6-%E6%A5%A0%E6%A2%93%E5%BA%97/iMtZS6KFWRus75biBhALLA",
      nidin: "https://order.nidin.shop/brand/dawowbrand",
    },
    mapUrl: "https://maps.app.goo.gl/SYFR6wCGjrryB1qU8",
    source: "Uber Eats 外送頁 / 品牌門市資訊 / 官方線上點餐 / 使用者提供",
    newArrival: true,
    openedAt: "2026-07-18",
  },
];

const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];

const WEEKDAYS = [1, 2, 3, 4, 5];

const WEEKENDS = [0, 6];

const OPENING_CHECK_BUFFER_MINUTES = 20;

const CLOSING_CHECK_BUFFER_MINUTES = 15;

const REFERENCE_HOURS_STORE_IDS = new Set([
  "mrwish-jiachang",
  "kebuke-dexian",
  "hechalou-dexian",
  "donutes-dexian",
  "songben-haizhuan",
  "letea-shoufeng",
  "qingtea-studio",
  "dezheng-dexian",
  "islandtea",
  "yimuri-shoufeng",
  "marchmu-dexian",
  "xinge-tea",
  "wootea-dexian",
  "toptiertea-nanzi",
]);

const operatingInfo = {
  "magu-innovation": {
    hoursLabel: "每日 09:00-21:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "21:00" }],
  },
  "chatanghui-nanzi": {
    hoursLabel: "每日 09:15-21:45",
    hours: [{ days: ALL_DAYS, open: "09:15", close: "21:45" }],
  },
  "waterlane-nanzi": {
    hoursLabel: "每日 09:00-21:30",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "21:30" }],
  },
  "sugarcane-mom": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "unocha-tuku": {
    hoursLabel: "每日 09:00-21:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "21:00" }],
  },
  "ninetea-dexian": {
    hoursLabel: "每日 09:30-21:45",
    hours: [{ days: ALL_DAYS, open: "09:30", close: "21:45" }],
  },
  "ching-shin-dexian": {
    hoursLabel: "每日 09:00-22:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "22:00" }],
  },
  "sugarstand-dexian": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "coco-dexian": {
    hoursLabel: "平日 09:30-20:45；週末 10:00-20:45",
    hours: [
      { days: WEEKDAYS, open: "09:30", close: "20:45" },
      { days: WEEKENDS, open: "10:00", close: "20:45" },
    ],
  },
  "zhenzhudan-dexian": {
    hoursLabel: "平日 09:00-20:30；週末 10:00-20:30",
    hours: [
      { days: WEEKDAYS, open: "09:00", close: "20:30" },
      { days: WEEKENDS, open: "10:00", close: "20:30" },
    ],
  },
  "mumu-nanzi": {
    hoursLabel: "每日 10:00-21:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:00" }],
  },
  "xiaoya-dexian": {
    hoursLabel: "每日 10:30-22:00",
    hours: [{ days: ALL_DAYS, open: "10:30", close: "22:00" }],
  },
  "fiftylan-lequn": {
    hoursLabel: "每日 09:00-23:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "23:00" }],
  },
  "laolai-nanzi-station": {
    hoursLabel: "每日 10:00-21:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:00" }],
  },
  "tea-manager-nanzi": {
    hoursLabel: "每日 00:00-24:00",
    hours: [{ days: ALL_DAYS, open: "00:00", close: "24:00" }],
  },
  "blacktea-dad-nanzi": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "ching-shin-qingfeng": {
    hoursLabel: "每日 09:00-22:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "22:00" }],
  },
  "milksha-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "chahai-dexian": {
    hoursLabel: "每日 09:00-21:30",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "21:30" }],
  },
  "drinkstore-qingfeng": {
    hoursLabel: "每日 10:00-21:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:00" }],
  },
  "teatop-dexian": {
    hoursLabel: "每日 09:30-21:30",
    hours: [{ days: ALL_DAYS, open: "09:30", close: "21:30" }],
  },
  "teajohnny-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "firsttea-houchang": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "dancing-charm-houchang": {
    hoursLabel: "每日 00:00-24:00",
    hours: [{ days: ALL_DAYS, open: "00:00", close: "24:00" }],
  },
  "naptea-lantian": {
    hoursLabel: "每日 10:30-21:00",
    hours: [{ days: ALL_DAYS, open: "10:30", close: "21:00" }],
  },
  "dont-yell-nanzi": {
    hoursLabel: "每日 10:00-20:45",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "20:45" }],
  },
  "mrwish-jiachang": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "kebuke-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "hechalou-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "donutes-dexian": {
    hoursLabel: "每日 07:00-22:00",
    hours: [{ days: ALL_DAYS, open: "07:00", close: "22:00" }],
  },
  "songben-haizhuan": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "letea-shoufeng": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "qingtea-studio": {
    hoursLabel: "每日 10:00-21:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:00" }],
  },
  "dezheng-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "islandtea": {
    hoursLabel: "每日 10:00-21:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:00" }],
  },
  "yimuri-shoufeng": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "marchmu-dexian": {
    hoursLabel: "每日 09:30-21:30",
    hours: [{ days: ALL_DAYS, open: "09:30", close: "21:30" }],
  },
  "xinge-tea": {
    hoursLabel: "每日 09:00-22:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "22:00" }],
  },
  "wootea-dexian": {
    hoursLabel: "每日 10:00-21:30",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "21:30" }],
  },
  "toptiertea-nanzi": {
    hoursLabel: "每日 10:00-22:00",
    hours: [{ days: ALL_DAYS, open: "10:00", close: "22:00" }],
  },
  "muchatea-nanzi": {
    hoursLabel: "每日 09:30-21:30（售完為止）",
    hours: [{ days: ALL_DAYS, open: "09:30", close: "21:30" }],
  },
  "dawow-dexian": {
    hoursLabel: "每日 09:00-21:00",
    hours: [{ days: ALL_DAYS, open: "09:00", close: "21:00" }],
  },
};

const STORE_OVERRIDE_KEY = "k10StoresOverride";

const builtInStores = cloneStores(stores);

initializeStoreData();

const DELIVERY_PAGE_PATTERNS = [
  "foodpanda.com.tw/restaurant/",
  "foodpanda.com.tw/chain/",
  "ubereats.com/tw/store/",
  "order.nidin.shop/brand/",
  "order.nidin.shop/menu/",
];

const state = {
  mood: "refreshing",
  budget: 120,
  platforms: new Set(["foodpanda", "ubereats"]),
  groupOnly: false,
  noCaffeine: false,
  openOnly: false,
  promoOnly: false,
  newOnly: false,
  search: "",
  sort: "recommended",
  current: null,
  favorites: new Set(JSON.parse(localStorage.getItem("k10Favorites") || "[]")),
  history: JSON.parse(localStorage.getItem("k10History") || "[]"),
};

const els = {
  moodChips: document.querySelector("#moodChips"),
  budgetRange: document.querySelector("#budgetRange"),
  budgetValue: document.querySelector("#budgetValue"),
  groupToggle: document.querySelector("#groupToggle"),
  noCaffeineToggle: document.querySelector("#noCaffeineToggle"),
  openToggle: document.querySelector("#openToggle"),
  promoToggle: document.querySelector("#promoToggle"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  newOnlyButton: document.querySelector("#newOnlyButton"),
  resetFiltersButton: document.querySelector("#resetFiltersButton"),
  resultSummary: document.querySelector("#resultSummary"),
  newArrivalGrid: document.querySelector("#newArrivalGrid"),
  newArrivalsTitle: document.querySelector("#newArrivalsTitle"),
  storeGrid: document.querySelector("#storeGrid"),
  recommendationCard: document.querySelector("#recommendationCard"),
  drawButton: document.querySelector("#drawButton"),
  savePickButton: document.querySelector("#savePickButton"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  historyList: document.querySelector("#historyList"),
  storeCount: document.querySelector("#storeCount"),
  dualPlatformCount: document.querySelector("#dualPlatformCount"),
  promoCount: document.querySelector("#promoCount"),
  openNowCount: document.querySelector("#openNowCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  lastUpdated: document.querySelector("#lastUpdated"),
  todayLabel: document.querySelector("#todayLabel"),
  sourceLinks: document.querySelector("#sourceLinks"),
  storeReportForm: document.querySelector("#storeReportForm"),
  reportStoreName: document.querySelector("#reportStoreName"),
  reportType: document.querySelector("#reportType"),
  reportNote: document.querySelector("#reportNote"),
  exportDataButton: document.querySelector("#exportDataButton"),
  resetDataButton: document.querySelector("#resetDataButton"),
  storeJsonInput: document.querySelector("#storeJsonInput"),
  importDataButton: document.querySelector("#importDataButton"),
  dataMessage: document.querySelector("#dataMessage"),
  themeToggle: document.querySelector("#themeToggle"),
};

const template = document.querySelector("#storeCardTemplate");

function init() {
  const savedTheme = localStorage.getItem("k10Theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  els.todayLabel.textContent = new Intl.DateTimeFormat("zh-TW", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  }).format(new Date());
  els.lastUpdated.textContent = DATA_VERSION.slice(5).replace("-", "/");

  renderMoodChips();
  bindEvents();
  state.current = pickStore(true);
  renderAll();
}

function renderMoodChips() {
  els.moodChips.innerHTML = "";
  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.dataset.mood = mood.id;
    button.style.setProperty("--tag-color", mood.color);
    button.textContent = mood.label;
    if (state.mood === mood.id) {
      button.classList.add("active");
    }
    els.moodChips.append(button);
  });
}

function bindEvents() {
  els.moodChips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mood]");
    if (!button) return;
    state.mood = button.dataset.mood;
    state.current = pickStore(false);
    renderAll();
  });

  els.budgetRange.addEventListener("input", () => {
    state.budget = Number(els.budgetRange.value);
    state.current = pickStore(false);
    renderAll();
  });

  document.querySelectorAll("input[name='platform']").forEach((input) => {
    input.addEventListener("change", () => {
      const selected = [...document.querySelectorAll("input[name='platform']:checked")].map((item) => item.value);
      state.platforms = new Set(selected.length ? selected : ["foodpanda", "ubereats"]);
      if (!selected.length) {
        document.querySelectorAll("input[name='platform']").forEach((item) => {
          item.checked = true;
        });
      }
      state.current = pickStore(false);
      renderAll();
    });
  });

  els.groupToggle.addEventListener("change", () => {
    state.groupOnly = els.groupToggle.checked;
    state.current = pickStore(false);
    renderAll();
  });

  els.noCaffeineToggle.addEventListener("change", () => {
    state.noCaffeine = els.noCaffeineToggle.checked;
    state.current = pickStore(false);
    renderAll();
  });

  els.openToggle.addEventListener("change", () => {
    state.openOnly = els.openToggle.checked;
    state.current = pickStore(false);
    renderAll();
  });

  els.promoToggle.addEventListener("change", () => {
    state.promoOnly = els.promoToggle.checked;
    state.current = pickStore(false);
    renderAll();
  });

  els.searchInput.addEventListener("input", () => {
    state.search = els.searchInput.value.trim().toLowerCase();
    renderStores();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    renderStores();
  });

  els.newOnlyButton.addEventListener("click", () => {
    state.newOnly = !state.newOnly;
    els.newOnlyButton.setAttribute("aria-pressed", String(state.newOnly));
    state.current = pickStore(false);
    renderRecommendation();
    renderStores();
  });

  els.resetFiltersButton.addEventListener("click", resetFilters);

  els.drawButton.addEventListener("click", () => {
    state.current = pickStore(false, true);
    renderAll();
  });

  els.savePickButton.addEventListener("click", () => {
    if (!state.current) return;
    const item = {
      id: state.current.id,
      name: state.current.name,
      pick: state.current.picks[0],
      time: new Date().toISOString(),
    };
    state.history = [item, ...state.history.filter((entry) => entry.id !== item.id)].slice(0, 8);
    localStorage.setItem("k10History", JSON.stringify(state.history));
    renderHistory();
  });

  els.clearHistoryButton.addEventListener("click", () => {
    state.history = [];
    localStorage.removeItem("k10History");
    renderHistory();
  });

  els.themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("k10Theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  els.storeReportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    openStoreReport();
  });

  els.exportDataButton.addEventListener("click", exportStoreData);

  els.importDataButton.addEventListener("click", importStoreData);

  els.resetDataButton.addEventListener("click", resetStoreData);
}

function initializeStoreData() {
  const override = readStoreOverride();
  stores = override || cloneStores(builtInStores);
  applyOperatingInfo(stores);
}

function applyOperatingInfo(storeList) {
  storeList.forEach((store) => {
    Object.assign(store, operatingInfo[store.id] || {});
    if (!store.hoursConfidence && REFERENCE_HOURS_STORE_IDS.has(store.id)) {
      store.hoursConfidence = "reference";
    }
  });
}

function readStoreOverride() {
  try {
    const raw = localStorage.getItem(STORE_OVERRIDE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return normalizeStoreList(parsed);
  } catch {
    localStorage.removeItem(STORE_OVERRIDE_KEY);
    return null;
  }
}

function normalizeStoreList(value) {
  if (!Array.isArray(value)) {
    throw new Error("店家 JSON 必須是陣列");
  }

  return value.map((store) => ({
    id: store.id || slugify(store.name || `store-${Date.now()}`),
    name: store.name || "未命名店家",
    area: store.area || "未分類",
    address: store.address || "地址待補",
    rating: Number(store.rating || 4.8),
    reviews: store.reviews || "待補",
    budget: Number(store.budget || 80),
    eta: store.eta || "請查平台",
    mood: Array.isArray(store.mood) ? store.mood : ["new"],
    caffeine: Boolean(store.caffeine),
    group: Boolean(store.group),
    color: store.color || "#2e6bb5",
    summary: store.summary || "資料由本機匯入，請下單前確認平台狀態。",
    picks: Array.isArray(store.picks) && store.picks.length ? store.picks : ["招牌飲品"],
    platforms: store.platforms && typeof store.platforms === "object" ? store.platforms : {},
    promotion: store.promotion || null,
    source: store.source || "本機匯入",
    hoursLabel: store.hoursLabel,
    hours: Array.isArray(store.hours) ? store.hours : undefined,
    hoursConfidence: store.hoursConfidence,
    newArrival: Boolean(store.newArrival),
    openedAt: store.openedAt,
    mapUrl: store.mapUrl,
  }));
}

function resetFilters() {
  state.mood = "refreshing";
  state.budget = 120;
  state.platforms = new Set(["foodpanda", "ubereats"]);
  state.groupOnly = false;
  state.noCaffeine = false;
  state.openOnly = false;
  state.promoOnly = false;
  state.newOnly = false;
  state.search = "";
  state.sort = "recommended";
  els.budgetRange.value = "120";
  els.searchInput.value = "";
  els.sortSelect.value = "recommended";
  els.newOnlyButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll("input[name='platform']").forEach((input) => {
    input.checked = true;
  });
  [els.groupToggle, els.noCaffeineToggle, els.openToggle, els.promoToggle].forEach((input) => {
    input.checked = false;
  });
  state.current = pickStore(false);
  renderAll();
}

function exportStoreData() {
  const data = JSON.stringify(stores, null, 2);
  els.storeJsonInput.value = data;
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `k10-drink-stores-${dateKey()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setDataMessage("已匯出目前店家 JSON");
}

function importStoreData() {
  try {
    const imported = normalizeStoreList(JSON.parse(els.storeJsonInput.value));
    const invalid = imported.filter((store) => !hasDirectDeliveryLink(store));
    if (invalid.length) {
      throw new Error(`有 ${invalid.length} 間缺少直接外送或官方線上點餐頁，未套用`);
    }
    localStorage.setItem(STORE_OVERRIDE_KEY, JSON.stringify(imported));
    initializeStoreData();
    state.current = pickStore(false);
    renderAll();
    setDataMessage(`已套用 ${stores.length} 間店到目前瀏覽器`);
  } catch (error) {
    setDataMessage(error.message || "JSON 格式不正確");
  }
}

function resetStoreData() {
  localStorage.removeItem(STORE_OVERRIDE_KEY);
  initializeStoreData();
  state.current = pickStore(false);
  renderAll();
  els.storeJsonInput.value = "";
  setDataMessage("已重置為網站內建店家資料");
}

function openStoreReport() {
  const name = els.reportStoreName.value.trim() || "未填店名";
  const type = els.reportType.value;
  const note = els.reportNote.value.trim() || "待補";
  const body = [
    `### 異動類型`,
    type,
    "",
    `### 店名`,
    name,
    "",
    `### 平台連結或備註`,
    note,
    "",
    `### 回報來源`,
    "K10 Drink Picker 資料更新表單",
  ].join("\n");
  const params = new URLSearchParams({
    title: `[店家更新] ${type} - ${name}`,
    body,
  });
  window.open(`https://github.com/jiunjiun69/ase-k10-drink-picker/issues/new?${params}`, "_blank", "noopener");
  setDataMessage("已開啟 GitHub issue 回報頁");
}

function setDataMessage(message) {
  els.dataMessage.textContent = message;
}

function hasDirectDeliveryLink(store) {
  return Object.values(store.platforms || {}).some(isDirectDeliveryPageUrl);
}

function isDirectDeliveryPageUrl(url) {
  return DELIVERY_PAGE_PATTERNS.some((pattern) => String(url).includes(pattern));
}

function cloneStores(value) {
  return JSON.parse(JSON.stringify(value));
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getFilteredStores(ignoreSearch = false) {
  const now = getTaipeiNowParts();
  return stores.filter((store) => {
    const platformMatch = Object.keys(store.platforms).some((platform) => state.platforms.has(platform));
    const deliveryLinkMatch = hasDirectDeliveryLink(store);
    const budgetMatch = store.budget <= state.budget;
    const groupMatch = !state.groupOnly || store.group;
    const caffeineMatch = !state.noCaffeine || !store.caffeine;
    const openStatus = getStoreOpenState(store, now);
    const openMatch = !state.openOnly || openStatus.isOpen === true;
    const promoMatch = !state.promoOnly || Boolean(store.promotion);
    const newMatch = !state.newOnly || store.newArrival;
    const promoText = store.promotion ? [store.promotion.label, store.promotion.detail, ...(store.promotion.items || [])].join(" ") : "";
    const searchText = [
      store.name,
      store.area,
      store.address,
      store.summary,
      store.hoursLabel || "",
      openStatus.label,
      promoText,
      ...store.picks,
      ...store.mood,
    ]
      .join(" ")
      .toLowerCase();
    const searchMatch = ignoreSearch || !state.search || searchText.includes(state.search);
    return platformMatch && deliveryLinkMatch && budgetMatch && groupMatch && caffeineMatch && openMatch && promoMatch && newMatch && searchMatch;
  });
}

function pickStore(seedByDate = false, extraRandom = false) {
  const candidates = getFilteredStores(true);
  const pool = candidates;
  if (!pool.length) {
    return null;
  }
  const scored = pool.map((store) => ({
    store,
    score: getScore(store) + (extraRandom ? Math.random() * 3 : seededRandom(`${store.id}-${state.mood}-${dateKey()}`) * 1.4),
  }));
  scored.sort((a, b) => b.score - a.score);

  if (seedByDate) {
    return scored[0]?.store || stores[0];
  }

  const top = scored.slice(0, Math.min(4, scored.length));
  const total = top.reduce((sum, item) => sum + Math.max(item.score, 0.1), 0);
  let cursor = Math.random() * total;
  for (const item of top) {
    cursor -= Math.max(item.score, 0.1);
    if (cursor <= 0) return item.store;
  }
  return top[0]?.store || stores[0];
}

function getScore(store) {
  let score = store.rating * 2;
  const openStatus = getStoreOpenState(store);
  if (store.mood.includes(state.mood)) score += 4;
  if (store.group && state.groupOnly) score += 1.5;
  if (!store.caffeine && state.noCaffeine) score += 3;
  if (openStatus.isOpen === true) score += 2.5;
  if (openStatus.isOpen === false) score -= 3;
  if (openStatus.isOpen === null) score -= 1.2;
  if (store.promotion && state.promoOnly) score += 3.5;
  if (store.promotion) score += 0.8;
  if (Object.keys(store.platforms).length > 1) score += 1.2;
  if (state.favorites.has(store.id)) score += 1;
  score += Math.max(0, (state.budget - store.budget) / 14);
  if (state.history.slice(0, 3).some((entry) => entry.id === store.id)) score -= 4;
  return score;
}

function getTaipeiNowParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Taipei",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: dayMap[lookup.weekday],
    minutes: Number(lookup.hour) * 60 + Number(lookup.minute),
  };
}

function getStoreOpenState(store, now = getTaipeiNowParts()) {
  if (!store.hours?.length) {
    return {
      isOpen: null,
      label: "查平台",
      detail: "未整理營業時間",
      className: "checking",
    };
  }

  const previousDay = (now.day + 6) % 7;
  for (const range of store.hours) {
    const activeRange = activeRangeInfo(range, now, previousDay);
    if (!activeRange) continue;

    if (store.hoursConfidence === "reference") {
      return {
        isOpen: null,
        label: "查平台",
        detail: "參考時段內",
        className: "checking",
      };
    }

    if (activeRange.minutesSinceOpen < OPENING_CHECK_BUFFER_MINUTES) {
      return {
        isOpen: null,
        label: "剛開店",
        detail: "請先查平台",
        className: "checking",
      };
    }

    if (activeRange.minutesUntilClose <= CLOSING_CHECK_BUFFER_MINUTES) {
      return {
        isOpen: null,
        label: "快休息",
        detail: `到 ${range.close}`,
        className: "checking",
      };
    }

    return {
      isOpen: true,
      label: "營業中",
      detail: `到 ${range.close}`,
      className: "open",
    };
  }

  return {
    isOpen: false,
    label: "未營業",
    detail: nextOpeningLabel(store, now),
    className: "closed",
  };
}

function activeRangeInfo(range, now, previousDay) {
  const open = timeToMinutes(range.open);
  const close = timeToMinutes(range.close);
  const crossesMidnight = close <= open;
  const opensToday = range.days.includes(now.day);
  const openedYesterday = crossesMidnight && range.days.includes(previousDay);

  if (!crossesMidnight && opensToday && now.minutes >= open && now.minutes < close) {
    return {
      minutesSinceOpen: now.minutes - open,
      minutesUntilClose: close - now.minutes,
    };
  }

  if (crossesMidnight && opensToday && now.minutes >= open) {
    return {
      minutesSinceOpen: now.minutes - open,
      minutesUntilClose: close + 1440 - now.minutes,
    };
  }

  if (crossesMidnight && openedYesterday && now.minutes < close) {
    return {
      minutesSinceOpen: now.minutes + 1440 - open,
      minutesUntilClose: close - now.minutes,
    };
  }

  return null;
}

function nextOpeningLabel(store, now) {
  let next = null;
  for (let offset = 0; offset <= 7; offset += 1) {
    const day = (now.day + offset) % 7;
    store.hours.forEach((range) => {
      if (!range.days.includes(day)) return;
      const open = timeToMinutes(range.open);
      if (offset === 0 && open <= now.minutes) return;
      const score = offset * 1440 + open;
      if (!next || score < next.score) {
        next = { score, offset, open: range.open };
      }
    });
  }

  if (!next) {
    return "請查平台";
  }

  const prefix = next.offset === 0 ? "今天" : next.offset === 1 ? "明天" : dayName((now.day + next.offset) % 7);
  return `${prefix} ${next.open} 開`;
}

function timeToMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function dayName(day) {
  return ["週日", "週一", "週二", "週三", "週四", "週五", "週六"][day];
}

function renderAll() {
  renderMoodChips();
  renderRecommendation();
  renderNewArrivals();
  renderStores();
  renderHistory();
  renderMetrics();
  renderSources();
}

function renderNewArrivals() {
  const arrivals = stores
    .filter((store) => store.newArrival)
    .sort((a, b) => String(b.openedAt).localeCompare(String(a.openedAt)));
  els.newArrivalGrid.innerHTML = "";
  els.newArrivalsTitle.textContent = `最近新開的 ${arrivals.length} 間`;

  arrivals.forEach((store) => {
    const article = document.createElement("article");
    article.className = "arrival-card";
    article.style.setProperty("--arrival-color", store.color);
    const platformLinks = Object.entries(store.platforms)
      .map(
        ([platform, url]) =>
          `<a class="platform-link ${platform}" href="${url}" target="_blank" rel="noreferrer">${platformLabel(platform)}</a>`,
      )
      .join("");
    const mapLink = store.mapUrl
      ? `<a class="platform-link maps" href="${store.mapUrl}" target="_blank" rel="noreferrer">Google Maps</a>`
      : "";
    article.innerHTML = `
      <div class="arrival-card-head">
        <span class="new-badge">NEW · ${formatOpenedAt(store.openedAt)}</span>
        <span>${store.area}</span>
      </div>
      <h3>${store.name}</h3>
      <p>${store.summary}</p>
      <div class="arrival-footer">
        <span>推薦 ${store.picks[0]}</span>
        <div class="platform-row">${platformLinks}${mapLink}</div>
      </div>
    `;
    els.newArrivalGrid.append(article);
  });
}

function formatOpenedAt(value) {
  if (!value) return "近期開幕";
  const [year, month] = value.split("-");
  return `${year}.${month}`;
}

function renderRecommendation() {
  const store = state.current || pickStore(true);
  if (!store) {
    els.recommendationCard.innerHTML = `
      <div class="recommendation-main">
        <p class="muted">條件暫時沒有符合的店</p>
        <h2>放寬一下</h2>
        <p>可以先關掉「只看高把握營業中」或提高預算，再重新抽一次。</p>
      </div>
    `;
    return;
  }

  const platformNames = Object.keys(store.platforms).map(platformLabel).join(" / ");
  const openStatus = getStoreOpenState(store);
  els.recommendationCard.innerHTML = `
    <div class="recommendation-main">
      <p class="muted">${store.area} · ${platformNames} · ${store.hoursLabel || "請查平台營業時間"}</p>
      <h2>${store.name}</h2>
      <p>${store.summary}</p>
    </div>
    <div class="recommendation-details">
      <div class="detail-tile">
        <span>營業狀態</span>
        <strong class="status-badge ${openStatus.className}">${openStatus.label} · ${openStatus.detail}</strong>
      </div>
      <div class="detail-tile">
        <span>先點這杯</span>
        <strong>${store.picks[0]}</strong>
      </div>
      <div class="detail-tile">
        <span>預估單杯</span>
        <strong>$${store.budget} 內</strong>
      </div>
      <div class="detail-tile">
        <span>平台評分</span>
        <strong>${store.rating.toFixed(1)} · ${store.reviews}</strong>
      </div>
      <div class="detail-tile">
        <span>優惠線索</span>
        <strong>${store.promotion ? store.promotion.label : "先查平台"}</strong>
      </div>
    </div>
    ${promotionMarkup(store)}
    <div class="platform-row">
      ${Object.entries(store.platforms)
        .map(
          ([platform, url]) =>
            `<a class="platform-link ${platform}" href="${url}" target="_blank" rel="noreferrer">${platformLabel(platform)}</a>`,
        )
        .join("")}
    </div>
  `;
}

function promotionMarkup(store, compact = false) {
  if (!store.promotion) {
    return "";
  }

  return `<div class="promo-note active">${promotionContent(store, compact)}</div>`;
}

function promotionContent(store, compact = false) {
  if (!store.promotion) {
    return "";
  }

  const items = store.promotion.items || [];
  const itemList = items.length
    ? `<ul class="promo-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";
  const verified = store.promotion.verified ? ` · ${store.promotion.verified}` : "";

  return `
    <strong>${store.promotion.label}</strong>
    <span>${store.promotion.detail}${compact ? "" : verified}</span>
    ${itemList}
  `;
}

function renderStores() {
  const visibleStores = sortStores(getFilteredStores());
  els.storeGrid.innerHTML = "";
  els.resultSummary.textContent = `顯示 ${visibleStores.length} / ${stores.length} 間`;
  els.newOnlyButton.classList.toggle("active", state.newOnly);

  if (!visibleStores.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = state.openOnly
      ? "這組條件暫時沒有高把握營業中的候選店家"
      : "這組條件暫時沒有候選店家";
    els.storeGrid.append(empty);
    return;
  }

  visibleStores.forEach((store) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const openStatus = getStoreOpenState(store);
    node.style.setProperty("--avatar", store.color);
    node.classList.toggle("new-arrival", Boolean(store.newArrival));
    node.querySelector(".store-avatar").textContent = store.name.slice(0, 1);
    const badge = node.querySelector(".card-badge");
    if (store.newArrival) {
      badge.textContent = "NEW";
      badge.hidden = false;
    }
    node.querySelector(".store-meta").textContent =
      `${store.area} · ${store.rating.toFixed(1)} · ${store.reviews} · ${store.hoursLabel || "請查平台營業時間"}`;
    node.querySelector("h3").textContent = store.name;
    node.querySelector(".store-address").textContent = store.address;
    node.querySelector(".store-summary").textContent = store.summary;
    const promoNote = node.querySelector(".promo-note");
    if (store.promotion) {
      promoNote.classList.add("active");
      promoNote.innerHTML = promotionContent(store, true);
    }

    const favorite = node.querySelector(".favorite-button");
    favorite.classList.toggle("active", state.favorites.has(store.id));
    favorite.textContent = state.favorites.has(store.id) ? "★" : "☆";
    favorite.addEventListener("click", () => toggleFavorite(store.id));

    const tagRow = node.querySelector(".tag-row");
    const tags = [...store.picks.slice(0, 2), store.group ? "團訂友善" : "少杯數"];
    tags.unshift(`${openStatus.label} · ${openStatus.detail}`);
    if (store.promotion) {
      tags.unshift("優惠候選");
    }

    tags.forEach((tag, index) => {
      const pill = document.createElement("span");
      pill.className = "tag";
      const statusColor = statusTagColor(tag);
      pill.style.setProperty(
        "--tag-color",
        tag === "優惠候選" ? "#e99d32" : statusColor || (index === 0 ? store.color : "#2e6bb5"),
      );
      pill.textContent = tag;
      tagRow.append(pill);
    });

    const platformRow = node.querySelector(".platform-row");
    Object.entries(store.platforms).forEach(([platform, url]) => {
      const link = document.createElement("a");
      link.className = `platform-link ${platform}`;
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = platformLabel(platform);
      platformRow.append(link);
    });
    if (store.mapUrl) {
      const mapLink = document.createElement("a");
      mapLink.className = "platform-link maps";
      mapLink.href = store.mapUrl;
      mapLink.target = "_blank";
      mapLink.rel = "noreferrer";
      mapLink.textContent = "Google Maps";
      platformRow.append(mapLink);
    }

    els.storeGrid.append(node);
  });
}

function sortStores(storeList) {
  const sorted = [...storeList];
  if (state.sort === "newest") {
    return sorted.sort((a, b) => String(b.openedAt || "").localeCompare(String(a.openedAt || "")));
  }
  if (state.sort === "rating") {
    return sorted.sort((a, b) => b.rating - a.rating || a.budget - b.budget);
  }
  if (state.sort === "budget") {
    return sorted.sort((a, b) => a.budget - b.budget || b.rating - a.rating);
  }
  return sorted.sort((a, b) => getScore(b) - getScore(a));
}

function statusTagColor(tag) {
  if (tag.startsWith("營業中")) return "#168b80";
  if (tag.startsWith("未營業")) return "#c45562";
  if (tag.startsWith("查平台") || tag.startsWith("剛開店") || tag.startsWith("快休息")) return "#e99d32";
  return "";
}

function renderHistory() {
  els.historyList.innerHTML = "";
  if (!state.history.length) {
    const empty = document.createElement("p");
    empty.className = "history-empty";
    empty.textContent = "還沒有飲料紀錄";
    els.historyList.append(empty);
    return;
  }

  state.history.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "history-item";
    const date = new Intl.DateTimeFormat("zh-TW", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(entry.time));
    row.innerHTML = `<strong>${entry.name}</strong><span>${date}</span>`;
    els.historyList.append(row);
  });
}

function renderMetrics() {
  const now = getTaipeiNowParts();
  const verifiedStores = stores.filter(hasDirectDeliveryLink);
  els.budgetValue.textContent = state.budget;
  els.storeCount.textContent = verifiedStores.length;
  els.dualPlatformCount.textContent = verifiedStores.filter((store) => Object.keys(store.platforms).length > 1).length;
  els.promoCount.textContent = verifiedStores.filter((store) => store.promotion).length;
  els.openNowCount.textContent = verifiedStores.filter((store) => getStoreOpenState(store, now).isOpen === true).length;
  els.favoriteCount.textContent = state.favorites.size;
}

function renderSources() {
  const links = stores
    .filter(hasDirectDeliveryLink)
    .flatMap((store) => {
      const platformLinks = Object.entries(store.platforms)
        .filter(([, url]) => isDirectDeliveryPageUrl(url))
        .map(([platform, url]) => ({
          label: `${store.name} · ${platformLabel(platform)}`,
          url,
        }));
      if (!store.promotion?.url) {
        return platformLinks;
      }
      return [
        ...platformLinks,
        {
          label: `${store.name} · 優惠線索`,
          url: store.promotion.url,
        },
      ];
    })
    .slice(0, 48);

  els.sourceLinks.innerHTML = "";
  links.forEach((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.label;
    els.sourceLinks.append(link);
  });
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  localStorage.setItem("k10Favorites", JSON.stringify([...state.favorites]));
  renderAll();
}

function platformLabel(platform) {
  if (platform === "foodpanda") return "foodpanda";
  if (platform === "ubereats") return "Uber Eats";
  if (platform === "nidin") return "官方線上點餐";
  return platform;
}

function dateKey() {
  return new Date().toISOString().slice(0, 10);
}

function seededRandom(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
}

init();
