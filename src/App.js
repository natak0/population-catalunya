import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AppContext } from "./services/AppContext/AppContextCreator";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const cached_data = localStorage.getItem("cached_data");
      if (cached_data == null) {
        const response = await fetch(
          "https://analisi.transparenciacatalunya.cat/resource/b4rr-d25b.json?$limit=150000"
        ).then((res) => res.json());
        if (response !== null) {
          localStorage.setItem("cached_data", JSON.stringify(response));
          setData(response);
        }
      } else {
        setData(JSON.parse(cached_data));
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data }}>
      <Dashboard />
    </AppContext.Provider>
  );
}

export default App;
