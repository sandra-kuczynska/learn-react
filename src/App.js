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
        {Object.values(routingConfig).map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
