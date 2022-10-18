import { setProductAPI, getProductsAPI } from "apis/Inventory/inventory-api";
import { IProduct } from "interfaces/Inventory/product.model";


export async function SetProduct(product: IProduct) {
    try {
        const addProduct = fetch(setProductAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(product)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return addProduct;
        
    } catch (error) {
        return null;
    }
    
}

export async function GetAllProducts(user: object) {
    try {
        const getProducts = fetch(getProductsAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return getProducts;

    } catch (error) {
        return null;
    }
    
}

export async function updateProduct() {
    
}