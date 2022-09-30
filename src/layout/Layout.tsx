import { Outlet } from "react-router-dom";
import { SideMenu } from "../pages/containers/menu/SideMenu";
import { ProtectedLayout } from "./ProtectedLayout/ProtectedLayout";

const Layout = () => {
    return (
        <ProtectedLayout>
            <div>
            <div className='menu'>
                <SideMenu />
                <h4>estou no layout</h4>
            </div>

             <div>
                <Outlet />
                </div>
                
            </div>
        </ProtectedLayout>
    );
}

export default Layout;