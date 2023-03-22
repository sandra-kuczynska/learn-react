import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundPage from "./NotFoundPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TableInvoices from "./components/TableInvoices/TableInvoices.js";
import Invoice from "./pages/invoice.js";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableInvoices />} />
          <Route path="/invoices/add" element={<Invoice />} />

          {/* 404 rounte */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
