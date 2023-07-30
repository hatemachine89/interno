import './App.css';
import Cardsection from './components/cardsection';
import Cta from './components/cta';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Testimonials from './components/testimonials';

function App() {
  return (
    <div className="App">
   <Header/>
   <Hero/>
   <Cardsection/>
   <Cta/>
    <Testimonials/>
    <Projects/>

    </div>
  );
}

export default App;
