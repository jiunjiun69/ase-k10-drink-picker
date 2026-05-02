const DATA_VERSION = "2026-05-02";

const moods = [
  { id: "refreshing", label: "解暑", color: "#168b80" },
  { id: "milk", label: "奶茶", color: "#9b6a3a" },
  { id: "fruit", label: "水果", color: "#e0783c" },
  { id: "tea", label: "茶感", color: "#2e6bb5" },
  { id: "sweet", label: "甜一點", color: "#c45562" },
  { id: "budget", label: "省錢", color: "#6f8f36" },
  { id: "new", label: "換口味", color: "#8159b4" },
];

const stores = [
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
      label: "品牌券與買一送一線索",
      detail: "公開優惠頁曾列折價券、瓶裝回購折扣與 LINE 好友買一送一線索，外送可用性需下單前確認。",
      items: [
        "滿 200 元贈 20 元折價券",
        "回購瓶裝飲品每瓶現折 15 元",
        "冬瓜烏買一送一 LINE 好友券線索",
      ],
      url: "https://twcoupon.com/brandshop-34964-%E6%B0%B4%E5%B7%B7%E8%8C%B6%E5%BC%84-%E9%AB%98%E9%9B%84%E5%B8%82-%E9%AB%98%E9%9B%84%E6%83%A0%E6%B0%91%E5%BA%97.html",
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
];

const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];

const WEEKDAYS = [1, 2, 3, 4, 5];

const WEEKENDS = [0, 6];

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
};

stores.forEach((store) => {
  Object.assign(store, operatingInfo[store.id] || {});
});

const state = {
  mood: "refreshing",
  budget: 85,
  platforms: new Set(["foodpanda", "ubereats"]),
  groupOnly: true,
  noCaffeine: false,
  openOnly: true,
  promoOnly: false,
  search: "",
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
}

function getFilteredStores(ignoreSearch = false) {
  const now = getTaipeiNowParts();
  return stores.filter((store) => {
    const platformMatch = Object.keys(store.platforms).some((platform) => state.platforms.has(platform));
    const budgetMatch = store.budget <= state.budget;
    const groupMatch = !state.groupOnly || store.group;
    const caffeineMatch = !state.noCaffeine || !store.caffeine;
    const openStatus = getStoreOpenState(store, now);
    const openMatch = !state.openOnly || openStatus.isOpen === true;
    const promoMatch = !state.promoOnly || Boolean(store.promotion);
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
    return platformMatch && budgetMatch && groupMatch && caffeineMatch && openMatch && promoMatch && searchMatch;
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
  if (openStatus.isOpen) score += 2.5;
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
      className: "closed",
    };
  }

  const previousDay = (now.day + 6) % 7;
  for (const range of store.hours) {
    const open = timeToMinutes(range.open);
    const close = timeToMinutes(range.close);
    const crossesMidnight = close <= open;
    const opensToday = range.days.includes(now.day);
    const openedYesterday = crossesMidnight && range.days.includes(previousDay);
    if (opensToday && isMinuteInRange(now.minutes, open, close)) {
      return {
        isOpen: true,
        label: "營業中",
        detail: `到 ${range.close}`,
        className: "open",
      };
    }
    if (openedYesterday && now.minutes < close) {
      return {
        isOpen: true,
        label: "營業中",
        detail: `到 ${range.close}`,
        className: "open",
      };
    }
  }

  return {
    isOpen: false,
    label: "未營業",
    detail: nextOpeningLabel(store, now),
    className: "closed",
  };
}

function isMinuteInRange(current, open, close) {
  if (close <= open) {
    return current >= open || current < close;
  }
  return current >= open && current < close;
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
  renderStores();
  renderHistory();
  renderMetrics();
  renderSources();
}

function renderRecommendation() {
  const store = state.current || pickStore(true);
  if (!store) {
    els.recommendationCard.innerHTML = `
      <div class="recommendation-main">
        <p class="muted">條件暫時沒有符合的店</p>
        <h2>放寬一下</h2>
        <p>可以先關掉「只看營業中」或提高預算，再重新抽一次。</p>
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
        <strong class="status-badge ${openStatus.className === "open" ? "" : "closed"}">${openStatus.label} · ${openStatus.detail}</strong>
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
  const visibleStores = getFilteredStores();
  els.storeGrid.innerHTML = "";

  if (!visibleStores.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = state.openOnly
      ? "這組條件暫時沒有營業中的候選店家"
      : "這組條件暫時沒有候選店家";
    els.storeGrid.append(empty);
    return;
  }

  visibleStores.forEach((store) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const openStatus = getStoreOpenState(store);
    node.style.setProperty("--avatar", store.color);
    node.querySelector(".store-avatar").textContent = store.name.slice(0, 1);
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
      pill.style.setProperty(
        "--tag-color",
        tag === "優惠候選" ? "#e99d32" : tag.startsWith("營業中") ? "#168b80" : tag.startsWith("未營業") ? "#c45562" : index === 0 ? store.color : "#2e6bb5",
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

    els.storeGrid.append(node);
  });
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
  els.budgetValue.textContent = state.budget;
  els.storeCount.textContent = stores.length;
  els.dualPlatformCount.textContent = stores.filter((store) => Object.keys(store.platforms).length > 1).length;
  els.promoCount.textContent = stores.filter((store) => store.promotion).length;
  els.openNowCount.textContent = stores.filter((store) => getStoreOpenState(store, now).isOpen === true).length;
  els.favoriteCount.textContent = state.favorites.size;
}

function renderSources() {
  const links = stores
    .flatMap((store) => {
      const platformLinks = Object.entries(store.platforms).map(([platform, url]) => ({
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
    .slice(0, 24);

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
  return platform === "foodpanda" ? "foodpanda" : "Uber Eats";
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
