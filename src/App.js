import "./App.css";
import { Route, Routes, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Careers from "./pages/Careers";
import HamburgerMenuModal from "./components/HamburgerMenuModal/HamburgerMenuModal";

function App() {
  return (
    <Routes>
      {/* HOME Path is "/" alternatively you can make it "/cafe-nyleta" */}
      <Route path='/' element={<Landing />} />
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      {/* //! does item detail need an ":id" in the link? */}
      <Route path='/itemdetail/:id' element={<ItemDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      <Route path='/careers' element={<Careers />} />
      {/* <Route path='' element={<HamburgerMenuModal />} /> */}
    </Routes>
  );
}

export default App;
