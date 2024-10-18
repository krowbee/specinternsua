import { Navigate } from "react-router-dom"

const ProtectedRoute = ({isLoginned, children}) => {
    if(!isLoginned){
        return(<Navigate to='/workshop/login'/>)
    }
    return children;
}

export default ProtectedRoute;