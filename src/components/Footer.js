import "../styles/footer.css";

import { Link } from "react-router-dom";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FacebookIcon from "./icons/FacebookIcon";
import CartIcon from "./icons/CartIcon";
import MusicIcon from "./icons/MusicIcon";
import TruckIcon from "./icons/TruckIcon";

export default function Footer() {
    return (
        <footer>
            <div id="footer__container">
                    <div id="footer__header">
                    <img className="logo" src="../public/logo.png" alt="Website Logo - DiscoTake" />
                    <div id="footer__moto">Taking music wherever you truly are</div>
                </div>
                <div id="footer__salepoints">
                    <div className="salepoint">
                        <div className="salepoint__icon">
                            <CartIcon />
                        </div>
                        <div className="salepoint__text">Easy online shopping</div>
                    </div>
                    <div className="salepoint">
                        <div className="salepoint__icon">
                            <MusicIcon />
                        </div>
                        <div className="salepoint__text">High audio quality</div>
                    </div>
                    <div className="salepoint">
                        <div className="salepoint__icon">
                            <TruckIcon />
                        </div>
                        <div className="salepoint__text">Fast delivery within 1-2 weeks</div>
                    </div>
                </div>
                <div id="footer__list-wrapper">
                    <div className="footer__section-title">Learn more:</div>
                    <ul className="no-style-list">
                        <li>
                            <Link to="#">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#"> Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div id="footer__socials">
                    <div className="footer__section-title">Follow us:</div>
                    <div id="footer__socials-icons">
                        <a href="#" target="_blank"><InstagramIcon /></a> 
                        <a href="#" target="_blank"><TwitterIcon /></a>
                        <a href="#" target="_blank"><FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}