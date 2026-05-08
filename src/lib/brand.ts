// Centralized brand constants for Medha Science PU College.
// Editing values here updates the site globally.

export const BRAND = {
  name: "Medha Science PU College",
  short: "Medha PU",
  tagline: "You Deserve The Best Education",
  subtagline:
    "At Medha PU College, you will get the best education as well as best all-round exposure to extra-curricular activities.",
  established: "2012",
  // Official college contacts.
  phone: "+91 79964 20113",
  phoneRaw: "917996420113",
  whatsapp: "917996420113",
  email: "info@medhapuc.com",
  address: {
    line1: "Empire Square Building (3rd Floor)",
    line2: "Shirur Park, Vidya Nagar",
    city: "Hubballi",
    short: "Empire Square, Shirur Park, Vidya Nagar, Hubballi",
  },
  prospectusUrl: "/pdfs/medha-prospectus.pdf",
  toppersUrl: "https://medhapuc.com/pdf/medha-2-puc-results-2021.pdf",
  mapsQuery: "Empire+Square+Shirur+Park+Vidya+Nagar+Hubballi",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

/**
 * Open an arbitrary WhatsApp URL in a new browser tab.
 *
 * IMPORTANT: WhatsApp (wa.me / api.whatsapp.com) refuses to be embedded in
 * iframes (X-Frame-Options / frame-ancestors → ERR_BLOCKED_BY_RESPONSE).
 * So we MUST NEVER navigate the current window or the top window to wa.me
 * inside the Lovable preview iframe — that would replace the preview with
 * a "refused to connect" error page.
 *
 * Strategy: always open WhatsApp in a brand-new tab. The preview itself
 * stays intact and WhatsApp loads in its own top-level browser tab.
 */
export const openWhatsAppUrl = (url: string) => {
  // 1. Standard new-tab open. Works in normal browsing and in most iframes.
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      try { win.opener = null; } catch { /* ignore */ }
      return;
    }
  } catch {
    // Fall through to anchor-click fallback.
  }

  // 2. Fallback: synthesize a real <a target="_blank"> click. Sandboxed
  // iframes that block window.open often still allow user-initiated link
  // navigation, and this still opens a new tab (never replaces the preview).
  try {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch {
    // 3. Last-ditch: do nothing rather than break the preview by navigating
    // it to a blocked WhatsApp URL.
    console.warn("Unable to open WhatsApp link:", url);
  }
};

/**
 * Open the brand's WhatsApp with a pre-filled text message.
 */
export const openWhatsApp = (text: string) => {
  openWhatsAppUrl(waLink(text));
};
