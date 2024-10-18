import './Header.css';  // Импортируем стили
import logo from '../assets/logo.jpg'
import { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { ScrollToElementById } from '../utils/ScrollUtils'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const { store } = useContext(Context);
    const location = useLocation();
    return (
        <header className="header m-0 p-5 flex flex-col md:flex-row w-full h-[5rem] justify-between items-center bg-[#414143]">
            <div className="logo-container ">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="logo-text">SpecInterns</h1>
            </div>
            <button onClick={()=>{store.logout()}}>logout</button>
            {location.pathname == '/' &&
            <nav className="nav flex flex-col md:flex-row">
                <a className="xl:m-[30px] md:text-[26px]  m-[5px] nav-link cursor-pointer" onClick={()=> ScrollToElementById('project-list')}>Проєкти</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={()=> ScrollToElementById('about-us')}>Про нас</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={()=> ScrollToElementById('take-part')}>Взяти участь</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={()=> ScrollToElementById('footer')}>Контакти</a>
            </nav>}
            
             <div className="auth-buttons">
             {location.pathname == '/' && store.isAuth ? (
                    <Link to='workshop/login'><button className='btn flex flex-row align-center justify-center hover:bg-[#f77031] hover:text-[white] bg-[#bdbec3] text-[#404145]'>Workshop</button></Link>
                ) : ('')}

            </div>


        </header>
    );
};

export default observer(Header);