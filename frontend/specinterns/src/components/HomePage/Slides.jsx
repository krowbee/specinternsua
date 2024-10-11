import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import { useRef } from "react";
import { useState } from "react";
import CustomDots from "./CustomDots";
import { PrevArrow, NextArrow } from "../../ui/SliderButtons";



const Slides = ({isMobile}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: false,
        draggable:true,
        speed: 400,
        cssEase:'ease-in-out',
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        prevArrow: isMobile ? null :  <PrevArrow isVisible={currentSlide > 0} />,
        nextArrow: isMobile ? null :  <NextArrow isVisible={currentSlide < totalSlides - 1} />,
        ref: sliderRef
    };

    return (
        <div className="slider-container relative overflow-visible bg-[#414143]" id="about-us">
            <Slider {...settings}>
                <div className="slide slide-1 flex justify-center items-center text-center">
                    <div className="text-block flex flex-col justify-center items-center">
                        <h2 className="text-white sm:text-[4rem] mt-[10px]">SpecInterns</h2>
                        <p className="text-white mx-auto sm:text-2xl  text-lg break-words max-w-[60ch]">Ми організація - мета якої, отримання вами першого досвіду в IT</p>
                    </div>
                </div>
                <div className="slide slide-2 flex justify-center items-center text-center">
                    <div className="text-block flex flex-col justify-center items-center">
                        <h2 className="text-white sm:text-[4rem] mt-[10px]">Наша ціль</h2>
                        <p className="text-white mx-auto sm:text-2xl text-lg break-words max-w-[80ch]">Наша організація ставить перед собою амбітну мету — надати людям, які прагнуть опанувати навички командної розробки, можливість отримати перший реальний досвід у створенні цифрових продуктів. Ми допомагаємо зануритися у світ сучасних технологій, працюючи над практичними проєктами, що дозволяє нашим учасникам не тільки здобути важливі знання, а й створити щось корисне та значуще для інших.</p>
                    </div>
                </div>
                <div className="slide slide-3 flex justify-center items-center text-center">
                    <div className="text-block flex flex-col justify-center items-center">
                        <h2 className="text-white sm:text-[4rem] mt-[10px]">Принципи дії</h2>
                        <p className="text-white mx-auto sm:text-2xl text-lg break-words max-w-[60ch]">Ми залучаємо учасників до проєктів, в яких використовуються технології, з якими вони вже знайомі.
                            Це дозволяє здобувати цінний досвід розробки в команді, без необхідності перенавчання.</p>
                    </div>
                </div>
            </Slider>
            <div className="dots-container h-full w-full mt-10 flex flex-row justify-between items-center">
                <CustomDots totalSlides={3} currentSlide={currentSlide} onDotClick={(index) => {
                    setCurrentSlide(index);
                    sliderRef.current.slickGoTo(index)
                }}>
                </CustomDots>
                <a href='https://forms.gle/Hv2VihPrnNYKPfWQ9'><button className="take-part-button transition ease-in bg-black text-[#f77031] hover:bg-[#f77031] hover:text-white font-bold hover:font-bold m-[10px] w-[160px] h-[65px]  md:w-[390px] h-[65px] border border-2 border-[#f77031] rounded-[0.3rem] uppercase ">Взяти участь</button></a>
            </div>
        </div>
    )
}

export default Slides;