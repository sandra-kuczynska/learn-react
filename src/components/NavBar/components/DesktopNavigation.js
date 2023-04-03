import styles from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routingConfig } from "../../../App";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

const buttonName = (t, routeName) => {
  if (routeName === "main") {
    return t("invoices");
  }
  if (routeName === "invoices") {
    return "ADD INVOICES";
  }
};

const DesktopNavigation = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.DesktopNavigation}>
      <ul>
        {Object.entries(routingConfig).map(([routeName, route]) => (
          <li key={routeName}>
            <Link to={route.path}>{buttonName(t, routeName)}</Link>
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
