import { useState } from "react"
import { CardCont } from "./CardStyle"

export const Card = ({background, icon, meta, value, validPorcent}: any) => {

    return (
        <CardCont background={background}>
            <div className="icon">
                <span>{icon}</span>
            </div>
            <div className="infos">
                <p> {meta}</p>
                <p className="value">
                    {!validPorcent && <p className="valueRs">R$</p>}
                    {value}
                    {validPorcent && '%'}
                </p>
                <p>concluído</p>
            </div>
        </CardCont>
    )
}