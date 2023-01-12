import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AppContext } from "./services/AppContext/AppContextCreator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://analisi.transparenciacatalunya.cat/resource/b4rr-d25b.json?$limit=150000"
      ).then((res) => res.json());
      setData(response);
    }
    fetchData();
  }, []);

  return (
    data && (
      <AppContext.Provider value={{ data }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    )
  );
}

export default App;
