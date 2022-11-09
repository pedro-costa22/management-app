import { HeaderSearch } from "components/HeaderSearch/HeaderSearch";
import { PageTitle } from "components/PageTitle/PageTitle";

import { FaCalendarWeek, FaChartPie, FaLayerGroup } from "react-icons/fa";
import { DashboardCont, DashboardGraficts, DashboardHeader } from "./MainDashboardStyle";

//components
import { Card } from "./CardDashboard/Card";

import { FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { sales, monthlyGoal, weeklyGoal, products, budgets } from "./calculations/metas";

//chart js
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement, 
    CategoryScale,
    LinearScale,
    PointElement,
    DoughnutController,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    DoughnutController,
    ArcElement,
)


export const MainDashboard = () =>{

    const [monthly, setMonthly] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);
    const [salesValue, setSalesValue] = useState<number>(0);

    //datas to dashboard
    const [productsArray, setProductsArray] = useState<Array<number>>([]);
    const [productsLabel, setProductLabel] = useState<Array<string>>([]);
    const [budgetsLabel, setBudgetsLabel] = useState<Array<string>>([]);
    const [budgetsArray, setBudgetsArray] = useState<Array<number>>([]);

    const data = {
        labels: [...productsLabel],
        datasets: [{
            data: [...productsArray],
            backgroundColor: ['#A862FF', '#C97FFF'],
           
        }]
        
    };
    const dataCircle = {
        labels: [...budgetsLabel],
        datasets: [{
            data: [...budgetsArray],
            backgroundColor: ['#FF8EAB', '#399AE6', '#3CD8BF'],
            hoverOffset: 2,

        }]
        
    };
    const options = {
        responsive: true,
    };
    const optionsCircle = {
        responsive: true,
    };

    async function handleMonthly() {
        const monthlyValue = await monthlyGoal();
        setMonthly(monthlyValue);
    };

    async function handleWeekly() {
        const weeklyValue = await weeklyGoal();
        setWeekly(weeklyValue);
    };

    async function handleSales() {
        const salesObj = await sales();
        setSalesValue(salesObj);
    };

    async function handleProducts() {
        const productObj = await products();

        productObj.products.forEach((product: any) => {
            setProductsArray(prevState => [...prevState, product.current]);
            setProductLabel(prevState => [...prevState, product.name]);
        });
 
    };

    async function handleBudgets() {
        const budgetsArray = await budgets();
        budgetsArray.forEach((item: any) => {
            setBudgetsLabel(prevState => [...prevState, item.name]);    
            setBudgetsArray(prevState => [...prevState, item.value]);
        });
        
    };


    useEffect(() => {
        handleMonthly();
        handleWeekly();
        handleSales();
        handleProducts();
        handleBudgets();
    }, []);

    

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
                    <div className="bar">
                        <p className="labelDefault">Acompanhamento do estoque</p>
                        <Bar data={data} options={options}></Bar>
                    </div>
                    <div className="circle">
                        <p className="labelDefault">Acompanhamento dos orçamentos</p>
                        <div>
                            <Doughnut data={dataCircle} options={optionsCircle}></Doughnut>
                        </div>
                    </div>
                </DashboardGraficts>
                
            </DashboardCont>
            
        </>
    );
};

