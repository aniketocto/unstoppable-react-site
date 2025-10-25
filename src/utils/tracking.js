// src/utils/tracking.js
// ----------------------------------------------------
// ✅ Load order: Clarity → GTM → GA → Mixpanel
// ----------------------------------------------------

/** ---------- MICROSOFT CLARITY ---------- **/
export const initClarity = (clarityId) => {
  if (!clarityId) return;
  if (window.clarity) return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityId);

  console.log("[Tracking] Microsoft Clarity initialized");
};

/** ---------- GOOGLE TAG MANAGER ---------- **/
export const initGTM = (gtmId) => {
  if (!gtmId) return;
  if (document.querySelector(`#gtm-script-${gtmId}`)) return;

  const script = document.createElement("script");
  script.id = `gtm-script-${gtmId}`;
  script.async = true;
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;
  document.head.appendChild(script);

  // Insert GTM noscript in <body>
  const noscriptId = `gtm-noscript-${gtmId}`;
  if (!document.getElementById(noscriptId)) {
    const nos = document.createElement("noscript");
    nos.id = noscriptId;
    nos.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(nos, document.body.firstChild);
  }

  console.log("[Tracking] Google Tag Manager initialized");
};

/** ---------- GOOGLE ANALYTICS ---------- **/
export const initGA = (measurementId) => {
  if (!measurementId) return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { send_page_view: false });
  `;
  document.head.appendChild(s2);

  console.log("[Tracking] Google Analytics initialized");
};

/** ---------- MIXPANEL ---------- **/
export const initMixpanel = (token) => {
  if (!token) return;
  if (window.mixpanel && window.mixpanel.__loaded) return;

  (function (f, b) {
    if (!b.__SV) {
      var a, e, i, g;
      window.mixpanel = b;
      b._i = [];
      b.init = function (a, e, d) {
        function f(b, h) {
          var a = h.split(".");
          2 == a.length && ((b = b[a[0]]), (h = a[1]));
          b[h] = function () {
            b.push([h].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        var c = b;
        "undefined" !== typeof d ? (c = b[d] = []) : (d = "mixpanel");
        c.people = c.people || [];
        c.toString = function (b) {
          var a = "mixpanel";
          "mixpanel" !== d && (a += "." + d);
          b || (a += " (stub)");
          return a;
        };
        c.people.toString = function () {
          return c.toString(1) + ".people (stub)";
        };
        i =
          "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(
            " "
          );
        for (g = 0; g < i.length; g++) f(c, i[g]);
        b._i.push([a, e, d]);
      };
      b.__SV = 1.2;
      a = f.createElement("script");
      a.type = "text/javascript";
      a.async = !0;
      a.src = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
      e = f.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(a, e);
    }
  })(document, window.mixpanel || []);

  window.mixpanel.init(token, {
    api_host: "https://api-eu.mixpanel.com",
    record_sessions_percent: 1,
    record_heatmap_data: true,
  });

  // Example tracking event
  window.mixpanel.track("Video play", {
    genre: "hip-hop",
    "duration in seconds": 42,
  });

  window.mixpanel.__loaded = true;
  console.log("[Tracking] Mixpanel initialized");
};

/** ---------- PAGE VIEW / EVENT HELPERS ---------- **/
export const trackPageView = ({ pathname, search = "" } = {}) => {
  const page_path = pathname + (search || "");

  if (window.gtag) {
    try {
      window.gtag("event", "page_view", { page_path });
    } catch (e) {
      console.error("GA page_view tracking error:", e);
    }
  }

  if (window.mixpanel && window.mixpanel.track) {
    try {
      window.mixpanel.track("Page view", { path: page_path });
    } catch (e) {
      console.error("Mixpanel page_view tracking error:", e);
    }
  }

  if (window.dataLayer) {
    window.dataLayer.push({ event: "page_view", page_path });
  }
};

export const trackEventGA = (name, params = {}) => {
  if (window.gtag) window.gtag("event", name, params);
};
