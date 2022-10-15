import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaCoins } from "react-icons/fa";

export const Financial = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaCoins />}
                title="Controle financeiro"
            />
    
        </>
    )
};

