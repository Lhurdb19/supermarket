import Cookies from "./Routes/Cookies/Cookies";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext/cartContext";
import { ToastContainer } from "react-toastify";
import Home from "./Routes/Home/Home";
import Navbar from "./Navigation/Navbar";
import About from "./Routes/About/About";
import Shop from "./Routes/Shop/shop";
import Beveragies from "./Routes/Beveragies/beveragies";
import Diaryproduct from "./Routes/Diaryproducts/diaryproduct";
import Foodstuff from "./Routes/Foodstuffs/Foodstuff";
import Foodstuffdetails from "./Routes/Foodstuffs/foodstuffdetails";
import Personalcare from "./Routes/Personalcare/personalcare";
import Petcare from "./Routes/Petcares/petcare";
import Contact from "./Routes/Contacts/Contact";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Cartview from "./CartViewList/cartview";
import { useFavorites } from "./Routes/FavoriteData/favoritecontext";
import Favoritelist from "./Routes/FavoriteData/favoritelist";
import Shippingdetails from "./Routes/Shippingfolder/shippingdetails";
import Shippinglocation from "./Routes/Shippingfolder/shippinglocation";
import Shippingpayment from "./Routes/Shippingfolder/shippingpayment";
import Footer from "./Routes/Footer/Footer";
import Notfound from "./Routes/Notfound/Notfound";
import { useContext } from "react";
import { AuthContext } from "./ContentApi/AuthContextApi";

//SideNavBar
import Sidenavbar from "./Navigation/Sidenavbar";
import Availableitem from "./Routes/Available/Availableitem";
import Provision from "./Routes/Provision/Provision";
import Provisiondetails from "./Routes/Provision/provisiondetails";
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
              <Route path="/foodstuffs/:foodstuffId" element={<Foodstuffdetails />} />
              <Route path="/provision" element={<Provision />} />
              <Route path="/provisions/:provisionId" element={<Provisiondetails/>}/>
              <Route path="/personalcare" element={<Personalcare />} />
              <Route path="/petcare" element={<Petcare />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cartview" element={<Cartview />} />
              <Route path="/favoritecontext" element={<useFavorites />} />
              <Route path="/favoritelist" element={<Favoritelist />} />
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
