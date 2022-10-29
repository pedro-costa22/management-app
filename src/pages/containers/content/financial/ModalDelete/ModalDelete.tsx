import { DeleteCont, DeleteOptions } from "./ModalDeleteStyle"
import { IDeleteFinancial } from "interfaces/Financial/deletefinancial.model";

export const ModalDelete = ({openModal, confirmDelete}: IDeleteFinancial) => {

    return (
        <DeleteCont>
            <DeleteOptions>
                <div className="deleteHeader">
                    <h4>A meta será deletada, deseja continuar ?</h4>
                </div>

                <div className="btnsDelete">
                    <button className="confirm" onClick={() => confirmDelete()}>Confirmar</button>

                    <button className="cancel" onClick={() => openModal(false)}>Cancelar</button>
                </div>
            </DeleteOptions>
            
        </DeleteCont>
    )
}