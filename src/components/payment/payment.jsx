import { Link } from "react-router-dom"
import "./payment.css"
export function Payment(){
    return( 
        <div>
            <div className="circle">
                <div className="inner">Phonepay</div>
            </div>
            <div className="hello">
               <div>
               <div className="hello2">
                    <h3>Name</h3>
                    <input className="hello3" type="text"></input>
                    <h3>Number</h3>
                    <input className="hello3" type="text"></input>
                    <h3>Amount</h3>
                    <input className="hello3" type="text"></input>
                    <h1></h1>
                    <Link to="/lastpage" className="btn btn-primary">Pay now</Link>
                    {/* <div>
                    <Link to="/lastpage">pay now</Link>
                    </div> */}
                </div>
               </div>
            </div>
        </div>
    )
    
}