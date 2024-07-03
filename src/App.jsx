import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Loader from "./pages/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
};

export default App;
