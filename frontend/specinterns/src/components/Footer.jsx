import './Footer.css';  // Импортируем стили
import logo from '../assets/logo.jpg';  // Твой логотип
import { ScrollToElementById } from '../utils/ScrollUtils';
const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p>&copy; 2024 SpecInterns. Всі права захищені.</p>
                </div>
                <div className="footer-nav-section">
                    <ul>
                        <li><a className="xl:m-[30px] md:text-[26px]  m-[5px] nav-link cursor-pointer" onClick={()=> ScrollToElementById('project-list')}>Проєкти</a></li>
                        <li><a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={()=> ScrollToElementById('about-us')}>Про нас</a></li>
                        <li><a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={()=> ScrollToElementById('take-part')}>Взяти участь</a></li>
                    </ul>
                </div>
                <div className="footer-social-section">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>SpecInterns &copy; 2024 | Політика конфіденційності</p>
            </div>
        </footer>
    );
};

export default Footer;
