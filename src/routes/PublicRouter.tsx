import {Outlet} from "react-router-dom";

const PublicRouter = () => {
    return(
        <>
            <p>Public</p>
            <Outlet/>
        </>
    )
}

export default PublicRouter;
