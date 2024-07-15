import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/glownbloom.png';
import { Link } from 'react-router-dom';
import '../components/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'> 
    <div className='container'>
        <div className='row'>
        <div className='col-md-2'>
            <div className='footer-inner'>
                <div className='footer-heading'>
                    <p>Quick Links</p>
                </div>
                <div className='footer-info'>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                         <Link to="/about-us">About Us</Link>
                         </li>
                         <li>
                         <Link to="/shop">Shop</Link>
                         </li>
                         <li>
                         <Link to="/offers">Offers</Link>
                         </li>
                         <li>
                         <Link to="/blogs">Blogs</Link>
                         </li>
                         <li>
                         <Link to="/contact-us">Contact Us</Link>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='col-md-2'>
        <div className='footer-inner'>
        <div className='footer-heading'>
            <p>Categories</p>
        </div>
        <div className='footer-info'>
                    <ul>
                    <li>
                        <Link to="">
                        Hair Care
                        </Link>
                        </li>
                    <li>
                        <Link to="">
                        Skin Care
                        </Link>
                        </li>
                    <li>
                        <Link to="">
                        Creams
                        </Link>
                        </li>
                    <li>
                        <Link to="">
                        Gels
                        </Link>
                        </li>
                    <li>
                        <Link to="">
                        Serums
                        </Link>
                        </li>
                    <li>
                        <Link to="">
                        Only Night Cream
                        </Link>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div className='footer-inner'>
            <div className='footer-imageblock'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='footer-icons'>
                <span>
                    <Link to='https://www.facebook.com/GlowAndBloomNaturalHairNSkincare/'>
                        <FontAwesomeIcon className="footer-icons-inner" icon={faFacebook} />
                    </Link>
                </span>
                <span>
                    <Link to='https://www.instagram.com/glownbloom/'>
                        <FontAwesomeIcon className="footer-icons-inner" icon={faInstagram} />
                    </Link>
                </span>
                <span>
                    <Link to='https://api.whatsapp.com/send?phone=918698871943'>
                        <FontAwesomeIcon className="footer-icons-inner" icon={faWhatsapp} />
                    </Link>
                </span>
                <span>
                    <Link to='/'>
                        <FontAwesomeIcon className="footer-icons-inner" icon={faYoutube} />
                    </Link>
                </span>
            </div>
        </div>
        </div>
        <div className='col-md-5'>
        <div className='footer-inner'>
        <div className='footer-heading'>
            <p>Contact us</p>
        </div>
        <div className='contact-inner'>
            <div className='contact-inner-heading1'>
                <FontAwesomeIcon className="footer-contact-icon" icon={faHeadphones} />
                <div className='contact-inner-heading1_content'>
                <p className='p1'>Need Any Help? Beauty, Cosmetic & Personal Care</p>
                <p className='p2'>+91 8698871943</p>
                </div>
            </div>
            <div className='contact-inner-heading2'>
                <ul>
                    <li>
                        <p>Committed to Quality</p>
                    </li>
                    <li>
                        <p><span>Address:</span>Pune, India, Maharashtra</p>
                    </li>
                    <li>
                        <p><span>Email:</span>
                        <Link className="footer-contact-mail" to="mailto:glownbloom81@gmail.com">glownbloom81@gmail.com</Link></p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
