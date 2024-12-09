import Cookies from "./Routes/Cookies";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./Navigation/Navbar";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Footer from "./Routes/Footer";
import Notfound from "./Routes/Notfound";
import { useContext } from "react";
import { AuthContext } from "./ContentApi/AuthContextApi";

//SideNavBar
import Sidenavbar from "./Navigation/Sidenavbar";
import Availableitem from "./Routes/Availableitem";
import Foodstuff from "./Routes/Foodstuff";
import Provision from "./Routes/Provision";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
        <Cookies />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidenavbar />}>
          <Route index element={<Availableitem/>} />
          <Route path="/foodstuff" element={<Foodstuff />} />
          <Route path="/provision" element={<Provision />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
