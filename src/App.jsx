import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/navibar/Navibar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
