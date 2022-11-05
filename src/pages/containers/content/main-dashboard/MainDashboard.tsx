import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaCalendarWeek, FaChartPie } from "react-icons/fa";
import { DashboardCont, DashboardHeader } from "./MainDashboardStyle";

//components
import { Card } from "./CardDashboard/Card";

import { FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { monthlyGoal, weeklyGoal } from "./calculations/metas";

export const MainDashboard = () =>{

    const [monthly, setMonthly] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);

    async function handleMonthly() {
        const monthlyValue = await monthlyGoal();
        setMonthly(monthlyValue);
    }

    async function handleWeekly() {
        const weeklyValue = await weeklyGoal();
        setWeekly(weeklyValue);
    }

    useEffect(() => {
        handleMonthly();
        handleWeekly();
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
                    <Card background="orange" icon={<FaCalendar />} meta="Meta mensal" value={monthly}/>
                    <Card background="blue" icon={<FaCalendarWeek />} meta="Meta semanal" value={weekly}/>
                    <Card background="green" icon={<FaCalendarWeek />} meta="Orçamento" value={10}/>
                </DashboardHeader>
                
            </DashboardCont>
            
        </>
    )
};

