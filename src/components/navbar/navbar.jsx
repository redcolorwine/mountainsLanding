import cmedia from './navbar.module.css';
import mountain from './../../media/mountainpng.png';
import facebook from '../../media/logo/facebook.png';
import instagram from '../../media/logo/instagram.png';
import twitter from '../../media/logo/twitter.png';
import skype from '../../media/logo/skype.png';
const Navbar = (props) => {
    return (
        <div className={cmedia.navbar}>
            <img src={mountain} alt="" />
            <nav>
                <li><a href="">Home</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contact us</a></li>
            </nav>
            <div className={cmedia.links}>
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={twitter} alt="" /></a>
                <a href=""><img src={skype} alt="" /></a>
            </div>
        </div>
    )
}

export default Navbar;