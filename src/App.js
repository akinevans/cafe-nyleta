import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Careers from "./pages/Careers";

function App() {
  return (
    <Routes>
      {/* HOME Path is "/" alternatively you can make it "/cafe-nyleta" */}
      <Route path='/cafe-nyleta' element={<Landing />} />
      <Route path='/cafe-nyleta/about' element={<About />} />
      <Route path='/cafe-nyleta/shop' element={<Shop />} />
      <Route path='/cafe-nyleta/contact' element={<Contact />} />
      <Route path='/cafe-nyleta/privacy-policy' element={<PrivacyPolicy />} />
      <Route
        path='/cafe-nyleta/terms-and-conditions'
        element={<TermsAndConditions />}
      />
      <Route path='/cafe-nyleta/careers' element={<Careers />} />
    </Routes>
  );
}

export default App;
