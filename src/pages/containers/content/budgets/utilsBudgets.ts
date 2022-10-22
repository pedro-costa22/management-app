import { setBudgetsAPI, getAllBudgetsAPI } from "apis/Budgets/budgets-api";
import { IBudget, IGetBudget } from "interfaces/Budgets/budget.model";

export async function SetBudget(budget: IBudget) {
    try {
        const addBudget = fetch(setBudgetsAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(budget)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return addBudget;
        
    } catch (error) {
        return null;
    }
}

export async function GetBudgetsAll(budgetObj: IGetBudget) {
    try {
        const requestBudgets = fetch(getAllBudgetsAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(budgetObj)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return requestBudgets;

    } catch (error) {
        return null;
        
    }
    
}