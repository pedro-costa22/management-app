export const date = new Date();

export enum Month {
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}


export function handleMonth() {
    let month = date.getMonth();
    return Month[month];
}