import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./component/Header/LandingPage";
import './assets/scss/style.scss';

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
    </>
  )
}

export default App;