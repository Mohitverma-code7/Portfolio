import Layout from "./Layouts/Layout";
import { useState } from "react";
import Blog from "./Pages/Blog";
import Main from "./Pages/Main";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     
      <ToastContainer/>
      <Layout />
    </>
  );
}

export default App;
