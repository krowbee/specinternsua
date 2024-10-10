import Header from "../components/Header"
import Footer from "../components/Footer"
import Slides from "../components/HomePage/Slides"
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import ProjectsList from "../components/HomePage/ProjectsList";
import TakePart from "../components/HomePage/TakePart";
import HeaderMobile from "../components/HeaderMobile";
import { useState, useEffect } from "react";
import About from "../components/HomePage/About";

const HomePage = () => {
    const { store } = useContext(Context);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth < 850 );
        }
        
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div>
            {isMobile ? (<HeaderMobile></HeaderMobile>) : (<Header></Header>) }
            <Slides></Slides>
            <ProjectsList></ProjectsList>
            <About></About>
            <TakePart></TakePart>
            <Footer></Footer>
        </div>
    )
}

export default observer(HomePage);