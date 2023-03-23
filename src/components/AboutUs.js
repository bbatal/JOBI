// images
import chevronUp from '../assets/chevron-up.png';
import chevronDown from '../assets/chevron-down.png';
import dotPattern from '../assets/dot-pattern.png';
import swoopShape from '../assets/swoop-shape.png';
import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';

function AboutUs() {
  return (
    <section id="about-us">
        <div className='card-1'>
            <h2>Why choose us?</h2>
            <h3>World of talent at your fingertips</h3>
            <div className="accordion-menu">
                    <h4>Seamless Search</h4>
                    <button><img src={chevronDown} alt="toggle to show content" /></button>
                    <div className='content'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel eligendi voluptas numquam doloremque quae.</p></div>
                </div>
            <div className="accordion-menu">
                    <h4>Hire top talents</h4>
                    <button><img src={chevronDown} alt="toggle to show content" /></button>
                    <div className='content'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel eligendi voluptas numquam doloremque quae.</p></div>
                </div>
            <h4>Protected payments, every time</h4>
            <button>Learn more</button>
        </div>
        <div className='card-2-grid'>
            <div className='image-1'>
                <img src='https://unsplash.it/70/30' alt="placeholder image"/>
                <img src={swoopShape} />
            </div>
            
            <img src={dotPattern} alt="placeholder image"/>
            <img src='https://unsplash.it/50/50' alt="placeholder image"/>
            <img src='https://unsplash.it/70/70' alt="placeholder image"/>

            <div className='floating-elements'>
                <img src={card1} alt="placeholder image" />
                <img src={card2} alt="placeholder image" />
                <img src={card3} alt="placeholder image" />
            </div>
        </div>
    </section>
  )
}

export default AboutUs