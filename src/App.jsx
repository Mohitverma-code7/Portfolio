import Layout from "./Layouts/Layout";
import { useState } from "react";
import Blog from "./Pages/Blog";
import Main from "./Pages/Main";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VisitorBox from "./Components/VisitorBox";


function App() {
  const [count, setCount] = useState(0);
  
  const location = useLocation();

   useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXX", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <>
      <ToastContainer />
      
      <Layout />
    </>
  );
}

export default App;
