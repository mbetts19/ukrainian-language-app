import '../styles/styles.css';  // ✅ Import the global CSS file
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
