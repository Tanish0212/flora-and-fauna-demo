/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] in Dubai time, or null if closed.
   hoursGroups: how days are grouped in the hours table. See README.md.
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
      "key": "daily"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 188
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "images": {
    "hero": {
      "src": "images/aquarium.svg",
      "en": "Line illustration of a planted aquarium with fish, and a cat and a rabbit in front",
      "ar": "رسم خطي لحوض مزروع بالنباتات مع أسماك، وأمامه قطة وأرنب"
    }
  },
  "stepIcons": [
    "i-wa",
    "i-shop",
    "i-fish"
  ],
  "services": [
    {
      "image": "images/fish.svg",
      "en": {
        "name": "Ornamental fish",
        "desc": "All kinds of ornamental fish for your aquarium.",
        "alt": "Line illustration of two ornamental fish with bubbles",
        "ask": "ornamental fish"
      },
      "ar": {
        "name": "أسماك الزينة",
        "desc": "أنواع مختلفة من أسماك الزينة لحوضك.",
        "alt": "رسم خطي لسمكتي زينة مع فقاعات",
        "ask": "أسماك الزينة"
      }
    },
    {
      "image": "images/plants.svg",
      "en": {
        "name": "Aquarium plants",
        "desc": "Aquarium plants to bring green into your tank.",
        "alt": "Line illustration of aquarium plants growing from gravel",
        "ask": "aquarium plants"
      },
      "ar": {
        "name": "نباتات الأحواض",
        "desc": "نباتات للأحواض تضيف الخضرة إلى حوضك.",
        "alt": "رسم خطي لنباتات حوض تنمو من الحصى",
        "ask": "نباتات الأحواض"
      }
    },
    {
      "image": "images/aquascape.svg",
      "en": {
        "name": "Aquascape design",
        "desc": "Aquascape design for a natural underwater scene.",
        "alt": "Line illustration of an aquascaped tank with stones, plants and fish",
        "ask": "aquascape design"
      },
      "ar": {
        "name": "تصميم الأحواض المائية",
        "desc": "تصميم أحواض مائية بمنظر طبيعي تحت الماء.",
        "alt": "رسم خطي لحوض مصمم بالأحجار والنباتات والأسماك",
        "ask": "تصميم الأحواض المائية"
      }
    },
    {
      "image": "images/setup.svg",
      "en": {
        "name": "Home aquarium setup & maintenance",
        "desc": "We set up aquariums at home and help look after them with maintenance.",
        "alt": "Line illustration of a small aquarium with a fish net",
        "ask": "aquarium setup or maintenance at home"
      },
      "ar": {
        "name": "تركيب الأحواض وصيانتها",
        "desc": "نركّب أحواض السمك في المنزل ونساعدك على العناية بها عبر الصيانة.",
        "alt": "رسم خطي لحوض صغير مع شبكة صيد",
        "ask": "تركيب حوض في المنزل أو صيانته"
      }
    },
    {
      "image": "images/small-animals.svg",
      "en": {
        "name": "Cats, rabbits & small animals",
        "desc": "Cats, rabbits and other small animals. Ask us what's available.",
        "alt": "Line illustration of a sitting cat and a rabbit",
        "ask": "cats, rabbits or small animals"
      },
      "ar": {
        "name": "قطط وأرانب وحيوانات صغيرة",
        "desc": "قطط وأرانب وحيوانات صغيرة أخرى. اسألنا عمّا هو متوفر.",
        "alt": "رسم خطي لقطة جالسة وأرنب",
        "ask": "القطط أو الأرانب أو الحيوانات الصغيرة"
      }
    },
    {
      "image": "images/supplies.svg",
      "en": {
        "name": "Pet supplies",
        "desc": "Supplies for the pets at home.",
        "alt": "Line illustration of a food tin, a pet bowl and a ball",
        "ask": "pet supplies"
      },
      "ar": {
        "name": "مستلزمات الحيوانات الأليفة",
        "desc": "مستلزمات لحيواناتك الأليفة في المنزل.",
        "alt": "رسم خطي لعلبة طعام ووعاء وكرة",
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
      "navHow": "How it works",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get Directions",
      "newTab": "(opens in a new tab)",
      "ratingLine": "{rating} on Google · {count} reviews",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
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
      "stripAria": "Quick facts",
      "stripServicesLabel": "Services",
      "stripHoursLabel": "Hours",
      "stripRatingLabel": "Google rating",
      "stripRating": "{rating} / 5 · {count} reviews",
      "servicesKicker": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "howKicker": "How it works",
      "reviewsKicker": "Reviews",
      "basedOn": "{count} reviews on Google",
      "reviewLabel": "Google review",
      "readMore": "Read more on Google",
      "visitKicker": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Flora and Fauna · Aquarium and pet shop in Al Karama, Dubai",
      "metaDescription": "Aquarium and pet shop in Al Karama, Dubai: ornamental fish, aquarium plants, aquascape design, home aquarium setup and maintenance, cats, rabbits, small animals and pet supplies. Rated 4.9 on Google.",
      "demoBanner": "Demo preview – made for Flora and Fauna. Not the official website yet.",
      "brandName": "Flora and Fauna",
      "brandSub": "Aquarium & Pets · Al Karama",
      "waMessage": "Hello Flora and Fauna, I found you on your website and I'd like to ask a question.",
      "waMessageAbout": "Hello Flora and Fauna, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Flora and Fauna on WhatsApp",
      "heroEyebrow": "Flora and Fauna · Aquarium & pet shop",
      "heroTitle": [
        "Fish, plants",
        "and furry friends."
      ],
      "heroSub": "An aquarium and pet shop in Al Karama: ornamental fish, aquarium plants, aquascaping and home aquarium setup, plus cats, rabbits, small animals and pet supplies.",
      "heroPlace": "Al Doha Street, Al Karama",
      "heroCaption": "Wasl Opal Building · Al Karama",
      "stripServices": "Fish · Plants · Aquascaping · Setup & maintenance · Small animals · Supplies",
      "groups": {
        "daily": "Every day"
      },
      "groupsShort": {
        "daily": "Daily"
      },
      "servicesTitle": "For your aquarium and your pets.",
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "howTitle": "From first question to happy tank.",
      "steps": [
        {
          "title": "Message us on WhatsApp",
          "text": "Ask about fish, plants, pets or setting up an aquarium at home."
        },
        {
          "title": "Visit the shop",
          "text": "Come to the Wasl Opal Building on Al Doha Street and ask the team for advice."
        },
        {
          "title": "Take home, or we set up",
          "text": "Take your new arrivals home, or ask us to set up your aquarium."
        }
      ],
      "reviewsTitle": "What visitors say.",
      "visitTitle": "Visit the shop.",
      "addressLines": [
        "Wasl Opal Building",
        "Al Doha Street, Al Karama",
        "Dubai"
      ],
      "mapTitle": "Map showing Flora and Fauna on Al Doha Street, Al Karama, Dubai",
      "ctaTitle": "Planning a new aquarium?",
      "ctaSub": "Send us a message on WhatsApp, or call the shop.",
      "footerName": "Flora and Fauna",
      "footerTag": "Aquarium and pet shop in Al Karama, Dubai."
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navHow": "كيف نعمل",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingLine": "{rating} على جوجل · {count} تقييمًا",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
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
      "stripAria": "معلومات سريعة",
      "stripServicesLabel": "الخدمات",
      "stripHoursLabel": "ساعات العمل",
      "stripRatingLabel": "التقييم على جوجل",
      "stripRating": "{rating} من 5 · {count} تقييمًا",
      "servicesKicker": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلونا عبر واتساب لمعرفة الأسعار.",
      "howKicker": "كيف نعمل",
      "reviewsKicker": "التقييمات",
      "basedOn": "{count} تقييمًا على جوجل",
      "reviewLabel": "تقييم من جوجل",
      "readMore": "اقرأ المزيد على جوجل",
      "visitKicker": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "فلورا آند فونا · محل أحواض أسماك وحيوانات أليفة في الكرامة، دبي",
      "metaDescription": "محل أحواض أسماك وحيوانات أليفة في الكرامة، دبي: أسماك الزينة، نباتات الأحواض، تصميم الأحواض المائية، تركيب الأحواض وصيانتها في المنزل، القطط والأرانب والحيوانات الصغيرة ومستلزماتها. تقييم 4.9 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لمحل فلورا آند فونا. ليست الموقع الرسمي بعد.",
      "brandName": "فلورا آند فونا",
      "brandSub": "أحواض أسماك وحيوانات أليفة · الكرامة",
      "waMessage": "مرحبًا فلورا آند فونا، وجدتكم عبر موقعكم الإلكتروني ولديّ استفسار.",
      "waMessageAbout": "مرحبًا فلورا آند فونا، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل فلورا آند فونا عبر واتساب",
      "heroEyebrow": "فلورا آند فونا · أحواض أسماك وحيوانات أليفة",
      "heroTitle": [
        "أسماك ونباتات،",
        "وأصدقاء لطفاء."
      ],
      "heroSub": "محل أحواض أسماك وحيوانات أليفة في الكرامة: أسماك الزينة، ونباتات الأحواض، وتصميم الأحواض وتركيبها في المنزل، إلى جانب القطط والأرانب والحيوانات الصغيرة ومستلزماتها.",
      "heroPlace": "شارع الدوحة، الكرامة",
      "heroCaption": "بناية وصل أوبال · الكرامة",
      "stripServices": "أسماك · نباتات · تصميم الأحواض · تركيب وصيانة · حيوانات صغيرة · مستلزمات",
      "groups": {
        "daily": "كل يوم"
      },
      "groupsShort": {
        "daily": "يوميًا"
      },
      "servicesTitle": "لحوضك ولحيواناتك الأليفة.",
      "servicesIntro": "اضغط على أي خدمة لتسألنا عنها عبر واتساب.",
      "howTitle": "من أول سؤال إلى حوض جميل.",
      "steps": [
        {
          "title": "راسلنا عبر واتساب",
          "text": "اسأل عن الأسماك أو النباتات أو الحيوانات الأليفة أو تركيب حوض في منزلك."
        },
        {
          "title": "زُر المحل",
          "text": "تفضّل إلى بناية وصل أوبال في شارع الدوحة واطلب نصيحة الفريق."
        },
        {
          "title": "خذها معك أو نركّبها لك",
          "text": "خذ مشترياتك الجديدة إلى المنزل، أو اطلب منا تركيب حوضك."
        }
      ],
      "reviewsTitle": "ماذا يقول زوارنا.",
      "visitTitle": "زُر المحل.",
      "addressLines": [
        "بناية وصل أوبال",
        "شارع الدوحة، الكرامة",
        "دبي"
      ],
      "mapTitle": "خريطة توضح موقع فلورا آند فونا في شارع الدوحة، الكرامة، دبي",
      "ctaTitle": "تخطط لحوض جديد؟",
      "ctaSub": "أرسل لنا رسالة عبر واتساب، أو اتصل بالمحل.",
      "footerName": "فلورا آند فونا",
      "footerTag": "محل أحواض أسماك وحيوانات أليفة في الكرامة، دبي."
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
  } catch (e) { /* storage unavailable — default to English */ }

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
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (h < 12 ? tx.am : tx.pm);
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
    const today = SHOP.hours[now.day];
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      return { open: true, key: "statusOpen", time: today[1], day: now.day };
    }
    if (today && now.min < toMin(today[0])) {
      return { open: false, key: "statusOpensToday", time: today[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      if (SHOP.hours[d]) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: SHOP.hours[d][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabel(day) {
    const h = SHOP.hours[day];
    return timeLabel(h[0]) + " – " + timeLabel(h[1]);
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
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

  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, [ltrIfEn(rangeLabel(g.days[0]))]),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "), ltrIfEn(rangeLabel(g.days[0]))])));
  }

  /* ---------- Render ---------- */
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

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Steps
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(SHOP.stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

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

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.map((g) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: SHOP.hours[g.days[0]][0],
        closes: SHOP.hours[g.days[0]][1],
      })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
