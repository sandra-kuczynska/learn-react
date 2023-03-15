import i18next from "i18next";
import "./App.css";
import "normalize.css";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(no, created, validUntil, amount, actions) {
  return { no, created, validUntil, amount, actions };
}

const rows = [
  createData("02/22", "02/02/2022", "02/02/2023", 830, "icons"),
  createData("03/22", "02/02/2022", "02/02/2023", 1000, "icons"),
  createData("04/22", "02/02/2022", "02/02/2023", 20, "icons"),
  createData("05/22", "02/02/2022", "02/02/2023", 9000, "icons"),
];

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

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <nav class="navbar">
        <ul>
          <li>
            <a class="link" href="#">
              {t("invoices")}
            </a>
          </li>
          <li>
            <a class="link" href="#">
              EDIT AN INVOICE
            </a>
          </li>
          <li>
            <a class="link" href="#">
              ADD NEW INVOICE
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
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </ul>
      </nav>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Valid Until</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="right">{row.created}</TableCell>
                <TableCell align="right">{row.validUntil}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
