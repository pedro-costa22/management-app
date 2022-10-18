import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaUserFriends } from "react-icons/fa";

export const Budgets = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaUserFriends />}
                title="Orçamentos"
            />

        </>
    )
};

