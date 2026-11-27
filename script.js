/* =====================================================================
   SHOP CONTENT: edit ONLY this object to change what the page says (both languages).
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] Dubai time, a list of ranges for split
   hours, or null if closed. A closing time after midnight is written past 24:00 ("24:30" = 12:30 AM).
   reviews: real Google quotes. If empty, text.<lang>.mentions (a summary) is shown instead.
   ===================================================================== */
const SHOP = {
  "name": "Flora and Fauna",
  "siteUrl": "https://tanish0212.github.io/flora-and-fauna-demo/",
  "schemaType": "PetStore",
  "phoneDisplay": "+971 56 152 9398",
  "phoneHref": "tel:+971561529398",
  "phoneIntl": "+971561529398",
  "whatsappNumber": "971561529398",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Flora+and+Fauna+Wasl+Opal+Building+Al+Doha+Street+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Flora+and+Fauna+Wasl+Opal+Building+Al+Doha+Street+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Flora%20and%20Fauna%2C%20Wasl%20Opal%20Building%2C%20Al%20Doha%20Street%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Wasl Opal Building, Al Doha Street, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ],
    [
      "09:00",
      "22:30"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "key": "g0"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 188
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "photos": {
    "hero": {
      "src": "images/hero.webp",
      "en": "A large planted aquarium",
      "ar": "حوض أسماك كبير مزروع بالنباتات"
    },
    "intro": {
      "src": "images/photo-1.webp",
      "en": "A lit aquarium full of plants",
      "ar": "حوض أسماك مضاء مليء بالنباتات"
    },
    "photo-2": {
      "src": "images/photo-2.webp",
      "en": "Fish in water-filled bags at an aquarium shop",
      "ar": "أسماك في أكياس ماء في متجر أحواض"
    },
    "photo-3": {
      "src": "images/photo-3.webp",
      "en": "A goldfish against a dark background",
      "ar": "سمكة ذهبية على خلفية داكنة"
    },
    "photo-4": {
      "src": "images/photo-4.webp",
      "en": "A kitten reaching up",
      "ar": "قطة صغيرة تمد يدها إلى الأعلى"
    }
  },
  "services": [
    {
      "en": {
        "name": "Ornamental fish",
        "desc": "All kinds of ornamental fish for your aquarium.",
        "ask": "ornamental fish"
      },
      "ar": {
        "name": "أسماك الزينة",
        "desc": "أنواع مختلفة من أسماك الزينة لحوضك.",
        "ask": "أسماك الزينة"
      }
    },
    {
      "en": {
        "name": "Aquarium plants",
        "desc": "Aquarium plants to bring green into your tank.",
        "ask": "aquarium plants"
      },
      "ar": {
        "name": "نباتات الأحواض",
        "desc": "نباتات للأحواض تضيف الخضرة إلى حوضك.",
        "ask": "نباتات الأحواض"
      }
    },
    {
      "en": {
        "name": "Aquascape design",
        "desc": "Aquascape design for a natural underwater scene.",
        "ask": "aquascape design"
      },
      "ar": {
        "name": "تصميم الأحواض المائية",
        "desc": "تصميم أحواض مائية بمنظر طبيعي تحت الماء.",
        "ask": "تصميم الأحواض المائية"
      }
    },
    {
      "en": {
        "name": "Home aquarium setup & maintenance",
        "desc": "We set up aquariums at home and help look after them with maintenance.",
        "ask": "aquarium setup or maintenance at home"
      },
      "ar": {
        "name": "تركيب الأحواض وصيانتها",
        "desc": "نركّب أحواض السمك في المنزل ونساعدك على العناية بها عبر الصيانة.",
        "ask": "تركيب حوض في المنزل أو صيانته"
      }
    },
    {
      "en": {
        "name": "Cats, rabbits & small animals",
        "desc": "Cats, rabbits and other small animals. Ask us what's available.",
        "ask": "cats, rabbits or small animals"
      },
      "ar": {
        "name": "قطط وأرانب وحيوانات صغيرة",
        "desc": "قطط وأرانب وحيوانات صغيرة أخرى. اسألنا عمّا هو متوفر.",
        "ask": "القطط أو الأرانب أو الحيوانات الصغيرة"
      }
    },
    {
      "en": {
        "name": "Pet supplies",
        "desc": "Supplies for the pets at home.",
        "ask": "pet supplies"
      },
      "ar": {
        "name": "مستلزمات الحيوانات الأليفة",
        "desc": "مستلزمات لحيواناتك الأليفة في المنزل.",
        "ask": "مستلزمات الحيوانات الأليفة"
      }
    }
  ],
  "reviews": [
    "This store is very complete, and provides all kinds of ornamental fish.",
    "The shop is extremely clean, modern, and very well organized, making it a pleasure to visit.",
    "They set up our aquarium, provided advice and did it all efficiently."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get directions",
      "newTab": "(opens in a new tab)",
      "ratingShort": "Google rating",
      "ratingCount": "{count} reviews",
      "outOf": "out of 5 on Google",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "closed": "Closed",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "introLabel": "About",
      "servicesTitle": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "reviewsTitle": "What customers say",
      "reviewLabel": "Google review",
      "mentionsNote": "What customers mention most in their Google reviews.",
      "readMore": "Read the reviews on Google",
      "visitTitle": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "closingTitle": "Ask us what’s in stock",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Flora and Fauna · Aquarium & pet shop · Al Karama",
      "metaDescription": "An aquarium and pet shop in Al Karama: ornamental fish, aquarium plants, aquascaping and home aquarium setup, plus cats, rabbits, small animals and pet supplies. Rated 4.9 on Google.",
      "demoBanner": "Demo preview – made for Flora and Fauna. Not the official website yet.",
      "heroName": "Flora and Fauna",
      "waMessage": "Hello Flora and Fauna, I found you on your website and I'd like to ask about your services.",
      "waMessageAbout": "Hello Flora and Fauna, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Flora and Fauna on WhatsApp",
      "mapTitle": "Map showing Flora and Fauna",
      "footerName": "Flora and Fauna",
      "groups": {
        "g0": "Every day"
      },
      "mentions": [],
      "brandName": "Flora and Fauna",
      "heroPlace": "Al Doha Street, Al Karama",
      "addressLines": [
        "Wasl Opal Building",
        "Al Doha Street, Al Karama",
        "Dubai"
      ],
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "footerTag": "Aquarium and pet shop in Al Karama, Dubai.",
      "intro": "An aquarium and pet shop in Al Karama: ornamental fish, aquarium plants, aquascaping and home aquarium setup, plus cats, rabbits, small animals and pet supplies.",
      "kicker": "Aquarium & pet shop · Al Karama"
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingShort": "تقييم جوجل",
      "ratingCount": "{count} تقييمًا",
      "outOf": "من 5 على جوجل",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "introLabel": "نبذة",
      "servicesTitle": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلنا عبر واتساب لمعرفة الأسعار.",
      "reviewsTitle": "ماذا يقول العملاء",
      "reviewLabel": "تقييم من جوجل",
      "mentionsNote": "أكثر ما يذكره العملاء في تقييماتهم على جوجل.",
      "readMore": "اقرأ التقييمات على جوجل",
      "visitTitle": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "closingTitle": "اسألنا عن المتوفر",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "فلورا آند فونا · متجر أحواض أسماك وحيوانات أليفة · الكرامة",
      "metaDescription": "محل أحواض أسماك وحيوانات أليفة في الكرامة: أسماك الزينة، ونباتات الأحواض، وتصميم الأحواض وتركيبها في المنزل، إلى جانب القطط والأرانب والحيوانات الصغيرة ومستلزماتها. تقييم 4.9 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لـفلورا آند فونا. ليست الموقع الرسمي بعد.",
      "heroName": "فلورا آند فونا",
      "waMessage": "مرحبًا فلورا آند فونا، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن خدماتكم.",
      "waMessageAbout": "مرحبًا فلورا آند فونا، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل فلورا آند فونا عبر واتساب",
      "mapTitle": "خريطة توضح موقع فلورا آند فونا",
      "footerName": "فلورا آند فونا",
      "groups": {
        "g0": "كل يوم"
      },
      "mentions": [],
      "brandName": "فلورا آند فونا",
      "heroPlace": "شارع الدوحة، الكرامة",
      "addressLines": [
        "بناية وصل أوبال",
        "شارع الدوحة، الكرامة",
        "دبي"
      ],
      "servicesIntro": "اضغط على أي خدمة لتسألنا عنها عبر واتساب.",
      "footerTag": "محل أحواض أسماك وحيوانات أليفة في الكرامة، دبي.",
      "intro": "محل أحواض أسماك وحيوانات أليفة في الكرامة: أسماك الزينة، ونباتات الأحواض، وتصميم الأحواض وتركيبها في المنزل، إلى جانب القطط والأرانب والحيوانات الصغيرة ومستلزماتها.",
      "kicker": "متجر أحواض أسماك وحيوانات أليفة · الكرامة"
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable: English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }
  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- hours + open / closed badge, in the shop's time zone ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several [["09:30","14:00"],["17:00","22:30"]].
  // A closing time after midnight is written past 24:00, e.g. "24:30" = 12:30 AM the next day.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    // still open from yesterday's late shift (closing time past 24:00)?
    const yday = (now.day + 6) % 7;
    const late = rangesOf(yday).find((r) => toMin(r[1]) > 1440 && now.min < toMin(r[1]) - 1440);
    if (late) return { open: true, key: "statusOpen", time: late[1] };
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1] };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0] };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
    }
    return { open: false, key: "statusOpensToday", time: "00:00" };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: s.day !== undefined ? tx.days[s.day] : "" });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [document.createTextNode(tx.groups[g.key] + " "), el("span", { class: "today-flag", text: tx.today, hidden: true })]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
  }

  /* ---------- render everything for the current language ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);
    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // photo alt text follows the language
    $$(".js-img").forEach((img) => { const p = SHOP.photos[img.dataset.img]; if (p) img.alt = p[lang]; });

    // optional story paragraphs + facts (intro section)
    $(".js-story").replaceChildren(...(tx.story || []).map((p) => el("p", { text: p })));
    $(".js-facts").replaceChildren(...(tx.facts || []).map((f) => el("div", null, [el("dt", { text: f.label }), el("dd", { text: f.value })])));

    // services
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal" }, [
      el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("h3", { class: "service-name", text: s[lang].name }),
      el("p", { class: "service-desc", text: s[lang].desc }),
      el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
        el("span", { text: tx.quoteCta }),
        el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
      ]),
    ])));

    // reviews: real Google quotes (kept in English), or a plain summary of what reviewers mention
    const list = $(".js-reviews-list");
    if (SHOP.reviews.length) {
      $(".js-reviews-sub").textContent = "";
      list.replaceChildren(...SHOP.reviews.map((r) => el("li", { class: "review reveal" }, [
        el("figure", null, [
          el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: "“" + r + "”" })]),
          el("figcaption", { text: tx.reviewLabel }),
        ]),
      ])));
    } else {
      $(".js-reviews-sub").textContent = tx.mentionsNote;
      list.replaceChildren(...tx.mentions.map((m) => el("li", { class: "review reveal" }, [el("p", { class: "mention", text: m })])));
    }

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatus();
    observeReveals();
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hhmm = (x) => { const m = toMin(x) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      telephone: SHOP.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: SHOP.address.street, addressLocality: SHOP.address.city, addressCountry: SHOP.address.country },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification", dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: hhmm(r[0]), closes: r[1] === "24:00" ? "23:59" : hhmm(r[1]),
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- fade-in on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$(".reveal").forEach((n) => n.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- floating WhatsApp button appears after the hero ---------- */
  const fab = $(".fab");
  const hero = $(".hero");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fab.classList.toggle("is-on", window.scrollY > hero.offsetHeight * 0.7); ticking = false; });
  }

  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
