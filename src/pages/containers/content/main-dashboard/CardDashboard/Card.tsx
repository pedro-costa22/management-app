import { useState } from "react"
import { CardCont } from "./CardStyle"

export const Card = ({background, icon, meta, value}: any) => {

    return (
        <CardCont background={background}>
            <div className="icon">
                <span>{icon}</span>
            </div>
            <div className="infos">
                <p> {meta}</p>
                <p className="value">
                    {value}%
                </p>
                <p>concluído</p>
            </div>
        </CardCont>
    )
}