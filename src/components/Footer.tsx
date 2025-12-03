import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        Built with <FaHeart className="heart-icon" /> by a QA Engineer who loves clean code
                    </p>
                    <p className="footer-copyright">
                        © {currentYear} QA Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
