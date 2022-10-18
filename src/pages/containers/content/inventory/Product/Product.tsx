import { ProductItem } from "./ProductStyle";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";


export const Product = ({name, min, max, current, idUser, openEdit, deleteProduct}: any) => {

    return (
        <ProductItem>
            <div className="inputName">
               <span>{name}</span>
            </div>

            <div className="inputMin">
                <span>{min}</span>
            </div>

            <div className="inputMax">
                <span>{max}</span>
            </div>

            <div className="inputCurrent">
                <span>{current}</span>
            </div>

            <div className="contAdd">
                <button 
                    className="btnEdit" 
                    onClick={() => openEdit(name, min, max, current, idUser)}>
                    <FaRegEdit />
                </button>
                <button className="btnDelete" onClick={() => deleteProduct(name, idUser)}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </ProductItem>
    )
}