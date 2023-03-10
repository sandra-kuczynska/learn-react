import i18next from "i18next";
import "./App.css";
import "normalize.css";
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
          invoice: "invoice",
        },
      },
      pl: {
        translation: {
          invoice: "faktura",
        },
      },
    },
  });

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <nav class="navbar">
        <ul>
          <li>
            <a class="link" href="#">
              {t("invoice")}
            </a>
          </li>
          <li>
            <a class="link" href="#">
              Add new invoice
            </a>
          </li>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                {lngs[lng.nativeName]}
              </button>
            ))}
          </div>
        </ul>
      </nav>

      <section class="table">table</section>
    </div>
  );
};

export default App;
