const CONFIG = {
  siteName: "ALFACLS2",
  tagline: "Career Guide",
  poweredBy: "REC CLS 2",
  socialHandle: "@rec_cls2_official",

  heroImage: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774676745/ChatGPT_Image_Mar_28_2026_12_44_07_PM_uiti48.png",

  // ── External Links ──────────────────────────
  links: {
    register: "https://alfakarir.alfamart.co.id/register",
    apply: "https://alfakarir.alfamart.co.id/vacancy?source=alfacls2",
    tanya: "https://chat.alfacls2.my.id",
    youtube: "https://www.youtube.com/@rec_cls2_official",
  },

  // ── Internal Pages ───────────────────────────
  pages: {
    flow: "/pages/flow.html",
    faq: "/pages/faq.html",
    tanya: "/pages/tanya.html",
    testimonial: "/pages/testimonial.html",
  },

  // ── Social Media ─────────────────────────────
  social: {
    instagram: "https://instagram.com/rec_cls2_official",
    tiktok: "https://tiktok.com/@rec_cls2_official",
    linkedin: "https://linkedin.com/company/alfamart",
  },

  // ── Feature Flags ────────────────────────────
  features: {
    faq: false,
    testimonial: true,
    tanya: true,
  },
};

window.CONFIG = CONFIG;
