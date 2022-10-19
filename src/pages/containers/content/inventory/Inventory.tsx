import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Product } from "./Product/Product";

import { SetProduct, GetAllProducts } from "./utilsInventory";
import { getUserLocalStorage } from "context/utils/utils";
import { useEffect, useState } from "react";
import { ErrorService } from "components/Services/error/ErrorService";


import { FaBoxOpen } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { HeaderInventory, InventoryCont, InventoryItems } from "./InventoryStyle";

import { ModalEdit } from "./modalEdit/ModalEdit";
import { ModalDelete } from "./modalDelete/ModalDelete";


export const Inventory = () =>{

    const [product, setProduct] = useState({
        name: '',
        min: '',
        max: '',
        current: '',
        idUser: getUserLocalStorage().id
    })
    const [allProducts, setAllProducts] = useState<Array<object>>([]);
    const [error, setError] = useState<boolean>(false);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

    const [productToEdit, setProductToEdit] = useState({
        name: '',
        min: '',
        max: '',
        current: '',
        idUser: ''
    });
    const [productToDelete, setProductToDelete] = useState({
        name: '',
        idUser: ''
    })

    const openEdit = (name: string, min: string, max: string, current: string, idUser: string) => {
        setOpenModal(true);

        setProductToEdit(prevState => ({
            ...prevState,
            name: name,
            min: min,
            max: max,
            current: current,
            idUser: idUser
        }))
    }

    const deleteProduct = (name: string, idUser: string) => {
        setOpenModalDelete(true);

        setProductToDelete(prevState => ({
            ...prevState,
            name: name,
            idUser: idUser
        }));

    }

    async function insertProduct() {
        const minValue = parseInt(product.min);
        const maxValue = parseInt(product.max);
        const currentValue = parseInt(product.current);

        const newProduct = {
            name: product.name,
            min: minValue,
            max: maxValue,
            current: currentValue,
            idUser: product.idUser
        }

        const addProduct = await SetProduct(newProduct);
        const payload = {...addProduct}
        if(payload.erro) {
           return setError(true);
        }

        if(!payload.erro){
            setProduct(prevState => ({...prevState, name: '', min: '', max: '', current: ''}));
            setAllProducts(prevState => [...prevState, newProduct]);
        }

    }

    async function getProducts() {
        const getById = {
            idUser: product.idUser
        }

        const products = await GetAllProducts(getById);
        const payload = {...products};
        if(payload.products){
            payload.products.forEach((element: any) => {
                if(!allProducts.includes(element)){
                    setAllProducts(prevState => [...prevState, element]);
                }
            });  
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 8000)
    }, [error])


    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaBoxOpen />}
                title="Controle de estoque"
            />
            {error && <ErrorService errorText="Produto já cadastrado no estoque"/>}

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
                        <button className="btnAddProduct" onClick={insertProduct}>
                            <FaPlusCircle className="iconAdd"/>
                            Adicionar
                        </button>
                    </div>
                </HeaderInventory>

                {openModalDelete && <ModalDelete openModal={setOpenModalDelete} productToDelete={productToDelete} allProducts={allProducts} />}
                {openModal && <ModalEdit closeModal={setOpenModal} productToEdit={productToEdit} allProducts={allProducts}/>}
                <InventoryItems>
                
              
                <div className="itemsTitle">
                        <h3>Produtos cadastrados: </h3>
                </div>

                <div className="items">
                        {allProducts.map((item: any) => {
                            return (
                                <Product
                                    key={item.id}
                                    name={item.name}
                                    min={item.min}
                                    max={item.max}
                                    current={item.current} 
                                    idUser={item.idUser}
                                    openEdit={openEdit}
                                    deleteProduct={deleteProduct}
                                />
                            );
                        })}
                  
                </div>
                    
            </InventoryItems>

 
        </InventoryCont>
        
        </>
    )
};

