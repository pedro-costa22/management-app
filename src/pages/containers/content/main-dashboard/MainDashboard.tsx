import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaCalendarWeek, FaChartPie, FaLayerGroup } from "react-icons/fa";
import { DashboardCont, DashboardGraficts, DashboardHeader } from "./MainDashboardStyle";

//components
import { Card } from "./CardDashboard/Card";

import { FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { sales, monthlyGoal, weeklyGoal } from "./calculations/metas";

export const MainDashboard = () =>{

    const [monthly, setMonthly] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);
    const [salesValue, setSalesValue] = useState<number>(0);

    async function handleMonthly() {
        const monthlyValue = await monthlyGoal();
        setMonthly(monthlyValue);
    }

    async function handleWeekly() {
        const weeklyValue = await weeklyGoal();
        setWeekly(weeklyValue);
    }

    async function handleSales() {
        const salesObj = await sales();
        setSalesValue(salesObj);
    }

    

    useEffect(() => {
        handleMonthly();
        handleWeekly();
        handleSales();
    }, [])

    

    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaChartPie />}
                title="Dashboard"
            />

            <DashboardCont>
                <DashboardHeader>
                    <Card background="orange" icon={<FaCalendar />} meta="Meta mensal" value={monthly} validPorcent={true}/>
                    <Card background="blue" icon={<FaCalendarWeek />} meta="Meta semanal" value={weekly} validPorcent={true}/>
                    <Card background="green" icon={<FaLayerGroup />} meta="Vendas diaria" value={salesValue} validPorcent={false}/>
                </DashboardHeader>

                <DashboardGraficts>
                    
                </DashboardGraficts>
                
            </DashboardCont>
            
        </>
    )
};

