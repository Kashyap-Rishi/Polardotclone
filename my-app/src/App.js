
import './app.scss';
import Brands from './components/brands/Brands';
import Faq from './components/faqs/Faqs';
import Navbar from './components/navbar/Navbar';
import Review from './components/review/Review';
import Services from './components/servicesection/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Brands></Brands>
      <Faq></Faq>
      <Services></Services>
      <Review></Review>
    </div>
  );
}

export default App;
