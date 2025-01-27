import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./Routes/FavoriteData/favoritecontext";
import { CartProvider } from "./CartContext/cartContext";
import { AuthProvider } from "./ContentApi/AuthContextApi";
import { RecentViewsProvider } from "./Routes/RecentView/recentViewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecentViewsProvider>
        <FavoritesProvider>
          <CartProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartProvider>
        </FavoritesProvider>
      </RecentViewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
