import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Station from "./components/Station/Station";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="ve-chung-toi" element={<AboutUs />} />
          <Route path="station%201" element={<Station name="Trạm 1" />} />
          <Route path="station%202" element={<Station name="Trạm 2" />} />
          <Route path="station%203" element={<Station name="Trạm 3" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
