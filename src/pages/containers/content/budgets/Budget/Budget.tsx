import { IBudgetRender } from "interfaces/Budgets/budget.model";
import { BudgetCont } from "./BudgetStyle"

export const Budget = ({name, client, desc, startDate, finalDate, value, modalEdit, deleteBudget}: IBudgetRender) => {

   
    const formatDate = (date: string) => {
        const dateLetters = [...date];

        const year: string[] = [];
        const month: string[] = [];
        const day: string[] = [];

        for(let i = 0; i <= dateLetters.length; i++){
            if(i <= 3) {
                year.push(dateLetters[i]);
            }

            if(i > 3 && i <= 5) {
                month.push(dateLetters[i]);
            }

            if(i > 5) {
                day.push(dateLetters[i]);
            }
        }

        const dateFormat = `${day.toString().replaceAll(',', '')}/${month.toString().replace(',', '')}/${year.toString().replaceAll(',', '')}`;
        return dateFormat;
  
    }

    const formatStartDate = formatDate(startDate.toString());
    const formatFinalDate = formatDate(finalDate.toString());


   
    return (
        <BudgetCont>

            <div className="budgetHeader">
                <div className="budgetsName">
                    <input className="inputDefault" type="text" value={name} readOnly/>
                </div>

                <div className="budgetsClient">
                    <input className="inputDefault" type="text" value={client} readOnly/>
                </div>
            </div>

            <div className="budgets">

                <div className="desc">
                    <div>
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="budgetsFooter">
                    <div className="dates">
                        <span className="inputDefault">{formatStartDate}</span>
                        <span className="inputDefault">{formatFinalDate}</span>
                        <span className="inputDefault">R$ {value}</span>
                    </div>

                    <div className="btns">
                        <button className="buttonDefault edit" onClick={() => modalEdit()}>Editar</button>
                        <button className="buttonDefault delete" onClick={() => deleteBudget(name)}>Excluir</button>
                    </div>

                </div>


            </div>


        </BudgetCont>
    )


}