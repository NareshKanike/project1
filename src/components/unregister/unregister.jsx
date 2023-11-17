 import { Link } from "react-router-dom"
 export function Unregistered(){
    return(
        <div>
            <h2>Unable to find your account</h2>
            <p><span><Link to="/register">Register</Link></span></p>
        </div>
    )
}
