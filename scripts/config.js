// =============================================
// ALFACLS2 — Central Config
// Ganti URL di sini, semua halaman akan ikut
// =============================================

const CONFIG = {
  siteName: "ALFACLS2",
  tagline: "Career Guide",
  poweredBy: "REC CLS 2",
  socialHandle: "@rec_cls2_official",

  // ── External Links ──────────────────────────
  links: {
    register: "https://alfakarir.alfamart.co.id/register",
    apply:    "https://alfakarir.alfamart.co.id/vacancy?source=alfacls2",
    tanya:    "https://chat.alfacls2.my.id",
    youtube:  "https://www.youtube.com/@rec_cls2_official", // ganti dengan link playlist testimonial
  },

  // ── Internal Pages ───────────────────────────
  pages: {
    flow:        "/pages/flow.html",
    faq:         "/pages/faq.html",
    tanya:       "/pages/tanya.html",
    testimonial: "/pages/testimonial.html",
  },

  // ── Social Media ─────────────────────────────
  social: {
    instagram: "https://instagram.com/rec_cls2_official",
    tiktok:    "https://tiktok.com/@rec_cls2_official",
    linkedin:  "https://linkedin.com/company/alfamart",
  },

  // ── Feature Flags ────────────────────────────
  // Set false untuk nonaktifkan tombol (tampil "coming soon")
  features: {
    faq:         false,  // ← coming soon
    testimonial: true,
    tanya:       true,
  },
};

// Expose globally
window.CONFIG = CONFIG;
