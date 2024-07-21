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
   {/* <Home /> */}
   <Navbar />
   <Sidebar />
   <div style={{ height: 'calc(100vh - 64px)', overflowY: 'scroll' }}>
  <section>
    <Home />
  </section>
  <section>
    <Project />
  </section>
  <section>
    <About />
  </section>
  <section>
    <Contact />
  </section>
</div>
</>
  );
}

export default App;
