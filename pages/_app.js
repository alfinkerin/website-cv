import "../styles/globals.css";
import "../styles/navbar.css";

import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
