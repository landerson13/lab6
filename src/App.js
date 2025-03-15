import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Bootstrap 5.0 used from https://react-bootstrap.netlify.app/docs/getting-started/introduction for React
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <Router>
      <Header/>
      {/** Style for Bootstrap used from Thursday's session */}
      <main className="container-fluid min-vh-100 p-5 my-5 d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
