import About from './about/About';
import Intro from './intro/Intro';
import Portfolio from './portfolio/Portfolio';

export default function Home(){
  return(
    <div>
      <Intro />
      <br />
      <About />
      <br />
      <Portfolio />
    </div>
  )
}
