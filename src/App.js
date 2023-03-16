import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./component/Header/LandingPage";
import './assets/scss/style.scss';
import Example from "component/Header/Example";

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/example" element={<Example />} />
    </Routes>
    </>
  )
}

export default App;