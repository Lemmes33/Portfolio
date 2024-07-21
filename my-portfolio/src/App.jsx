import logo from './logo.svg';
import './App.css';
import Home from "./Components/Sections/Home/Home"
import Navbar from './Components/Layout/Navbar/Navbar';
import Sidebar from './Components/Layout/Sidebar/Sidebar'
import About from "./Components/Sections/About/About"
import Project from "./Components/Sections/Projects/Project"
import Contact from "./Components/Sections/Contact/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="scroll-container">
        <section className="section" style={{ backgroundColor: '#f0f0f0' }}>
          <Home />
        </section>
        <section className="section" style={{ backgroundColor: '#e0e0e0' }}>
          <Project />
        </section>
        <section className="section" style={{ backgroundColor: '#d0d0d0' }}>
          <About />
        </section>
        <section className="section" style={{ backgroundColor: '#c0c0c0' }}>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;