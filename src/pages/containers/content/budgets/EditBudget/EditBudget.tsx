import { FiX } from "react-icons/fi"
import { EditButton, ModalCont, ModalOptions } from "./EditBudgetStyle"

export const EditBudget = ({handleModal}: any) => {

    return (
        <ModalCont>
            <ModalOptions>
                <div className="modalHeader">
                    <div>
                        <h4>Alterar orçamento</h4>
                        <p>Altere as informações do orçmaneot de acordo com suas necessidades!</p>
                    </div>
                    <FiX className="exitIcon" onClick={() => handleModal(false)}/>
                </div>

                <div className="names">
                    <div className="name">
                        <label className="labelDefault">Nome</label>
                        <input className="inputDefault" type="text" />
                    </div>

                    <div className="client">
                        <label className="labelDefault">Client</label>
                        <input className="inputDefault" type="text" />
                    </div>
                </div>

                <div className="desc">
                    <label className="labelDefault">Descrição das atividades</label>
                    <input 
                        className="inputDefault" 
                        placeholder="Explicação das atividades a serem realizadas ..."
                        type="text"
                    />
                </div>

                <div className="utils">
                    <div className="utilItem">
                        <label className="labelDefault">Data Inicial</label>
                        <input type="date" className="inputDefault" />
                    </div>

                    <div className="utilItem">
                        <label className="labelDefault">Data Final</label>
                        <input type="date" className="inputDefault" />
                    </div>

                    <div className="utilItem">
                        <label className="labelDefault">Valor</label>
                        <input type="text" className="inputDefault" />
                    </div>
                    
                </div>

                <EditButton>
                    Confirmar alterações
                </EditButton>

            </ModalOptions>
        </ModalCont>
    )
}