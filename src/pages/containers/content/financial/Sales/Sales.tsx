import { getUserLocalStorage } from "context/utils/utils";
import { ISale } from "interfaces/Financial/sales.model";
import { useEffect, useState } from "react"
import { AddSale } from "../utilsFinancial";
import { SalesCont } from "./SalesStyle";


export const SalesGoal = ({reload}: ISale) => {

    const [sale, setSale] = useState('');

    async function handleSale(){
        const saleObj = {
            sale: sale,
            idUser: getUserLocalStorage().id
        }

        const saleRequest = await AddSale(saleObj);
        if(!saleRequest.erro) {       
            reload();
        }
    }

   
    return (
        <SalesCont>
            <label className="labelDefault">
                Registrar venda
            </label>
            
            <div className="salesItems">
                <input 
                    type="number" 
                    className="inputDefault"
                    value={sale}
                    onChange={(e) => setSale(e.target.value)}
                />
                <button className="buttonDefault" onClick={handleSale}>Registrar</button>
            </div>
            
        </SalesCont>
    )

}