// import {  MobileFooter } from "../components/footer";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import {
  // Navbar
  NavLogo
} from "../components/navbar";
import store from "../redux/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {

  return (
   
    <ReduxProvider store={store}>
      {/* <Navbar  /> */}
      <NavLogo  />
      <Component {...pageProps} />
      {/* <MobileFooter /> */}
    </ReduxProvider>

  );
}

export default MyApp;
