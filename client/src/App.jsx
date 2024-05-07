import Vacancy from "./pages/Vacancy/Vacancy";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Vacancy />}></Route>
      </Routes>
    </>
  );
}

export default App;
