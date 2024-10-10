
export const PrevArrow = ({ onClick, isVisible }) => {
    if (!isVisible) return null;
    return (
        <button
            onClick={onClick}
            className="absolute z-10 left-4 top-1/2 p-2 rounded-full bg-transparent border-[#f77031] border-2"
            aria-label="Previous slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#f77031" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6"></path>
            </svg>
        </button>
    )
};

export const NextArrow = ({ onClick, isVisible }) => {
    if (!isVisible) return null;
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 p-2 rounded-full bg-transparent border-[#f77031] border-2"
            aria-label="Next slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#f77031" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18l6-6-6-6"></path>
            </svg>
        </button>
    )
};
