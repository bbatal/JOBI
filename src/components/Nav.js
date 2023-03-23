import logo from '../assets/jobi-logo.png';

function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <a href='#'><img src={logo} alt="business logo" /></a>
            </li>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>Job</a>
            </li>
            <li>
                <a href='#'>Explore</a>
            </li>
            <li>
                <a href='#'>Category</a>
            </li>
            <li>
                <a href='#'>Pages</a>
            </li>
            <li>
                <button>Login/Sign up</button>
            </li>
            <li>
                <button>Post a Job</button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav