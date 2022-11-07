import { DeleteCont, DeleteOptions } from "./ModalDeleteStyle"

import { deleteProductAPI } from "apis/Inventory/inventory-api";
import { IDelete } from "interfaces/Inventory/delete.model";

export const ModalDelete = ({openModal, productToDelete, allProducts}: IDelete) => {

    async function Delete() {
        try {
            const deleteProduct = await fetch(deleteProductAPI, {
                method: 'POST',
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                body: JSON.stringify(productToDelete)
            })
            .then(resp => resp.json())
            .then(data => {
                if(data.erro === false) {
                    openModal(false);
                    handleProducts();
                }
                return data;
               
            })

            return deleteProduct;

        } catch (error) {
            return null;
            
        }
        
    }

    const handleProducts = () => {
        let indexProduct;

        allProducts.map((item: any) => {
            if(item.name === productToDelete.name) {
                indexProduct = allProducts.indexOf(item);
            }
        })

        allProducts.splice(indexProduct, 1);
    }


    return (
        <DeleteCont>
            <DeleteOptions>
                <div className="deleteHeader">
                    <h4>O produto será deletado, deseja continuar ?</h4>
                </div>

                <div className="btnsDelete">
                    <button className="confirm" onClick={Delete}>Confirmar</button>

                    <button className="cancel" onClick={() => openModal(false)}>Cancelar</button>
                </div>
            </DeleteOptions>
            
        </DeleteCont>
    )
}