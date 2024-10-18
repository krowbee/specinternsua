import Header from "../components/Header"
import LoginForm from '../components/LoginPage/LoginForm'

const LoginPage = () => {
    return(
        <div className="h-full w-full flex justify-center items-center flex-col ">
            <Header></Header>
            <LoginForm></LoginForm>
        </div>
    )
}

export default LoginPage;