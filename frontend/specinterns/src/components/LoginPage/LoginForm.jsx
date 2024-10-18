import { useContext, useState } from "react"
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
const LoginForm = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate()
    const [status_401, setStatus_401] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(()=>{
        if(store.isAuth){
            navigate('/workshop/home')
        }
    })
    const onSubmit = async (data) => {
        const { username, password } = data;
        try {
            const response = await store.login(username, password)
            if (response == 200) {
                navigate('/workshop/home')
            }
            else if (response == 401) {
                setStatus_401(true)
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="w-full sm:w-[500px] flex flex-col justify-center items-center self-center h-[250px] mt-[40px]">
            <div className="bg-[#414143] w-full rounded-t-lg flex flex-col justify-center items-center border-[#414143] ">
                <h2 className="m-[0px] p-[0px] text-white  text-[28px] !font-medium">SpecInterns Workshop</h2>
                <div className=" border border-[#f77031] w-[90%] h-[2px] mb-[5px]"></div>
            </div>
            <div className="flex flex-col w-full h-full p-[10px] justify-center items-center bg-[#e5e5e5] rounded-b-lg">
                <div className="rounded-lg w-[75%] p-[20px] bg-[#e5e5e5]">
                    {status_401 ? (<div className=" flex w-full flex-col mt-[0px]">
                        <p className="text-red-400">Ім'я користувача або пароль невірні</p>
                    </div>) : ('')}
                    <div className="flex flex-col justify-center items-center">
                        <p>Ім'я користувача:</p>
                        <input className="rounded-md font-lg text-[#414143]" {...register('username', {
                            required: "Ім'я користувача обов'язкове",
                            minLength: {
                                value: 4,
                                message: "Ім'я користувача не менше 4 символів"
                            },
                            maxLength:{
                                value:16,
                                message:"Ім'я користувача не більше 16 символів"
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/i,  // Разрешаем только буквы и цифры
                                message: "Ім'я користувача може містити лише букви та цифри"
                            }
                        })} type='text' placeholder="Ім'я користувача"></input>
                        {errors.username && <p className="text-red-400">{errors.username.message}</p>}
                        <p>Пароль:</p>
                        <input className="rounded-md font-medium text-[#414143]" {...register('password', {
                            required: "Пароль обов'язковий",
                            minLength: {
                                value: 8,
                                message: "Пароль повинен містити не менше 8 символів"
                            },

                        })} type="password" placeholder="Пароль"></input>
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>
                </div>
                <button className='m-[0px]  transition ease-in-out duration-[250] border-[1px] rounded-lg bg-[black] border-[#f77031] text-[#f77031] hover:bg-[#f77031] hover:border-[black] h-[40px] w-[150px] hover:text-white' onClick={handleSubmit(onSubmit)}>Вхід</button>
            </div>
        </div>
    )
}

export default observer(LoginForm);