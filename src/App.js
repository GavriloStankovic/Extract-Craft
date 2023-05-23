import './App.scss';
import Beefits from './components/Benefits/Beefits';
import Cards from './components/Cards/Cards';
import Concentration from './components/Concentration/Concentration';
import Extractor from './components/Extractor/Extractor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IndustryLeader from './components/IndustryLeader/IndustryLeader';
import Machine from './components/Machine/Machine';
import Questions from './components/Questions/Questions';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <IndustryLeader />
      <Cards />
      <Concentration />
      <Extractor />
      <Beefits />
      <Machine />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
