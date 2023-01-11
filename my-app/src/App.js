
import './app.scss';
import About from './components/about/About';
import Featured from './components/featured/Featured';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Featured/>
       <About/>
    </div>
  );
}

export default App;
