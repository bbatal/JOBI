// images
import chevronRight from '../assets/chevron-right.png';
import arrowRightLong from '../assets/arrow-right-long.png';


function JobiGuides() {
  return (
    <secction id="jobi-guides">
        <div>
            <h2>Jobi Guides</h2>
            <div>
                <a href="#">Explore more</a>
                <img src={chevronRight} alt="icon for chevron"/>
            </div>
        </div>

        <ul>
            <li>
                <img src="https://unsplash.it/80/60" alt="placeholder" />
                <p>23 July, 2022</p>
                <h3>Challenge yourself and win the future</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita dolorem minima mollitia dolores voluptates. Doloribus.</p>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </li>
            <li>
                <img src="https://unsplash.it/80/60" alt="placeholder" />
                <p>23 July, 2022</p>
                <h3>Challenge yourself and win the future</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita dolorem minima mollitia dolores voluptates. Doloribus.</p>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </li>
            <li>
                <img src="https://unsplash.it/80/60" alt="placeholder" />
                <p>23 July, 2022</p>
                <h3>Challenge yourself and win the future</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita dolorem minima mollitia dolores voluptates. Doloribus.</p>
                <button><img src={arrowRightLong} alt="arrow to go right" /></button>
            </li>
        </ul>
    </secction>
  )
}

export default JobiGuides