import './Footer.css';  // Импортируем стили
import logo from '../assets/logo.jpg';  // Твой логотип

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p>&copy; 2024 SpecInterns. Всі права захищені.</p>
                </div>
                <div className="footer-nav-section">
                    <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/about">Про нас</a></li>
                        <li><a href="/projects">Проекти</a></li>
                        <li><a href="/contacts">Контакти</a></li>
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
