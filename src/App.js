import './App.css';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;
