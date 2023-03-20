import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          invoices: "INVOICES",
        },
      },
      pl: {
        translation: {
          invoices: "FAKTURY",
        },
      },
    },
  });

const NavLinks = () => {
  const { t, i18n } = useTranslation();

  return (
    <ul class="nav-ul" id="nav-ul">
      <li>
        <a href="#">{t("invoices")}</a>
      </li>
      <li>
        <a href="#">EDIT AN INVOICE</a>
      </li>
      <li>
        <a href="#">ADD NEW INVOICE</a>
      </li>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </ul>
  );
};

export default NavLinks;
