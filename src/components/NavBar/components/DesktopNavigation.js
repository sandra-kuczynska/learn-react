import styles from "./Navigation.module.css";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Link } from "react-router-dom";
import routingConfig from "../../../App";

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

const DesktopNavigation = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.DesktopNavigation}>
      <ul>
        {Object.values(routingConfig).map((route) => (
          <li>
            <Link to={route.path}>Add invoice</Link>
          </li>
        ))}
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
    </nav>
  );
};

export default DesktopNavigation;
