import Cookies from "./Routes/Cookies";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext/cartContext";
import { ToastContainer } from "react-toastify";
import Home from "./Routes/Home";
import Navbar from "./Navigation/Navbar";
import About from "./Routes/About/About";
import Shop from "./Routes/shop";
import Beveragies from "./Routes/beveragies";
import Diaryproduct from "./Routes/diaryproduct";
import Foodstuff from "./Routes/Foodstuff";
import Foodstuffdetails from "./Routes/foodstuffdetails";
import Personalcare from "./Routes/personalcare";
import Petcare from "./Routes/petcare";
import Contact from "./Routes/Contact";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Cartview from "./CartViewList/cartview";
import { useFavorites } from "./Routes/FavoriteData/favoritecontext";
import Favoritelist from "./Routes/FavoriteData/favoritelist";
import Shippingdetails from "./Routes/Shippingfolder/shippingdetails";
import Shippinglocation from "./Routes/Shippingfolder/shippinglocation";
import Shippingpayment from "./Routes/Shippingfolder/shippingpayment";
import Footer from "./Routes/Footer";
import Notfound from "./Routes/Notfound";
import { useContext } from "react";
import { AuthContext } from "./ContentApi/AuthContextApi";

//SideNavBar
import Sidenavbar from "./Navigation/Sidenavbar";
import Availableitem from "./Routes/Availableitem";
import Provision from "./Routes/Provision";
// import Shippingdetails from "./Routes/Shippingfolder/shippingdetails";
// import Shippinglocation from "./Routes/Shippingfolder/shippinglocation";
// import Shippingpayment from "./Routes/Shippingfolder/shippingpayment";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return (
      <CartProvider>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/provision" element={<Provision />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/beveragies" element={<Beveragies />} />
              <Route path="/diaryproduct" element={<Diaryproduct />} />
              <Route path="/foodstuff" element={<Foodstuff />} />
              <Route path="/foodstuffs/:foodstuffId" element={<Foodstuffdetails/>}/>
              <Route path="/personalcare" element={<Personalcare />} />
              <Route path="/petcare" element={<Petcare />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cartview" element={<Cartview />} />
              <Route path="/favoritecontext" element={<useFavorites/>}/>
              <Route path="/favoritelist" element={<Favoritelist/>}/>
              <Route path="/shippingdetails" element={<Shippingdetails />} />
              <Route path="/shippinglocation" element={<Shippinglocation />} />
              <Route path="/shippingpayment" element={<Shippingpayment />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
          <Cookies />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeButton={true}
        />
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Sidenavbar />}>
            <Route index element={<Availableitem />} />
            <Route path="/foodstuff" element={<Foodstuff />} />
            <Route path="/provision" element={<Provision />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
        <Footer />
        <Cookies />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeButton={true}
      />
    </CartProvider>
  );
}

export default App;
