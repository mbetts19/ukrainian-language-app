import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAstuZtGOSGJWzMB-ZGanmWnzrt_LgxizA",
  authDomain: "ukrainian-language-app.firebaseapp.com",
  projectId: "ukrainian-language-app",
  storageBucket: "ukrainian-language-app.appspot.com", // ✅ Fixed the typo
  messagingSenderId: "960983935792",
  appId: "1:960983935792:web:1e90ee428171ec27ed36f5",
  measurementId: "G-CQS287TXWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

async function initializeAnalytics() {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
}

export const analytics = initializeAnalytics();
export default app;