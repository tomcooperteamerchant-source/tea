const translations = {
  zh: {
    brand: "名間烏龍茶製茶廠",
    navAbout: "關於我們",
    navTea: "產品特色",
    navContact: "聯絡我們",
    eyebrow: "Taiwan Oolong Tea Factory",
    heroTitle: "來自南投名間的台灣烏龍茶",
    heroDesc: "我們位於南投縣名間鄉，專注生產台灣烏龍茶，重視茶葉香氣、焙火穩定與製程品質。",
    heroButton: "立即聯絡",
    aboutTitle: "關於我們",
    aboutText: "我們是位於台灣南投縣名間鄉的茶業工廠，長期投入台灣烏龍茶製作。從茶菁處理、萎凋、揉捻到焙火，我們重視每一道製程，希望讓每一批茶都保有穩定且乾淨的風味。",
    teaTitle: "產品特色",
    feature1Title: "台灣產地",
    feature1Text: "來自南投名間，具有台灣烏龍茶的在地風味。",
    feature2Title: "穩定焙火",
    feature2Text: "依茶葉狀態調整焙火，呈現溫潤茶香與順口滋味。",
    feature3Title: "工廠製作",
    feature3Text: "具備製茶流程經驗，適合茶行、品牌與批發合作洽詢。",
    galleryTitle: "茶葉與製程",
    galleryNote: "之後可將這裡換成你的實際照片。",
    contactTitle: "聯絡我們",
    contactText: "歡迎茶行、品牌、批發與合作夥伴與我們聯繫。",
    addressLabel: "地址：",
    phoneLabel: "電話："
  },

  en: {
    brand: "Mingjian Oolong Tea Factory",
    navAbout: "About",
    navTea: "Tea Features",
    navContact: "Contact",
    eyebrow: "Taiwan Oolong Tea Factory",
    heroTitle: "Taiwan Oolong Tea from Mingjian, Nantou",
    heroDesc: "Located in Mingjian Township, Nantou County, we specialize in producing Taiwanese oolong tea with a focus on aroma, roasting consistency, and reliable quality.",
    heroButton: "Contact Us",
    aboutTitle: "About Us",
    aboutText: "We are a tea factory based in Mingjian Township, Nantou County, Taiwan. With experience in Taiwanese oolong tea production, we carefully manage each step from fresh tea leaves, withering, rolling, to roasting.",
    teaTitle: "Tea Features",
    feature1Title: "Taiwan Origin",
    feature1Text: "Produced in Mingjian, Nantou, with the local character of Taiwanese oolong tea.",
    feature2Title: "Stable Roasting",
    feature2Text: "Roasting is adjusted according to each batch of tea leaves to create a smooth and warm aroma.",
    feature3Title: "Factory Production",
    feature3Text: "Suitable for tea shops, brands, wholesale buyers, and business partnerships.",
    galleryTitle: "Tea & Process",
    galleryNote: "You can replace this section with your real photos later.",
    contactTitle: "Contact Us",
    contactText: "We welcome inquiries from tea shops, brands, wholesalers, and business partners.",
    addressLabel: "Address:",
    phoneLabel: "Phone:"
  },

  ja: {
    brand: "名間ウーロン茶製茶工場",
    navAbout: "私たちについて",
    navTea: "お茶の特徴",
    navContact: "お問い合わせ",
    eyebrow: "Taiwan Oolong Tea Factory",
    heroTitle: "南投・名間から届く台湾ウーロン茶",
    heroDesc: "私たちは台湾南投県名間郷にある製茶工場です。台湾ウーロン茶の香り、焙煎の安定性、品質管理を大切にしています。",
    heroButton: "お問い合わせ",
    aboutTitle: "私たちについて",
    aboutText: "台湾南投県名間郷にある製茶工場として、台湾ウーロン茶の製造に取り組んでいます。茶葉の処理、萎凋、揉捻、焙煎まで、一つひとつの工程を丁寧に管理しています。",
    teaTitle: "お茶の特徴",
    feature1Title: "台湾産地",
    feature1Text: "南投・名間の土地に根ざした台湾ウーロン茶の味わい。",
    feature2Title: "安定した焙煎",
    feature2Text: "茶葉の状態に合わせて焙煎し、まろやかな香りと飲みやすさを引き出します。",
    feature3Title: "製茶工場",
    feature3Text: "茶専門店、ブランド、卸売、ビジネスパートナーからのお問い合わせを歓迎します。",
    galleryTitle: "茶葉と製茶工程",
    galleryNote: "後で実際の写真に差し替えることができます。",
    contactTitle: "お問い合わせ",
    contactText: "茶専門店、ブランド、卸売、協業パートナーからのお問い合わせを歓迎します。",
    addressLabel: "住所：",
    phoneLabel: "電話："
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });

  document.documentElement.lang =
    lang === "zh" ? "zh-Hant" : lang === "ja" ? "ja" : "en";
}
