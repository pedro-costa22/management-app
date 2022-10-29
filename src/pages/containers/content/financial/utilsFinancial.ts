import { getFinancialAPI, setFinancialAPI, deleteFinancialAPI} from "apis/Financial/financial-api";
import { addSaleAPI, deleteSaleAPI, getSalesAPI } from "apis/Financial/sales.api";

export async function InsertFinancial(financial: any) {
    try {
        const addfinancial = fetch(setFinancialAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(financial)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return addfinancial;
        
    } catch (error) {
        return null;
    }
}

export async function GetFinancial(financial: any) {
    try {
        const getFinancial = fetch(getFinancialAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(financial)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return getFinancial;
        
    } catch (error) {
        return null;
    }
}

export async function DeleteFinancial(financial: any) {
    try {
        const deleteFinancial = fetch(deleteFinancialAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(financial)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return deleteFinancial;
        
    } catch (error) {
        return null;
    }
}

export async function AddSale(sale: any) {
    try {
        const addSale = fetch(addSaleAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(sale)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return addSale;
        
    } catch (error) {
        return null;
    }
}

export async function GetSale(sale: any) {
    try {
        const getSale = fetch(getSalesAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(sale)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return getSale;
        
    } catch (error) {
        return null;
    }
}

export async function DeleteSale(sale: any) {
    try {
        const deleteSale = fetch(deleteSaleAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(sale)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return deleteSale;
        
    } catch (error) {
        return null;
    }
}