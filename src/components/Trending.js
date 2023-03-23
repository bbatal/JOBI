import backArrowBlack from '../assets/back-arrow-icon-black.png';
import nextArrowBlack from '../assets/next-arrow-icon.png';

function Trending() {
  return (
    <section id="trending-job">
        <div>
            <h2>Trending Job</h2>
            <div>
                <button><img src={backArrowBlack} alt="back arrow click to go back in the carousal" /></button>
                <button><img src={nextArrowBlack} alt="forward arrow click to see more images" /></button>
            </div>
        </div>
        <ul>
            <li>
                <img src="https://unsplash.it/300/350" />
                <div>
                    <p>WordPress Development</p>
                </div>
            </li>
            <li>
                <img src="https://unsplash.it/300/350" />
                <div>
                    <p>Audio & Video Editing</p>
                </div>
            </li>
            <li>
                <img src="https://unsplash.it/300/350" />
                <div>
                    <p>Product & Branding Design</p>
                </div>
            </li>
            <li>
                <img src="https://unsplash.it/300/350" />
                <div>
                    <p>Admin & Customer Support</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Trending