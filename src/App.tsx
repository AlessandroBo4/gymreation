import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Bookings from "./routes/Bookings";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
