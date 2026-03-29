import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const { t, isAr } = useLanguage();

  const serviceLinks = [
    { label: t("footer.aiSeo"), to: "/services" },
    { label: t("footer.technicalSeo"), to: "/services" },
    { label: t("footer.contentStrategy"), to: "/services" },
    { label: t("footer.localSeo"), to: "/services" },
    { label: t("footer.arabicSeo"), to: "/services" },
    { label: t("footer.linkBuilding"), to: "/services" },
  ];

  const companyLinks = [
    { label: t("footer.aboutUs"), to: "/about" },
    { label: t("footer.caseStudies"), to: "/case-studies" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="relative bg-white text-slate-700 border-t border-slate-200">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#7143E0] via-[#FECD4D] to-[#7143E0]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-slate-600 hover:text-[#7143E0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-slate-600 hover:text-[#7143E0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:akhmad@constantlabs.ai"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#7143E0] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span dir="ltr">akhmad@constantlabs.ai</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+971561495656"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#7143E0] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span dir="ltr">+971 56 149 5656</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {t("footer.location")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#F5F5F8] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#2B124C]">ConstantSEO</span>
            <span className="text-[10px] text-[#7143E0] font-medium ml-1">by Constant Labs</span>
          </div>

          <p className="text-xs text-slate-500">
            &copy; {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-[#7143E0] transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-[#7143E0] transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
