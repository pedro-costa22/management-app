import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaBoxOpen } from "react-icons/fa";

export const Inventory = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaBoxOpen />}
                title="Controle de estoque"
            />
        
        </>
    )
};

