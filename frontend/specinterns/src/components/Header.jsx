import './Header.css';  // Импортируем стили
import logo from '../assets/logo.jpg'
import { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { ScrollToElementById } from '../utils/ScrollUtils'
import { useEffect } from 'react';


const Header = (isAuth) => {
    const { store } = useContext(Context);
    return (
        <header className="header m-0 p-5 flex flex-col md:flex-row w-full h-[5rem] justify-between items-center bg-[#414143]">
            <div className="logo-container ">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="logo-text">SpecInterns</h1>
            </div>
            <nav className="nav flex flex-col md:flex-row">
                <a className="xl:m-[30px] md:text-[26px]  m-[5px] nav-link cursor-pointer" onClick={()=> ScrollToElementById('project-list')}>Проєкти</a>
                <a href="/about" className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link">Про нас</a>
                <a href="/projects" className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link">Взяти участь</a>
                <a href="/contacts" className="xl:m-[30px]  md:text-[26px] m-[5px]  nav-link">Контакти</a>
            </nav>
            
             <div className="auth-buttons">
             {store.isAuth ? (
                    <button onClick={()=>store.logout()} className='btn hover:bg-[#f77031] hover:text-[white] bg-[#bdbec3] text-[#404145] login-btn'>Вийти</button>
                ) : (
                    <>
                        <button className="btn login-btn">
                            <a href='/login'>Увійти</a>
                        </button>
                        <button className="btn register-btn">
                            Реєстрація
                        </button>
                    </>
                )}

            </div>
        </header>
    );
};

export default observer(Header);