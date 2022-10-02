import { Outlet } from "react-router-dom";
import { SideMenu } from "../pages/containers/menu/SideMenu";
import { ContLayout } from "./LayoutStyle";

import { ProtectedLayout } from "./ProtectedLayout/ProtectedLayout";

const Layout = () => {
    return (
        <ProtectedLayout>
            <ContLayout>
                <div className='menu'>
                    <SideMenu />
                </div>

                <div className="content">
                    <Outlet />
                </div>
            </ContLayout>
        </ProtectedLayout>
    );
}

export default Layout;