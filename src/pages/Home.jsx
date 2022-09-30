import { Services, Hero, FeaturedProduct, Contact } from '../components';
import ChatBot from '../components/ChatBot';

function Home() {

  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </main>
  )
}

export default Home;