
import './app.scss';
import About from './components/about/About';
import Card from './components/card/Card';

import Featured from './components/featured/Featured';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Featured/>
       <About/>
       <Card/>
    </div>
  );
}

export default App;
