import { useContext, useState } from "react"
import { Context } from ".."
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const { store } = useContext(Context);
    const navigate = useNavigate()

    const handleRegister = async () =>{
        const response = await store.registration(username, email, password)
        try{
            if(response == 200){
                navigate('/')
            }
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <p>Username:</p>
            <input onChange={(e) => setUsername(e.target.value)} type='text' placeholder="Username"></input>
            <p>Email:</p>
            <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder="Email"></input>
            <p>Password:</p>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
            <button onClick={() => {handleRegister()}}>Register</button>

        </div>
    )
}

export default LoginForm;