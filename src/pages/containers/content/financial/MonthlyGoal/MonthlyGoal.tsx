import { getUserLocalStorage } from "context/utils/utils";
import { useEffect, useState } from "react"
import { MonthlyCont } from "./MonthlyGoalStyle"

import { InsertFinancial } from "../utilsFinancial";
import { handleMonth } from "./handleMonth";
import { IMonthly } from "interfaces/Financial/monthly.model";

export const MonthlyGoal = ({setSuccess, value, modalDelete, getNewValue}: IMonthly) => {

    const [monthly, setMonthly] = useState(value);
    const [defaultValue, setDefaultValue] = useState<boolean>(true);
    const month = handleMonth();

    async function HandleMonthly() {
        const monthlyObj = {
            monthlyGoal: monthly,
            weeklyGoal: '',
            idUser: getUserLocalStorage().id
        }

        const monthlyResquest = await InsertFinancial(monthlyObj);
        if(!monthlyResquest.erro) {
            setSuccess(true);
            getNewValue();
        }

    }

    const handleValueInput = () => {
        setMonthly(value);

        setDefaultValue(false);
    }

    useEffect(() => {
        if(value === 0) {
            setMonthly('');
        }

    }, [value])


    return (
        <MonthlyCont>
            <label className="labelDefault">
                Adicionar uma meta mensal - {month} 
            </label>
            <div className="inputValue">
                <span>R$ {defaultValue ? value : ''}</span>
                <input 
                    type="number" 
                    className="inputDefault"
                    value={monthly}
                    onChange={(e) => setMonthly(e.target.value)}
                    onFocus={handleValueInput}

                />
            </div>
            <div className="btns">
                {value ? 
                    <button className="buttonDefault" onClick={HandleMonthly}>Atualizar</button>
                    :
                    <button className="buttonDefault" onClick={HandleMonthly}>Adicionar</button>
                }
                <button className="buttonDefault delete" onClick={() => modalDelete('MonthlyGoal')}>limpar</button>
            </div>
            
        </MonthlyCont>
    )

}