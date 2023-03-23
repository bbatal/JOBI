// icons
import google from '../assets/google.png';
import shipbob from '../assets/shipbob.png';
import dribble from '../assets/dribble.png';
import slack from '../assets/slack.png';
import vine from '../assets/vine.png';
import airbnb from '../assets/airbnb.png';

function Partners() {
  return (
    <div>
        <ul>
            <li><img src={google} alt="google logo" /></li>
            <li><img src={shipbob} alt="shipbob logo" /></li>
            <li><img src={dribble} alt="dribble logo" /></li>
            <li><img src={slack} alt="slack logo" /></li>
            <li><img src={vine} alt="vine logo" /></li>
            <li><img src={airbnb} alt="airbnb logo" /></li>
        </ul>
    </div>
  )
}

export default Partners