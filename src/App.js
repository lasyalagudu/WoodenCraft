import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/product';
import Homepage from './customer/pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation/>
        <div>
          <Homepage/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
