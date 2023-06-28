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
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='terms-and-conditions' element={<TermsAndConditions />} />
      <Route path='/careers' element={<Careers />} />
    </Routes>
  );
}

export default App;
