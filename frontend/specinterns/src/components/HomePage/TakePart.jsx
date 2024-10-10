
const TakePart = () =>{
    return(
        <div className="flex flex-col items-center justify-center">
        <div className="take-part-div w-full bg-[#e6e7e9] lg:h-[90px] h-[150px] sm:h-[100px] flex justify-center items-center">
            <h2 className="uppercase text-[#53535f]">Запрошуємо приєднатись до нашої команди</h2>
        </div>
        <div>
        <button className="take-part-button transition ease-in hover:bg-[#f77031] hover:text-white  bg-[#ffffff] border-2 border-[#f77031] text-[#f77031] font-bold m-[40px] w-[300px] sm:w-[450px] h-[70px] rounded-[0.3rem] uppercase ">Взяти участь</button>
        </div>
        </div>
    )
}

export default TakePart;