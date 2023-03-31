import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TableInvoices from "./components/TableInvoices/TableInvoices.js";
import Invoice from "./pages/invoice.js";

export const routingConfig = {
  main: {
    path: "/",
    element: <TableInvoices />,
    isInMyMenu: true,
  },
  invoices: {
    path: "/invoices/add",
    element: <Invoice />,
    isInMyMenu: true,
  },
  notFound: {
    path: "*",
    element: <NotFoundPage />,
  },
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path={routingConfig.main.path}
          element={routingConfig.main.element}
        />
        <Route
          path={routingConfig.invoices.path}
          element={routingConfig.invoices.element}
        />

        {/* 404 route */}
        <Route
          path={routingConfig.notFound.path}
          element={routingConfig.notFound.element}
        />
      </Routes>
    </>
  );
};

export default App;
