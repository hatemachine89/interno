import BlogPost from './blogpost';
import Cardsection from './cardsection';
import Cta from './cta';
import Hero from './hero';
import Projects from './projects';
import Testimonials from './testimonials';




function Home() {
  return (
    <div className="App">
   <Hero/>
   <Cardsection/>
   <Cta/>
   <Testimonials/>
   <Projects/>
   <BlogPost/>

    </div>
  );
}

export default Home;
