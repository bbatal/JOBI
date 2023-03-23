// icons
import arrowBack from '../assets/back-arrow-icon-white.png';
import arrowForward from '../assets/next-arrow-icon.png';
import rating from '../assets/rating-icon.png';
import quotes from '../assets/quote-icon.png';

function Testimonials() {
  return (
    <section id="testimonials">
        <div>
            <h2>What our clients Think of us?</h2>
            <div className="carousal-buttons">
                <button><img src={arrowBack} alt="click to go back in carousel" /></button>
                <button><img src={arrowForward} alt="click to go forward in carousel" /></button>
            </div>
        </div>
        <div className='card-carousel'>
            <div className='card'>
                <div>
                    <div>
                        <p>Impressive!</p>
                        <img src={rating} alt="score given by client"/>
                    </div>
                    <img src={quotes} alt="quotes for emphasis" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam consequuntur modi porro nulla.</p>

                <div>
                    <p><span className='bolded'>Rashed Ka,</span>Dhaka</p>
                    <img src="https://unsplash.it/30/30" alt="profile logo" />
                </div>
            </div>
            <div className='card'>
                <div>
                    <div>
                        <p>Impressive!</p>
                        <img src={rating} alt="score given by client"/>
                    </div>
                    <img src={quotes} alt="quotes for emphasis" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam consequuntur modi porro nulla.</p>

                <div>
                    <p><span className='bolded'>Rashed Ka,</span>Dhaka</p>
                    <img src="https://unsplash.it/30/30" alt="profile logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials