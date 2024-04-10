import Home from "../src/pages/Home/Index";
import Others from "../src/pages/Others/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <HeaderToDel /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politics" element={<Others />} />
          <Route path="/societ" element={<Others />} />
          <Route path="/low" element={<Others />} />
          <Route path="/bussines-and-economic" element={<Others />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
