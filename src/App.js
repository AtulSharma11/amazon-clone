import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckoutPage />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
