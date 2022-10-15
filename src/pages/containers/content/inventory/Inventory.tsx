import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";
import { useEffect, useState } from "react";

import { FaBoxOpen } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { HeaderInventory, InventoryCont, InventoryItems } from "./InventoryStyle";

export const Inventory = () =>{

    const [product, setProduct] = useState({
        name: '',
        min: '',
        max: '',
        current: ''
    })

    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaBoxOpen />}
                title="Controle de estoque"
            />

            <InventoryCont>
                <HeaderInventory>
                    <div className="inputName">
                        <label>Adicionar produto no estoque:</label>
                        <input 
                            type="text" 
                            placeholder="Digite o nome do produto..." 
                            value={product.name}
                            onChange={(e) => setProduct(prevState => ({...prevState, name: e.target.value}))}
                        />
                    </div>

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

                    <div className="contAdd">
                        <label>Adicionar</label>
                        <button className="btnAddProduct">
                            <FaPlusCircle className="iconAdd"/>
                            Adicionar
                        </button>
                    </div>
                </HeaderInventory>

                <InventoryItems>
                    <div className="itemsTitle">
                        <h3>Produtos cadastrados: </h3>
                    </div>
                    
                </InventoryItems>

 
            </InventoryCont>
        
        </>
    )
};

