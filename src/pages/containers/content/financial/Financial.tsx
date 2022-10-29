import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";
import { SuccessService } from "components/Services/success/Success";
import { getUserLocalStorage } from "context/utils/utils";
import { useEffect, useState } from "react";

import { FaCoins } from "react-icons/fa";
import { AddFinancialCont, FinancialCont, Sales, SalesItems } from "./FinancialStyle";
import { ModalDelete } from "./ModalDelete/ModalDelete";
import { MonthlyGoal } from "./MonthlyGoal/MonthlyGoal";
import { SaleItem } from "./Sales/saleItem/SaleItem";
import { SalesGoal } from "./Sales/Sales";
import { DeleteFinancial, GetFinancial, GetSale } from "./utilsFinancial";
import { WeeklyGoal } from "./WeeklyGoal/WeeklyGoal";

export const Financial = () =>{
    const [success, setSuccess] = useState<boolean>(false);
    const [financials, setFinancials] = useState({
        monthly: '',
        weekly: ''
    });
    const [sales, setSales] = useState<Array<object>>([]);

    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const [financialToDelete, setFinancialToDelete] = useState({
        idUser: getUserLocalStorage().id,
        monthlyGoal: "",
        weeklyGoal: ""
    })

    async function getFinancial() {
        const getByID = {
            idUser: getUserLocalStorage().id
        }

        const getFinancial = await GetFinancial(getByID);
        const payload = {...getFinancial.financial}

        if(payload){
            return setFinancials(prevState => ({
                ...prevState,
                monthly: payload.monthlyGoal,
                weekly: payload.weeklyGoal
            }))
        }

       
    }

    const handleModalDelete = (del: string) => {
        setModalDelete(true);

        if(del === 'MonthlyGoal'){
            setFinancialToDelete(prevState => ({
                ...prevState,
                monthlyGoal: financials.monthly,
                weeklyGoal: ""
            }))
        }

        if(del === 'WeeklyGoal'){
            setFinancialToDelete(prevState => ({
                ...prevState,
                monthlyGoal: "",
                weeklyGoal: financials.weekly
            }))
        }
    }

    async function handleDeleteFinancial(){
       const requestDelete = await DeleteFinancial(financialToDelete);
       if(!requestDelete.erro) {
            getFinancial();
            setModalDelete(false);
       }

    }

    async function getSales() {
        const getById = {
            idUser: getUserLocalStorage().id
        }

        const salesRequest = await GetSale(getById);
        const payload = {...salesRequest}
        if(payload.sales){
            payload.sales.forEach((element: any) => {
                if(!sales.includes(element)) {
                    setSales(prevState => [...prevState, element])
                }
            }) 
        }
    }

    const reload = () => {
        window.location.reload();
    }

   
    useEffect(() => {
        getFinancial();
        getSales();

    }, [])

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false);
        }, 8000)
    }, [success])


    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaCoins />}
                title="Controle financeiro"
            />
            {success && <SuccessService sucessText={"Meta atualizada com sucesso"} />}
            

            <FinancialCont>
                {modalDelete && <ModalDelete openModal={setModalDelete} confirmDelete={handleDeleteFinancial}/>}

                <AddFinancialCont>
                    <div className="column">
                        <MonthlyGoal 
                            setSuccess={setSuccess}
                            value={financials.monthly}
                            modalDelete={handleModalDelete}
                            getNewValue={getFinancial}
                        />
                    </div>
                    <div className="column">
                        <WeeklyGoal 
                            setSuccess={setSuccess}
                            value={financials.weekly}
                            modalDelete={handleModalDelete}
                            getNewValue={getFinancial}
                        />
                    </div>
                </AddFinancialCont>

                <Sales>
                    <SalesGoal reload={reload}/>
                    <SalesItems>
                        {sales.map((item: any) => {
                                return (
                                  <SaleItem
                                    key={item.id}
                                    sale={item.sale}
                                    id={item.id}
                                    reload={reload}
                                  />
                                );
                            })}
                  
                    </SalesItems>
                </Sales>
                
            </FinancialCont>
    
        </>
    )
};

