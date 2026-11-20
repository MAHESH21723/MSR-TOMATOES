/* MSR Tomatoes: language switch, navigation, scroll effects, route map, WhatsApp enquiry */
(function () {
  "use strict";

  var PHONE = "919787742175";

  // ------------------------------------------------------------------ translations
  var T = {
    en: {
      skip: "Skip to content",
      brand: "Tomatoes",
      "nav.about": "About", "nav.products": "Products", "nav.process": "Process", "nav.network": "Network", "nav.contact": "Contact",
      "cta.call": "Call now", "cta.callShort": "Call now", "cta.wa": "WhatsApp us", "cta.order": "Place a bulk order",
      "hero.badge": "Open 24 hours · 7 days",
      "hero.eyebrow": "Wholesale Tomato Dealers · Tenkasi, Tamil Nadu",
      "hero.title": "Farm-fresh tomatoes,<br><em>delivered across India.</em>",
      "hero.sub": "MSR Tomatoes supplies quality tomatoes in bulk to wholesalers, retailers and businesses all over India, straight from the farms of Tenkasi.",
      "hl.india": "All-India supply", "hl.fresh": "Fresh every day", "hl.bulk": "Bulk & wholesale", "hl.always": "Available 24/7",
      "mq.1": "Hybrid tomatoes", "mq.2": "Country tomatoes", "mq.3": "Graded lots", "mq.4": "Bulk loads", "mq.5": "Pan-India dispatch", "mq.6": "Open 24/7",
      stamp: "FRESH FROM TENKASI · FARM TO MARKET ·",
      "about.eyebrow": "About us",
      "about.title": "Rooted in Tenkasi.<br>Trusted across India.",
      "about.text": "From our main office in Tenkasi, at the foot of the Western Ghats, we work directly with local farmers to bring the best of every harvest to markets across the country. Every load is hand-checked, graded and packed so it reaches you fresh.",
      "about.p1": "Direct from farmers", "about.p2": "Hand-checked quality", "about.p3": "Fair wholesale prices", "about.p4": "On-time dispatch",
      "prod.eyebrow": "Our produce", "prod.title": "What we supply",
      "prod.sub": "Choose the variety and grade that fits your market. We load what you need, when you need it.",
      "prod.1.tag": "Long shelf life", "prod.1.t": "Hybrid tomatoes", "prod.1.d": "Firm, uniform and long-lasting. Ideal for long-distance transport.",
      "prod.2.tag": "Traditional taste", "prod.2.t": "Country tomatoes", "prod.2.d": "The traditional nattu variety, juicy and tangy. Loved in South Indian kitchens.",
      "prod.3.tag": "Sorted for you", "prod.3.t": "Graded & sorted lots", "prod.3.d": "Sorted by size and ripeness for retailers, hotels and food processors.",
      "prod.4.tag": "Any quantity", "prod.4.t": "Bulk & regular supply", "prod.4.d": "Daily or weekly loads for wholesalers and businesses, planned with you.",
      "proc.eyebrow": "How it works", "proc.title": "From farm to your market",
      "proc.1.t": "Sourced", "proc.1.d": "Picked fresh from trusted farms around Tenkasi.",
      "proc.2.t": "Sorted & graded", "proc.2.d": "Checked by hand and graded by size and ripeness.",
      "proc.3.t": "Packed", "proc.3.d": "Packed in sturdy crates to stay fresh on the road.",
      "proc.4.t": "Dispatched", "proc.4.d": "Loaded and sent on time to markets across India.",
      "net.eyebrow": "Pan-India supply", "net.title": "Supplying markets all over India",
      "net.text": "From Tenkasi, our loads reach wholesale markets in every direction: north, east and west. Tell us your city and we will plan the delivery.",
      "serve.title": "Who we serve", "serve.1": "Wholesalers & mandis", "serve.2": "Retailers & supermarkets", "serve.3": "Hotels & caterers", "serve.4": "Food processors",
      "gal.eyebrow": "Gallery", "gal.title": "Fresh from the fields",
      "ct.eyebrow": "Contact", "ct.title": "Let's talk tomatoes",
      "ct.sub": "Call or WhatsApp any time. We are available 24 hours a day, 7 days a week.",
      "ct.phone": "Phone", "ct.email": "Email", "ct.office": "Main office", "ct.addr": "Tenkasi, Tamil Nadu, India",
      "ct.hours": "Hours", "ct.open": "Open 24 hours, every day", "ct.now": "Open now", "ct.dir": "Get directions",
      "form.title": "Quick enquiry", "form.note": "Opens WhatsApp with your enquiry ready to send.",
      "form.name": "Your name", "form.city": "City", "form.qty": "Quantity needed", "form.qtyPh": "e.g. 2 tonnes",
      "form.variety": "Variety", "form.any": "Any / not sure", "form.msg": "Message", "form.send": "Send on WhatsApp",
      "form.hello": "Hello MSR Tomatoes, I would like to enquire about a tomato order.",
      "form.lName": "Name", "form.lCity": "City", "form.lQty": "Quantity", "form.lVariety": "Variety", "form.lMsg": "Message",
      "ft.tag": "Wholesale tomato dealers · Tenkasi, Tamil Nadu. Supplying all over India.",
      "ft.rights": "All rights reserved.", "ft.photos": "Photo credits", "ft.by": "Website by",
      "map.hub": "Tenkasi",
      "wa.default": "Hello MSR Tomatoes, I would like to know about tomato prices and supply.",
      title: "MSR Tomatoes | Wholesale Tomato Dealers, Tenkasi, Tamil Nadu"
    },
    ta: {
      skip: "உள்ளடக்கத்திற்குச் செல்ல",
      brand: "தக்காளி",
      "nav.about": "நாங்கள்", "nav.products": "பொருட்கள்", "nav.process": "செயல்முறை", "nav.network": "விநியோகம்", "nav.contact": "தொடர்பு",
      "cta.call": "இப்போதே அழைக்கவும்", "cta.callShort": "அழைக்க", "cta.wa": "வாட்ஸ்அப் செய்யவும்", "cta.order": "மொத்த ஆர்டர் செய்ய",
      "hero.badge": "24 மணி நேரமும் · வாரத்தின் 7 நாட்களும்",
      "hero.eyebrow": "மொத்த தக்காளி வியாபாரிகள் · தென்காசி, தமிழ்நாடு",
      "hero.title": "பண்ணையிலிருந்து நேரடியாக<br><em>இந்தியா முழுவதும் புதிய தக்காளி.</em>",
      "hero.sub": "தென்காசி பண்ணைகளிலிருந்து நேரடியாக, இந்தியா முழுவதும் உள்ள மொத்த வியாபாரிகள், சில்லறை விற்பனையாளர்கள் மற்றும் நிறுவனங்களுக்கு தரமான தக்காளியை மொத்தமாக வழங்குகிறோம்.",
      "hl.india": "இந்தியா முழுவதும் விநியோகம்", "hl.fresh": "தினமும் புதியது", "hl.bulk": "மொத்த விற்பனை", "hl.always": "24/7 சேவை",
      "mq.1": "ஹைப்ரிட் தக்காளி", "mq.2": "நாட்டுத் தக்காளி", "mq.3": "தரம் பிரித்த சரக்கு", "mq.4": "மொத்த லோடுகள்", "mq.5": "இந்தியா முழுவதும் அனுப்புதல்", "mq.6": "24/7 திறந்திருக்கும்",
      stamp: "தென்காசியிலிருந்து புதியது · பண்ணை முதல் சந்தை வரை ·",
      "about.eyebrow": "எங்களைப் பற்றி",
      "about.title": "தென்காசியில் வேரூன்றி,<br>இந்தியா முழுவதும் நம்பிக்கை.",
      "about.text": "மேற்குத் தொடர்ச்சி மலையின் அடிவாரத்தில் உள்ள தென்காசியில் எங்கள் தலைமை அலுவலகம் அமைந்துள்ளது. உள்ளூர் விவசாயிகளுடன் நேரடியாக இணைந்து, ஒவ்வொரு அறுவடையின் சிறந்த தக்காளியை நாடு முழுவதும் உள்ள சந்தைகளுக்குக் கொண்டு சேர்க்கிறோம். ஒவ்வொரு சரக்கும் கையால் சரிபார்க்கப்பட்டு, தரம் பிரிக்கப்பட்டு, புதிதாக உங்களை வந்தடையும்படி பேக் செய்யப்படுகிறது.",
      "about.p1": "விவசாயிகளிடமிருந்து நேரடியாக", "about.p2": "கையால் சரிபார்த்த தரம்", "about.p3": "நியாயமான மொத்த விலை", "about.p4": "சரியான நேரத்தில் அனுப்புதல்",
      "prod.eyebrow": "எங்கள் விளைபொருட்கள்", "prod.title": "நாங்கள் வழங்குபவை",
      "prod.sub": "உங்கள் சந்தைக்கு ஏற்ற வகையையும் தரத்தையும் தேர்ந்தெடுங்கள். உங்களுக்குத் தேவையானதை, தேவைப்படும் நேரத்தில் ஏற்றி அனுப்புகிறோம்.",
      "prod.1.tag": "நீண்ட நாள் தாங்கும்", "prod.1.t": "ஹைப்ரிட் தக்காளி", "prod.1.d": "உறுதியானது, ஒரே அளவு, நீண்ட நாள் கெடாது. தொலைதூரப் போக்குவரத்துக்கு ஏற்றது.",
      "prod.2.tag": "பாரம்பரிய சுவை", "prod.2.t": "நாட்டுத் தக்காளி", "prod.2.d": "சாறு நிறைந்த, புளிப்புச் சுவையுள்ள பாரம்பரிய வகை. தென்னிந்திய சமையலுக்கு மிகவும் விருப்பமானது.",
      "prod.3.tag": "உங்களுக்காக தரம் பிரித்தது", "prod.3.t": "தரம் பிரித்த சரக்குகள்", "prod.3.d": "சில்லறை கடைகள், உணவகங்கள், உணவு பதப்படுத்தும் நிறுவனங்களுக்காக அளவு மற்றும் பழுப்பு நிலைப்படி பிரிக்கப்பட்டது.",
      "prod.4.tag": "எந்த அளவிலும்", "prod.4.t": "மொத்த & தொடர் விநியோகம்", "prod.4.d": "மொத்த வியாபாரிகள் மற்றும் நிறுவனங்களுக்கு, உங்களுடன் திட்டமிட்டு தினசரி அல்லது வாராந்திர லோடுகள்.",
      "proc.eyebrow": "எப்படி செயல்படுகிறோம்", "proc.title": "பண்ணையிலிருந்து உங்கள் சந்தை வரை",
      "proc.1.t": "கொள்முதல்", "proc.1.d": "தென்காசியைச் சுற்றியுள்ள நம்பகமான பண்ணைகளிலிருந்து புதிதாகப் பறிக்கப்படுகிறது.",
      "proc.2.t": "தரம் பிரித்தல்", "proc.2.d": "கையால் சரிபார்த்து, அளவு மற்றும் பழுப்பு நிலைப்படி தரம் பிரிக்கப்படுகிறது.",
      "proc.3.t": "பேக்கிங்", "proc.3.d": "பயணத்திலும் புதிதாக இருக்க உறுதியான கூடைகளில் அடுக்கப்படுகிறது.",
      "proc.4.t": "அனுப்புதல்", "proc.4.d": "இந்தியா முழுவதும் உள்ள சந்தைகளுக்கு சரியான நேரத்தில் ஏற்றி அனுப்பப்படுகிறது.",
      "net.eyebrow": "இந்தியா முழுவதும் விநியோகம்", "net.title": "இந்தியா முழுவதும் உள்ள சந்தைகளுக்கு",
      "net.text": "தென்காசியிலிருந்து எங்கள் லோடுகள் வடக்கு, கிழக்கு, மேற்கு என எல்லாத் திசைகளிலும் உள்ள மொத்தச் சந்தைகளைச் சென்றடைகின்றன. உங்கள் நகரத்தைச் சொல்லுங்கள், டெலிவரியை நாங்கள் திட்டமிடுகிறோம்.",
      "serve.title": "யாருக்கு சேவை செய்கிறோம்", "serve.1": "மொத்த வியாபாரிகள் & மண்டிகள்", "serve.2": "சில்லறை கடைகள் & சூப்பர் மார்க்கெட்டுகள்", "serve.3": "உணவகங்கள் & கேட்டரிங்", "serve.4": "உணவு பதப்படுத்தும் நிறுவனங்கள்",
      "gal.eyebrow": "படத்தொகுப்பு", "gal.title": "வயல்களிலிருந்து புதிதாக",
      "ct.eyebrow": "தொடர்பு", "ct.title": "தக்காளி தேவையா? பேசுவோம்",
      "ct.sub": "எப்போது வேண்டுமானாலும் அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும். நாங்கள் 24 மணி நேரமும், வாரத்தின் 7 நாட்களும் உங்களுக்காக இருக்கிறோம்.",
      "ct.phone": "தொலைபேசி", "ct.email": "மின்னஞ்சல்", "ct.office": "தலைமை அலுவலகம்", "ct.addr": "தென்காசி, தமிழ்நாடு, இந்தியா",
      "ct.hours": "நேரம்", "ct.open": "எல்லா நாட்களும் 24 மணி நேரமும் திறந்திருக்கும்", "ct.now": "இப்போது திறந்துள்ளது", "ct.dir": "வழி காட்டு",
      "form.title": "விரைவு விசாரணை", "form.note": "உங்கள் விசாரணையுடன் வாட்ஸ்அப் திறக்கும், அனுப்பினால் போதும்.",
      "form.name": "உங்கள் பெயர்", "form.city": "நகரம்", "form.qty": "தேவையான அளவு", "form.qtyPh": "எ.கா. 2 டன்",
      "form.variety": "வகை", "form.any": "ஏதேனும் / உறுதியாகத் தெரியவில்லை", "form.msg": "செய்தி", "form.send": "வாட்ஸ்அப்பில் அனுப்பு",
      "form.hello": "வணக்கம் MSR தக்காளி, தக்காளி ஆர்டர் பற்றி விசாரிக்க விரும்புகிறேன்.",
      "form.lName": "பெயர்", "form.lCity": "நகரம்", "form.lQty": "அளவு", "form.lVariety": "வகை", "form.lMsg": "செய்தி",
      "ft.tag": "மொத்த தக்காளி வியாபாரிகள் · தென்காசி, தமிழ்நாடு. இந்தியா முழுவதும் விநியோகம்.",
      "ft.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", "ft.photos": "புகைப்பட நன்றி", "ft.by": "இணையதள வடிவமைப்பு:",
      "map.hub": "தென்காசி",
      "wa.default": "வணக்கம் MSR தக்காளி, தக்காளி விலை மற்றும் விநியோகம் பற்றி அறிய விரும்புகிறேன்.",
      title: "MSR தக்காளி | மொத்த தக்காளி வியாபாரிகள், தென்காசி, தமிழ்நாடு"
    }
  };

  var lang = "en";
  try { lang = localStorage.getItem("msr-lang") || (navigator.language || "").toLowerCase().indexOf("ta") === 0 && "ta" || "en"; } catch (e) { /* storage blocked */ }
  var qlang = /[?&]lang=(en|ta)/.exec(location.search); // shareable ?lang=ta links
  if (qlang) lang = qlang[1];
  if (!T[lang]) lang = "en";

  function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || ""; }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(t("wa.default")); });
    var hub = document.getElementById("rmHubLabel");
    if (hub) hub.textContent = t("map.hub");
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "ta" : "en";
    try { localStorage.setItem("msr-lang", lang); } catch (e) { /* ignore */ }
    applyLang();
  });

  // ------------------------------------------------------------------ nav
  var nav = document.querySelector(".nav");
  var burger = document.getElementById("burger");
  var fab = document.querySelector(".fab");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); });
  });

  var heroBg = document.querySelector(".hero__bg");
  var inContact = false; // the contact section has its own call/WhatsApp buttons
  new IntersectionObserver(function (es) { inContact = es[0].isIntersecting; onScroll(); }, { rootMargin: "0px 0px -30% 0px" }).observe(document.getElementById("contact"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 40);
    fab.classList.toggle("is-shown", y > window.innerHeight * 0.6 && !inContact);
    if (heroBg && !reduce && y < window.innerHeight * 1.2) heroBg.style.transform = "translate3d(0," + (y * 0.25) + "px,0) scale(1.08)";
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // active section highlight
  var links = {};
  document.querySelectorAll(".nav__links a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var secObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && links[e.target.id]) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); });
        links[e.target.id].classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { secObs.observe(s); });

  // ------------------------------------------------------------------ reveal on scroll
  if (/[?&]still(?:[&=]|$)/.test(location.search)) { // screenshots: show everything, re-scroll after images load
    document.documentElement.classList.add("still");
    window.addEventListener("load", function () { var h = location.hash && document.querySelector(location.hash); if (h) h.scrollIntoView(); });
  }
  var vhm = /[?&]vh=(\d+)/.exec(location.search); // screenshots: fixed hero height inside a tall frame
  if (vhm) document.documentElement.style.setProperty("--still-vh", vhm[1] + "px");
  var groups = new Map();
  document.querySelectorAll(".reveal").forEach(function (el) {
    var p = el.parentElement;
    var i = groups.get(p) || 0;
    groups.set(p, i + 1);
    el.style.setProperty("--d", Math.min(i * 0.08, 0.5) + "s");
  });
  var revObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); revObs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { revObs.observe(el); });

  // ------------------------------------------------------------------ 3D tilt (pointer devices)
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".tilt").forEach(function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width - 0.5, y = (ev.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(900px) rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 8) + "deg) translateY(-4px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  // ------------------------------------------------------------------ route map (Tenkasi to markets across India)
  var svg = document.getElementById("routeMap");
  if (svg) buildRouteMap(svg);

  function buildRouteMap(svg) {
    var NS = "http://www.w3.org/2000/svg";
    // simple lon/lat projection for the Indian region (no borders drawn)
    function px(lon, lat) { return [95 + (lon - 70.5) / (90.5 - 70.5) * 440, 680 - (lat - 7.8) / (29.8 - 7.8) * 630]; }
    var hub = { lon: 77.3161, lat: 8.9604 };
    var cities = [
      ["Delhi", 77.21, 28.61], ["Jaipur", 75.79, 26.91], ["Lucknow", 80.95, 26.85], ["Ahmedabad", 72.57, 23.02],
      ["Kolkata", 88.36, 22.57], ["Nagpur", 79.09, 21.15], ["Mumbai", 72.88, 19.08], ["Pune", 73.86, 18.52],
      ["Hyderabad", 78.49, 17.39], ["Visakhapatnam", 83.22, 17.69], ["Bengaluru", 77.59, 12.97], ["Chennai", 80.27, 13.08],
      ["Coimbatore", 76.96, 11.02], ["Madurai", 78.12, 9.93], ["Kochi", 76.27, 9.93], ["Thiruvananthapuram", 76.94, 8.52]
    ];
    var label = { "Thiruvananthapuram": "Trivandrum" };
    var anchorLeft = { "Ahmedabad": 1, "Mumbai": 1, "Kochi": 1, "Coimbatore": 1, "Jaipur": 1, "Thiruvananthapuram": 1, "Bengaluru": 1, "Hyderabad": 1 };
    var below = { "Pune": 1 };

    function el(name, attrs, parent) {
      var n = document.createElementNS(NS, name);
      for (var k in attrs) n.setAttribute(k, attrs[k]);
      (parent || svg).appendChild(n);
      return n;
    }

    var defs = el("defs", {});
    var g = el("linearGradient", { id: "routeGrad", x1: "0", y1: "1", x2: "0", y2: "0" }, defs);
    el("stop", { offset: "0", "stop-color": "#d7261b" }, g);
    el("stop", { offset: "1", "stop-color": "#ff9b45" }, g);

    // dotted backdrop
    var grid = el("g", { "class": "rm-grid" });
    for (var gx = 20; gx < 600; gx += 22) for (var gy = 20; gy < 720; gy += 22) el("circle", { cx: gx, cy: gy, r: 1.4 }, grid);

    var h = px(hub.lon, hub.lat);
    var routes = el("g", {});
    var dots = el("g", {});
    var trucks = el("g", {});
    cities.forEach(function (c, i) {
      var p = px(c[1], c[2]);
      var mx = (h[0] + p[0]) / 2, my = (h[1] + p[1]) / 2;
      var dx = p[0] - h[0], dy = p[1] - h[1];
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      var bend = Math.min(90, len * 0.22) * (p[0] < h[0] ? -1 : 1);
      var cx = mx - dy / len * bend, cy = my + dx / len * bend;
      var d = "M" + h[0].toFixed(1) + "," + h[1].toFixed(1) + " Q" + cx.toFixed(1) + "," + cy.toFixed(1) + " " + p[0].toFixed(1) + "," + p[1].toFixed(1);
      var path = el("path", { d: d, "class": "rm-route rm-route--draw", id: "rt" + i }, routes);
      var L = path.getTotalLength ? path.getTotalLength() : 600;
      path.style.setProperty("--len", L.toFixed(0));
      path.style.transitionDelay = (0.15 + i * 0.07) + "s";
      // truck dot travelling along the route
      if (!reduce) {
        var tr = el("circle", { r: 4.2, "class": "rm-truck" }, trucks);
        var am = el("animateMotion", { dur: (3.2 + (i % 5) * 0.55).toFixed(2) + "s", repeatCount: "indefinite", begin: (1.6 + i * 0.25).toFixed(2) + "s", rotate: "auto" }, tr);
        el("mpath", { href: "#rt" + i }, am);
        tr.setAttribute("opacity", "0");
        el("set", { attributeName: "opacity", to: "1", begin: (1.6 + i * 0.25).toFixed(2) + "s" }, tr);
      }
      var cg = el("g", { "class": "rm-city" }, dots);
      el("circle", { cx: p[0].toFixed(1), cy: p[1].toFixed(1), r: 5.5 }, cg);
      var left = anchorLeft[c[0]];
      var dn = below[c[0]];
      var tx = el("text", { x: (p[0] + (dn ? 0 : left ? -10 : 10)).toFixed(1), y: (p[1] + (dn ? 22 : 5)).toFixed(1), "text-anchor": dn ? "middle" : left ? "end" : "start" }, cg);
      tx.textContent = label[c[0]] || c[0];
    });

    var hubG = el("g", { "class": "rm-hub" });
    el("circle", { cx: h[0], cy: h[1], r: 9, "class": "pulse" }, hubG);
    el("circle", { cx: h[0], cy: h[1], r: 9, "class": "pulse p2" }, hubG);
    el("circle", { cx: h[0], cy: h[1], r: 9, "class": "core" }, hubG);
    var ht = el("text", { x: h[0] + 16, y: h[1] + 30, id: "rmHubLabel" }, hubG);
    ht.textContent = t("map.hub");

    var mo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { svg.parentElement.classList.add("is-visible"); mo.disconnect(); } });
    }, { threshold: 0.25 });
    mo.observe(svg);
    if (document.documentElement.classList.contains("still")) svg.parentElement.classList.add("is-visible");
  }

  // ------------------------------------------------------------------ WhatsApp enquiry
  var form = document.getElementById("enquiry");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var f = form.elements, ok = true;
    ["name", "city"].forEach(function (n) {
      var bad = !f[n].value.trim();
      f[n].classList.toggle("is-invalid", bad);
      if (bad && ok) { f[n].focus(); ok = false; }
    });
    if (!ok) return;
    var lines = [t("form.hello"), "",
      t("form.lName") + ": " + f.name.value.trim(),
      t("form.lCity") + ": " + f.city.value.trim()];
    if (f.qty.value.trim()) lines.push(t("form.lQty") + ": " + f.qty.value.trim());
    lines.push(t("form.lVariety") + ": " + f.variety.options[f.variety.selectedIndex].text);
    if (f.msg.value.trim()) lines.push(t("form.lMsg") + ": " + f.msg.value.trim());
    window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });
  form.querySelectorAll("input").forEach(function (i) { i.addEventListener("input", function () { i.classList.remove("is-invalid"); }); });

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  applyLang();
})();
