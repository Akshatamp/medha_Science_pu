import { MessageCircle } from "lucide-react";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const FloatingSocial = () => {
  const enquireText = `Hi, I'd like to enquire about ${BRAND.name}`;
  const admissionsText = `Hi, I'm interested in admissions at ${BRAND.name}`;

  return (
    <>
      <a
        href={waLink(enquireText)}
        onClick={(e) => {
          e.preventDefault();
          openWhatsApp(enquireText);
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-lg bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-xl shadow-[hsl(142,70%,45%)]/30 hover:shadow-2xl transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="fixed bottom-20 left-4 sm:hidden z-50">
        <a
          href={waLink(admissionsText)}
          onClick={(e) => {
            e.preventDefault();
            openWhatsApp(admissionsText);
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs font-mono-brand tracking-widest shadow-xl shadow-primary/30"
        >
          ENQUIRY
        </a>
      </div>

      <div className="fixed top-1/3 right-0 z-40 hidden lg:block">
        <a
          href={BRAND.prospectusUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-2.5 py-6 rounded-l-md text-[9px] font-mono-brand tracking-widest shadow-lg hover:px-3.5 transition-all"
          style={{ writingMode: "vertical-lr" }}
        >
          DOWNLOAD PROSPECTUS
        </a>
      </div>
    </>
  );
};

export default FloatingSocial;
