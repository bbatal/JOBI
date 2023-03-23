// images
import jobiCircle from '../assets/bubble-circle-icon.png';
import arrowRightThick from '../assets/thick-arrow.png';

function Collaboration() {
  return (
    <section id="collaboration">
        <img src={jobiCircle} alt="jobiCircle of related logos used by Jobi" />
        <div>
            <p>TOP BRAND</p>
            <h2>Collaboration with Top Brands</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam illum excepturi repudiandae consequatur. Recusandae!</p>
            <button>
                Learn More
                <img src={arrowRightThick} alt="click to learn more about affiliated top brands"/>
            </button>
        </div>
    </section>
  )
}

export default Collaboration