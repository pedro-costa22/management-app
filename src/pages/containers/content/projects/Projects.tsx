import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaLayerGroup } from "react-icons/fa";

export const Projects = () =>{
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaLayerGroup />}
                title="Gestão de projetos"
            />

        </>
    )
};

