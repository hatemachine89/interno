import './App.css';
import Cardsection from './components/cardsection';
import Cta from './components/cta';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
   <Header/>
   <Hero/>
   <Cardsection/>
   <Cta/>
    </div>
  );
}

export default App;
