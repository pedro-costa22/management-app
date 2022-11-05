import { getUserLocalStorage } from "context/utils/utils";
import { GetFinancial, GetSale } from "../../financial/utilsFinancial";

const getById = {
    idUser: getUserLocalStorage().id
}

export async function monthlyGoal() {
    //get sales
    const sales = await GetSale(getById);
    const salesArray = [...sales.sales];
    let total: number = 0;

    salesArray.forEach(sale => {
        total += sale.sale;
    })

    
    //get meta monthly
    const getMonthly = await GetFinancial(getById);
    const monthly = getMonthly.financial.monthlyGoal;
    

    //calc 
    let totalMonthly = monthly;
    let totalSales = total;

    let calc = Math.round((totalSales * 100 ) / totalMonthly);
    return calc;

}

export async function weeklyGoal() {
        //get sales
        const sales = await GetSale(getById);
        const salesArray = [...sales.sales];
        let total: number = 0;
    
        salesArray.forEach(sale => {
            total += sale.sale;
        })
    
    
        //get meta monthly
        const getWeekly = await GetFinancial(getById);
        const weekly = getWeekly.financial.weeklyGoal;
        
    
        //calc 
        let totalWeekly = weekly;
        let totalSales = total;
    
        let calc = Math.round((totalSales * 100 ) / totalWeekly);
        return calc;

}

export async function budget() {

}
