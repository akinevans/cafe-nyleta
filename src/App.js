import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* HOME Path is "/" alternatively you can make it "/cafe-nyleta" */}
      <Route path='/' element={<Landing />} />
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
