import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import TableInvoices from "./components/TableInvoices/TableInvoices.js";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <TableInvoices />
    </div>
  );
};

export default App;
