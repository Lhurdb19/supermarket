import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./CartContext/cartContext";
import { ToastContainer } from "react-toastify";
import Home from "./Routes/Home/Home";
import Navbar from "./Navigation/Navbar";
import About from "./Routes/About/About";
import Shop from "./Routes/Shop/shop";
import Beveragies from "./Routes/Beveragies/beveragies";
import Diaryproduct from "./Routes/Diaryproducts/diaryproduct";
import Dailyproductdetail from "./Routes/Diaryproducts/Dailyproductdetail";
import Foodstuff from "./Routes/Foodstuffs/Foodstuff";
import Foodstuffdetails from "./Routes/Foodstuffs/foodstuffdetails";
import Personalcare from "./Routes/Personalcare/personalcare";
import Personalcaredetails from "./Routes/Personalcare/personalcaredetails";
import Petcare from "./Routes/Petcares/petcare";
import Contact from "./Routes/Contacts/Contact";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Cartview from "./CartViewList/cartview";
import Favoritelist from "./Routes/FavoriteData/favoritelist";
import RecentViews from "./Routes/RecentView/recentViews";
import Shippingdetails from "./Routes/Shippingfolder/shippingdetails";
import Shippinglocation from "./Routes/Shippingfolder/shippinglocation";
import Shippingpayment from "./Routes/Shippingfolder/shippingpayment";
import Footer from "./Routes/Footer/Footer";
import Notfound from "./Routes/Notfound/Notfound";
import Provision from "./Routes/Provision/Provision";
import Provisiondetails from "./Routes/Provision/provisiondetails";
import Cookies from "./Routes/Cookies/Cookies";
import { AuthContext } from "./ContentApi/AuthContextApi";

function App() {
  const { isLoggedIn, Logout } = useContext(AuthContext);


  return (
    <CartProvider>
      <div>
        {/* Pass isLoggedIn and Logout to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} Logout={Logout} />

        <Routes>
          {/* Public Routes */}
          {!isLoggedIn && (
            <>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/signin" />} />
              <Route path="/" element={<Home />} />
              <Route path="/provision" element={<Provision />} />
              <Route path="/about" element={<About />} />
              <Route path="/personalcare" element={<Personalcare />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/diaryproduct" element={<Diaryproduct />} />
              <Route path="/cartview" element={<Cartview />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/foodstuff" element={<Foodstuff />} />
              <Route path="*" element={<Notfound />} />
            </>
          )}

          {/* Private Routes */}
          {isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/provision" element={<Provision />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/beveragies" element={<Beveragies />} />
              <Route path="/diaryproduct" element={<Diaryproduct />} />
              <Route path="/dailyproducts/:dailyproduct" element={<Dailyproductdetail/>}/>
              <Route path="/foodstuff" element={<Foodstuff />} />
              <Route path="/foodstuffs/:foodstuffId" element={<Foodstuffdetails />} />
              <Route path="/provisions/:provisionId" element={<Provisiondetails />} />
              <Route path="/personalcare" element={<Personalcare />} />
              <Route path="/personals/:personalId" element={<Personalcaredetails/>}/>
              <Route path="/petcare" element={<Petcare />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cartview" element={<Cartview />} />
              <Route path="/favoritelist" element={<Favoritelist />} />
              <Route path="/shippingdetails" element={<Shippingdetails />} />
              <Route path="/shippinglocation" element={<Shippinglocation />} />
              <Route path="/shippingpayment" element={<Shippingpayment />} />
              <Route path="/recentviews" element={<RecentViews/>}/>
              <Route path="*" element={<Notfound />} />
            </>
          )}
        </Routes>
        <Footer />
        <Cookies />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeButton={true}
        />
      </div>
    </CartProvider>
  );
}

export default App;
