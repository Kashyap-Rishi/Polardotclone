
import './app.scss';

import Brands from './components/brands/Brands';
import Faq from './components/faqs/Faqs';

import About from './components/about/About';
import Card from './components/card/Card';

import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';
import Review from './components/review/Review';
import Services from './components/servicesection/Service';
import Connect from './components/connect/Connect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured />
      <About />
      <Card />
      <Brands/>
      <Faq/>
      <Services/>
      <Review/>
      <Connect/>

      <Footer/>
    </div>
  );
}

export default App;
