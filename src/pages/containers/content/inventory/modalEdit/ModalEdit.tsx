import { useEffect, useState } from "react";

import { EditButton, ModalCont, ModalOptions } from "./ModalEditStyle";

import { updateProduct } from "../utilsInventory";

import { IProductEdit } from "interfaces/Inventory/product.model";

import { FiX } from "react-icons/fi";
import { Product } from "../Product/Product";
import { IEdit } from "interfaces/Inventory/delete.model";

//services

export const ModalEdit = ({closeModal, productToEdit, allProducts}: IEdit) => {

    const [product, setProduct] = useState({
        name: productToEdit.name,
        min: productToEdit.min,
        max: productToEdit.max,
        current: productToEdit.current,
        idUser: productToEdit.idUser,
    });
    const [errorName, setErrorName] = useState<number>(0);

    async function editProduct() {

        const editProduct: IProductEdit = {
            name: productToEdit.name,
            idUser: productToEdit.idUser,
            newName: product.name,
            newMin: product.min,
            newMax: product.max,
            newCurrent: product.current
        }

        const edit = await updateProduct(editProduct);
        if(edit.erro) {
            setErrorName(1);
            return null;
        }

        closeModal(false);
        handleProducts();

        
    }

    const handleProducts = () => {
        let indexProduct;

        allProducts.map((item: any) => {
            if(item.name === productToEdit.name) {
                indexProduct = allProducts.indexOf(item);
                allProducts[indexProduct] = product;
            }
        })

        
    }


    useEffect(() => {
        setErrorName(0);

    }, [product])

    return (
        <ModalCont>
            <ModalOptions>
                <div className="modalHeader">
                    <div>
                        <h4>Alterar produto</h4>
                        <p>Altere as informações do produto de acordo com suas necessidades!</p>
                    </div>
                    <FiX className="exitIcon" onClick={() => closeModal(false)}/>
                </div>

                <div className="product">
                    <div className="inputName">
                        <div className="nameCont">
                            <label>Alterar nome do produto</label>
                            <span style={{opacity: errorName}} className="errorName">O nome já foi utilizado em outro produto</span>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Digite o nome do produto..." 
                            value={product.name}
                            onChange={(e) => setProduct(prevState => ({...prevState, name: e.target.value}))}
                        />
                    </div>

                    <div className="qtd">
                        <div className="inputMin">
                            <label>Min</label>
                            <input 
                                type="number"  
                                value={product.min}
                                onChange={(e) => setProduct(prevState => ({...prevState, min: e.target.value}))} 
                            />
                        </div>

                        <div className="inputMax">
                            <label>Max</label>
                            <input 
                                type="number"  
                                value={product.max}
                                onChange={(e) => setProduct(prevState => ({...prevState, max: e.target.value}))}           
                            />
                        </div>

                        <div className="inputCurrent">
                            <label>Atual</label>
                                <input 
                                    type="number"  
                                    value={product.current}
                                    onChange={(e) => setProduct(prevState => ({...prevState, current: e.target.value}))}              
                            />
                        </div>
                    </div>

                     
                </div>

                <div className="response">
                        
                </div>

                <EditButton type="submit" onClick={editProduct}>
                    Confirmar alterações
                </EditButton>
                
            </ModalOptions>
        </ModalCont>
    )
}