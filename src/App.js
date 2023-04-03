import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TableInvoices from "./pages/TableInvoices.js";
import Invoice from "./pages/invoice.js";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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

export const routingConfig = {
  main: {
    path: "/",
    element: <TableInvoices />,
    menuButtonTranslationKey: true,
  },
  invoices: {
    path: "/invoices",
    element: <Invoice />,
    menuButtonTranslationKey: true,
  },
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {Object.values(routingConfig).map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        <Route path="*" element={NotFoundPage}></Route>
      </Routes>
    </>
  );
};

export default App;
