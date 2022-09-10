import { Outlet } from "react-router-dom";

import { SideMenu } from "../pages/containers/menu/SideMenu";

const Layout = () => {
    return (
        <div>
            <div className='menu'>
                <SideMenu />
                <h4>estou no layout</h4>
            </div>

            <div>
                <Outlet />
            </div>
                    

        </div>
    );
}

export default Layout;