import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function CheckOut(){
    
    const client = true //useSelector((state) => state.client);
    const location = useLocation();
    return  client ?(
        <>
        <h1>Check out</h1>
        </>
    )
    : (
        <Navigate to= "/login" state={{prevUrl: location.pathname}}/>
    )
}
export default CheckOut;