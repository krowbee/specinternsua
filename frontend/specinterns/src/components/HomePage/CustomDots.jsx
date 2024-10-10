import './CustomDots.css'
const CustomDots = ({totalSlides, currentSlide, onDotClick}) => {
    return(
        <div className="custom-dots m-[40px] flex-row flex h-full w-full justify-start items-center">
            {Array.from({ length: totalSlides }).map((_, index)=> (
                <div key={index} className={`custom-dot m-2 h-[1.6rem] w-[1.6rem] rounded-full border border-[#f77031] hover:cursor-pointer  ${currentSlide === index ? 'bg-[#f77031]' : ''}`} onClick={() =>onDotClick(index)}></div>
            ))}
        </div>
    )
}

export default CustomDots;