import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';

//style
import GlobalStyle from './assets/globalStyles/Global-Style';

//pages
import { Home } from './pages/view/home/Home';
import { Login } from './pages/view/login/Login';
import { Register } from './pages/view/register/Register';
import Layout from './layout/Layout';

//contents 
import { MainDashboard } from './pages/containers/content/main-dashboard/MainDashboard';
import { Inventory } from './pages/containers/content/inventory/Inventory';
import { Employee } from './pages/containers/content/employee/Employee';
import { Financial } from './pages/containers/content/financial/Financial';
import { Projects } from './pages/containers/content/projects/Projects';
import { Goals } from './pages/containers/content/goals/Goals';




function App() {
  return (
      <>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/main' element={<Layout />} >
              <Route index element={<MainDashboard />} />
              <Route path='/main/inventory-control' element={<Inventory/>} />
              <Route path='/main/financial-control' element={<Financial />} />
              <Route path='/main/employee-control' element={<Employee />} />
              <Route path='/main/projects' element={<Projects />} />
              <Route path='/main/goals' element={<Goals />} />
            </Route>

          </Routes>
        </Router>
      </>
  );
}

export default App;
