import './About.css'
import question from './images/question.svg'
const About = () => {
    return (
        <div className="info-container flex w-full h-full flex-col">
            <div className="w-full bg-[#e6e7e9] h-[80px] flex justify-center items-center mt-[100px]">
                <h2 className="uppercase text-[#53535f]">ПРО НАС</h2>
            </div>
            <section class="card-stack items-center">
                <div class="card">
                    <span className=' flex justify-center items-center border-[3px] border-solid rounded-[50%] border-[#f77031] min-h-[35px] min-w-[35px] h-[7vw] w-[7vw] align-middle text-[#f77031] text-[5vw] font-light self-center'>1</span>
                    <div className='text-container flex flex-col p-[20px] w-[75%]'>
                        <h2 className='flex flex-row items-center justify-center text-[26px] sm:text-[32px]'>Заповнення анкети <svg className="m-[5px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#f77031" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 21h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg></h2>
                        <div className='w-full h-[2px] m-[5px] bg-[#f77031]'></div>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Заповнити анкету, натиснувши на кнопку «Взяти Участь»</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Приєднатись до нашого серверу в Discord</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Виконати всі кроки на сервері Discord</p>
                    </div>
                </div>
                <div class="card">
                    <span className=' flex justify-center items-center border-[3px] border-solid rounded-[50%] border-[#f77031] min-h-[35px] min-w-[35px] h-[7vw] w-[7vw] align-middle text-[#f77031] text-[5vw] font-light self-center'>2</span>
                    <div className='text-container flex flex-col p-[20px] w-[75%]'>
                        <h2 className='flex flex-row items-center justify-center text-[26px] sm:text-[32px]'>Як стати учасником проєкту<svg className="m-[5px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f77031" viewBox="0 0 24 24">
                            <path d="M9 19l-7-7 1.41-1.41L9 16.17l12.59-12.58L23 5l-14 14z" />
                        </svg></h2>
                        <div className='w-full h-[2px] m-[5px] bg-[#f77031]'></div>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Отримати доступ до каналів вашої спеціалізації</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Слідкувати за об'явами про старт нових проєктів в каналі «Загальний»</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Отримати запрошення до серверу обраного проєкту</p>
                    </div>
                </div>
                <div class="card">
                    <span className=' flex justify-center items-center border-[3px] border-solid rounded-[50%] border-[#f77031] min-h-[35px] min-w-[35px] h-[7vw] w-[7vw] align-middle text-[#f77031] text-[5vw] font-light self-center'>3</span>
                    <div className='text-container flex flex-col p-[20px] w-[75%] '>
                        <h2 className='flex flex-row items-center justify-center text-[26px] sm:text-[32px]'>Що далі?<img className='w-[35px] h-[35px] m-[5px] ' src={question}></img></h2>
                        <div className='w-full h-[2px] m-[5px] bg-[#f77031]'></div>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Познайомитись та поспілкуватись з новою командою</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Узгодити з командою розклад зустрічей і об'єм обраних завдань</p>
                        <p className='flex flex-row items-center justify-start text-left text-[16px] sm:text-[24px] font-medium'><svg className='m-[5px] rounded-sm' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="#16a360" stroke="" stroke-width="2" />
                            <path d="M6 12l4 4L18 8" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>Виконати всі завдання, випустити продукт та оновити портфоліо</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;