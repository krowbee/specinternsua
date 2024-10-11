import { useContext, useState } from "react"
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite'

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [ password, setPassword ] = useState();
    const { store } = useContext(Context);
    const navigate = useNavigate()

    const handleLogin = async () =>{
        const response = await store.login(username, password)
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
            <p>Password:</p>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
            <button onClick={() => {handleLogin()}}>Login</button>
        </div>
    )
}

export default observer(LoginForm);