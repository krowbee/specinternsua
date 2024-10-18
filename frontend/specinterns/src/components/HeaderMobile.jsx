import { useContext, useState } from 'react';
import logo from '../assets/logo.jpg'
import { ScrollToElementById } from '../utils/ScrollUtils';
import { useEffect } from 'react';
import { Context } from '..';
import { Link, useLocation } from 'react-router-dom';


const HeaderMobile = () => {
    const { store } = useContext(Context)
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const location = useLocation();
    const scrollToElement = (id)=>{
        toggleMenu();
        ScrollToElementById(id);
    }

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <header className="header relative !w-full flex flex-col justify-between">
            <div className="!w-full h-full flex justify-between p-5 bg-[#414143] ">
                <div className="logo-container ">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="logo-text">SpecInterns</h1>
                </div>
                {!isOpenMenu ? (<button onClick={() => toggleMenu()} className='border rounded-lg border-[#f77031] w-[3rem] h-[2.5rem] items-center justify-center flex self-center group hover:bg-[#f77031] '>
                    <svg className="fill-[#f77031] group-hover:fill-[white]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path fill="" d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"></path></svg>
                </button>) : (<button onClick={() => toggleMenu()} className='border rounded-lg border-[#f77031] w-[3rem] h-[2.5rem] items-center justify-center flex self-center group hover:bg-[#f77031]'>
                    <svg className='stroke-[#f77031] feather feather-x group-hover:stroke-[white]' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>)}
            </div>

            {location.pathname == '/' &&  isOpenMenu && (<nav className="nav flex absolute z-10 w-full flex-col bg-[#414143] border-t border-[#f77031] items-center justify-center" style={{ top: '100%' }}>
                <a className="xl:m-[30px] md:text-[26px]  m-[5px] nav-link cursor-pointer" onClick={() => scrollToElement('project-list')}>Проєкти</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={() => scrollToElement('about-us')}>Про нас</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={() => scrollToElement('take-part')}>Взяти участь</a>
                <a className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link cursor-pointer" onClick={() => scrollToElement('footer')}>Контакти</a>
                {store.isAuth ? (
                    <Link to='workshop/login' className='nav-link m-[5px]'>Workshop</Link>) : ('')}
            </nav>)}
        </header>
    )
}

export default HeaderMobile;