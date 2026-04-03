// =============================================
// ALFACLS2 — Main JS
// Inject semua link dari CONFIG ke DOM
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  const C = window.CONFIG;
  if (!C) return;

  // ── Inject hero image dari config ─────────────
  if (C.heroImage) {
    document.documentElement.style.setProperty(
      '--bg-image', `url('${C.heroImage}')`
    );
  }

  // ── Wire data-link attributes ─────────────────
  // Setiap elemen dengan [data-link="key"] akan dapat href dari CONFIG
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const url = resolveLink(key, C);
    if (!url) return;

    const isExternal = url.startsWith("http");
    const featureKey = el.dataset.feature;

    // Cek feature flag
    if (featureKey && C.features[featureKey] === false) {
      el.classList.add("disabled");
      // Tambah badge "Soon"
      const badge = document.createElement("span");
      badge.className = "badge-soon";
      badge.textContent = "Soon";
      el.appendChild(badge);
      el.removeAttribute("href");
      return;
    }

    el.setAttribute("href", url);
    if (isExternal) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  // ── Inject social links ───────────────────────
  const socials = ["instagram", "tiktok", "linkedin"];
  socials.forEach((platform) => {
    const el = document.querySelector(`[data-social="${platform}"]`);
    if (el && C.social[platform]) {
      el.setAttribute("href", C.social[platform]);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  // ── Inject powered-by text ────────────────────
  document.querySelectorAll("[data-powered-by]").forEach((el) => {
    el.textContent = C.poweredBy;
  });
  document.querySelectorAll("[data-handle]").forEach((el) => {
    el.textContent = C.socialHandle;
  });
});

// Resolve key → URL (cek links dulu, lalu pages)
function resolveLink(key, C) {
  return C.links[key] || C.pages[key] || null;
}
