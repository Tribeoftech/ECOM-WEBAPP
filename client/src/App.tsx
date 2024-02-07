import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./client/src/App.css";
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context";
import { AuthPage } from "./pages/auth";
import { CheckoutPage } from "./pages/checkout";
import { PurchasedItemsPage } from "./pages/purchased-items";
import { ShopPage } from "./pages/shop";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/purchased-items" element={<PurchasedItemsPage />} />
          </Routes>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
