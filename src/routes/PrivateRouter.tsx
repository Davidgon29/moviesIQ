import {Header} from "../components/Header";
import {Outlet} from "react-router-dom";

const PrivateRouter = () => {
    return(
        <div className="bg-gray-200">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default PrivateRouter;
