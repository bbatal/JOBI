// icons
import playBtn from '../assets/video-play-button.png';
import account from '../assets/account.png';
import apply from '../assets/apply.png';
import profile from '../assets/profile.png';

function HowItWorks() {
  return (
    <section>
        <div>
            <button><img src={playBtn} alt="" /></button>
            <h3>Let's get started It's <span>simple</span></h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nemo autem blanditiis eos distinctio quaerat? Ve!
            </p>
        </div>
        <ul>
            <li>
                <img src={account} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <button>open account</button>
                </div>
            </li>
            <li>
                <img src={profile} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <button>open account</button>
                </div>
            </li>
            <li>
                <img src={apply} alt="profile icon green" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <button>open account</button>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default HowItWorks