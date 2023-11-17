import { Link } from "react-router-dom"
import "./dashboard.css";
export function Dashboard(){
    return(
      <div>
         <div className="Hello">
            <div>
                <Link className="btn btn-primary" to="/users">NewUsers</Link>
            </div>
         </div>
      </div>
    )
}