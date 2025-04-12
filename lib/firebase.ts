import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHV6jhBet8kpuHTtwm-MFJX1kI1AjWmgs",
  authDomain: "saasbd23.firebaseapp.com",
  projectId: "saasbd23",
  storageBucket: "saasbd23.firebasestorage.app",
  messagingSenderId: "870031668718",
  appId: "1:870031668718:web:a0be70abe54d845f6bcaff"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };