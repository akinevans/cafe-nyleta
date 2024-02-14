import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* HashRouter being used instead of BrowserRouter. This allows github pages to use browser history functionality. May need to revert to BrowserRouter once  project is complete. */}
    <Provider store={store}>
      <BrowserRouter>
        <Navbar quantity='0' />
        <PersistGate loading={"Loading"} persistor={persistor}>
          <App />
        </PersistGate>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
