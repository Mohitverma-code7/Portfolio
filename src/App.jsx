import Layout from "./Layouts/Layout";
import { useState } from "react";
import Blog from "./Pages/Blog";
import Main from "./Pages/Main";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
