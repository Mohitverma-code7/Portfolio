
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu6aUKNg7wIht2ZNlAv5eZ91JC3zJLMj4",
  authDomain: "mohitcodes-portfolio.firebaseapp.com",
  dataBaseURL: "https://mohitcodes-portfolio-default-rtdb.firebaseio.com/",
  projectId: "mohitcodes-portfolio",
  storageBucket: "mohitcodes-portfolio.firebasestorage.app",
  messagingSenderId: "1011384216950",
  appId: "1:1011384216950:web:69c6e8c6982d911ec4de57",
  measurementId: "G-K5PG2PYSRT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)