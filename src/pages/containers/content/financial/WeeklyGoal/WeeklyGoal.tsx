import { getUserLocalStorage } from "context/utils/utils";
import { IWeekly } from "interfaces/Financial/weekly.model";
import { useEffect, useState } from "react"
import { InsertFinancial } from "../utilsFinancial";
import { WeeklyCont } from "./WeeklyGoalStyle"


export const WeeklyGoal = ({setSuccess, value, modalDelete, getNewValue}: IWeekly) => {

    const [weekly, setWeekly] = useState(value);
    const [defaultValue, setDefaultValue] = useState<boolean>(true);

    async function HandleWeekly() {
        const weeklyObj = {
            monthlyGoal: '',
            weeklyGoal: weekly,
            idUser: getUserLocalStorage().id
        }

        const weeklyResquest = await InsertFinancial(weeklyObj);
        if(!weeklyResquest.erro) {
            getNewValue();
            setSuccess(true);
        }

    }

    const handleValueInput = () => {
        setWeekly(value);

        setDefaultValue(false);
    }

    useEffect(() => {
        if(value === 0) {
            setWeekly('');
        }

    }, [value])

    return (
        <WeeklyCont>
            <label className="labelDefault">
                Adicionar uma meta semanal:
            </label>
            <div className="inputValue">
                <span>R$ {defaultValue ? value : ''}</span>
                <input 
                    type="number" 
                    className="inputDefault"
                    value={weekly}
                    onChange={(e) => setWeekly(e.target.value)}
                    onFocus={handleValueInput}
                />
            </div>
            <div className="btns">
                {value ? 
                    <button className="buttonDefault" onClick={HandleWeekly}>Atualizar</button>
                    :
                    <button className="buttonDefault" onClick={HandleWeekly}>Adicionar</button>
                }
                <button className="buttonDefault delete" onClick={() => modalDelete('WeeklyGoal')}>limpar</button>
            </div>
            
        </WeeklyCont>
    )

}