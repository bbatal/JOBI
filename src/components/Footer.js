// images
import jobiLogo from '../assets/jobi-logo.png';
import squareThing from '../assets/square-thing.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/facebook.png';
import pinterest from '../assets/facebook.png';

function Footer() {
  return (
 
    <div>
        <div className="top-footer">
            <ul>
                <li>
                    <img src={jobiLogo} alt="jobi logo"/>
                </li>
                <li>
                    <img src={squareThing} alt="random sqaure for design purposes"/>
                </li>
            </ul>

            <ul>
                <li><h3>Links</h3></li>
                <li><a>Pricing</a></li>
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
                <li><a>Blog</a></li>
            </ul>
            <ul>
                <li><h3>Products</h3></li>
                <li><a>Take the tour</a></li>
                <li><a>Live chat</a></li>
                <li><a>Self-service</a></li>
                <li><a>Mobile</a></li>
                <li><a>Collaboration</a></li>
                <li><a>Reviews</a></li>
            </ul>
            <ul>
                <li><h3>Legal</h3></li>
                <li><a>Terms of use</a></li>
                <li><a>Terms & Conditions</a></li>
                <li><a>Privacy</a></li>
                <li><a>Cookie Policy</a></li>
            </ul>

            <ul>
                <li><h3>Newsletter</h3></li>
                <li><p>Join & get important news regularly</p></li>
                <li>
                    <input type="text" placeholder="Enter your email" />
                    <button>Send</button>
                </li>
                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
            </ul>
        </div>
        <div className="bottom-footer">
            <div>
                <button>Privacy & Terms.</button>
                <button>Contact Us</button>
            </div>
            <p>Copyright @2023 Jobi inc.</p>
            <ul>
                <li><img src={facebook} alt="social media link"/></li>
                <li><img src={instagram} alt="social media link"/></li>
                <li><img src={pinterest} alt="social media link"/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer