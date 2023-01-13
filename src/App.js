import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AppContext } from "./services/AppContext/AppContextCreator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const cached_data = localStorage.getItem("cached_data");
      if (cached_data === null) {
        const response = await fetch(
          "https://analisi.transparenciacatalunya.cat/resource/b4rr-d25b.json?$limit=150000"
        ).then((res) => res.json());
        if (response !== null) {
          localStorage.setItem("cached_data", JSON.stringify(response));
          setData(response);
        }
      } else {
        const json = localStorage.getItem("cached_data");
        setData(JSON.parse(json));
      }
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
