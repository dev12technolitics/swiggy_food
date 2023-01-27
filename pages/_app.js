// import {  MobileFooter } from "../components/footer";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Navbar } from "../components/navbar";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <ReduxProvider store={store}>
      <Navbar  />
      <Component {...pageProps} />
      {/* <MobileFooter /> */}
    </ReduxProvider>
  );
}

export default MyApp;
