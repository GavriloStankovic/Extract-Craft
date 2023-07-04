import './App.scss';
import Beefits from './components/Benefits/Beefits';
import Cards from './components/Cards/Cards';
import Checkout from './components/Checkout/Checkout';
import Concentration from './components/Concentration/Concentration';
import Extractor from './components/Extractor/Extractor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IndustryLeader from './components/IndustryLeader/IndustryLeader';
import Machine from './components/Machine/Machine';
import Questions from './components/Questions/Questions';
import Reviews from './components/Reviews/Reviews';
import { Route, Routes } from 'react-router';
import { CartProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <IndustryLeader />
              <Cards />
              <Concentration />
              <Extractor />
              <Beefits />
              <Machine  />
              <Reviews />
              <Questions />
              <Footer />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
