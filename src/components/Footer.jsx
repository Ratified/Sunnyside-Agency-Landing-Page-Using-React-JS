import logo from '../images/logo.svg';
import facebookIcon from '../images/icon-facebook.svg'
import instagramIcon from '../images/icon-instagram.svg'
import twitterIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__internal-links">
            <img className="footer__internal-links__img" src={logo} alt="SunnySide Logo" />
        
            <div className="links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
        </div>

        <div className="footer__external-links">
            <div className="media">
                <img src={facebookIcon} alt="Facebook Social Media Icon" />
                <img src={instagramIcon} alt="Instagram Social Media Icon" />
                <img src={twitterIcon} alt="Twitter Social Media Icon" />
                <img src={pinterestIcon} alt="Pinterest Social Media Icon" />
            </div>
        </div>
    </footer>
  )
}

export default Footer
