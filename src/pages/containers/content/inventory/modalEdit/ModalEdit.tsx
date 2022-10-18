import { EditButton, ModalCont, ModalOptions } from "./ModalEditStyle"

import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

export const ModalEdit = ({closeModal, productToEdit}: any) => {

    const [product, setProduct] = useState({
        name: productToEdit.name,
        min: productToEdit.min,
        max: productToEdit.max,
        current: productToEdit.current,
        idUser: productToEdit.idUser,
    });



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
                        <label>Adicionar produto no estoque:</label>
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

                <EditButton type="submit">
                    Confirmar alterações
                </EditButton>
                
            </ModalOptions>
        </ModalCont>
    )
}