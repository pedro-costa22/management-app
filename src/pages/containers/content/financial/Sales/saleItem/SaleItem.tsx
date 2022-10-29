
import { SaleItemCont } from "./SaleItemStyle";

import { FaRegTrashAlt } from "react-icons/fa";
import { getUserLocalStorage } from "context/utils/utils";
import { DeleteSale } from "../../utilsFinancial";
import { ISaleItem } from "interfaces/Financial/sales.model";

export const SaleItem = ({sale, id, reload}: ISaleItem) => {

    async function deleteSale() {
        const saleObj = {
            id: id,
            idUser: getUserLocalStorage().id
        }

        const saleRequest = await DeleteSale(saleObj);
        if(!saleRequest.erro) {
            reload();
        }
        
    }


    return (
        <SaleItemCont>
            <span className="inputDefault">R$ {sale}</span>
            <button className="buttonDefault" onClick={deleteSale}><FaRegTrashAlt /></button>
        </SaleItemCont>
    )

}