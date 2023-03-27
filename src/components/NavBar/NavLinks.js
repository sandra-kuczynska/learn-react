import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Link } from "react-router-dom";

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
    <ul>
      <li>
        <Link to="#">{t("invoices")}</Link>
      </li>
      <li>
        <Link to="#">EDIT AN INVOICE</Link>
      </li>
      <li>
        <Link to="invoices/add">ADD NEW INVOICE</Link>
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
