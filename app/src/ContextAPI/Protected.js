import { useAccountContext } from "./AccountContext";


const Protected = ({ children }) => {
    
    const {authUser} = useAccountContext();
    if(authUser) {
        return children
    } else {
        return <div className="loaderIcon" style={{ background: "#f8f8f8", minHeight: "100vh" }}>
            <img src="/Asserts/loader'" alt="loader" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }}></img>
        </div>
    }


}


export default Protected;