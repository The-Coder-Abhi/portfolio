import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">

          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
