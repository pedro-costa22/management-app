import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaChartPie } from "react-icons/fa";


export const MainDashboard = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaChartPie />}
                title="Dashboard"
            />
            
        </>
    )
};

