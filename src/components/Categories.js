// icons
import chevron from '../assets/next-arrow-icon.png';
import pen from '../assets/pen.png';
import brackets from '../assets/brackets.png';
import bag from '../assets/bag.png';
import telephone from '../assets/telephone.png';
import colliseum from '../assets/colliseum.png';
import bar from '../assets/bar.png';


function Categories() {
  return (
    <section>
        <div>
        <h2>Most Demanding Categories</h2>
        <a href='#'><p>Explore all fields</p> <img src={chevron} alt="chevron right" /></a>
        <ul>
           <li>
            <img src={pen} alt="pen logo" />
            <p>UI/UX Design</p>
           </li>
           <li>
            <img src={brackets} alt="brackets logo" />
            <p>Development</p>
           </li>
           <li>
            <img src={bag} alt="bag logo" />
            <p>Marketing</p>
           </li>
           <li>
            <img src={telephone} alt="telephone logo" />
            <p>Telemarketing</p>
           </li>
           <li>
            <img src={colliseum} alt="colliseum logo" />
            <p>Accounting</p>
           </li>
           <li>
            <img src={bar} alt="bars logo" />
            <p>Editing</p>
           </li>
        </ul>
        </div>
        
    </section>
  )
}

export default Categories