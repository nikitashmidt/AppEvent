import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatalogPage from "./pages/catalog";
import BasketPage from "./pages/basket";
import HomePage from "./pages/home";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
