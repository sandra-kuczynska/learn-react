import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TableInvoices from "./components/TableInvoices/TableInvoices.js";
import Invoice from "./pages/invoice.js";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TableInvoices />} />
        <Route path="invoices/add" element={<Invoice />} />

        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
