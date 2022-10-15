import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaUserFriends } from "react-icons/fa";

export const Employee = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaUserFriends />}
                title="Gestão de funcionarios"
            />

        </>
    )
};

