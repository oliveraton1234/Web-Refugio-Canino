import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/principal/Inicio';
import Contacto2 from './componentes/contact/Contacto2';
import LoginP from './componentes/login/LoginP';
import RegistroP from './componentes/Registro/RegistroP';
import Dashboard from './componentes/Dashboard/Dashboard';
import VisitasU from './componentes/Usuario/VisitasU';
import RequisitosU from './componentes/Usuario/RequisitosU';
import Editar from './componentes/Dashboard/Editar';
import Usuario from './componentes/Dashboard/Usuario';
import EditarU from './componentes/Dashboard/EditarU';
import Solicita from './componentes/Usuario/Solicita';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Contacto' element={<Contacto2/>}/>
        <Route path='/Ingresa' element={<LoginP/>}/>
        <Route path='/Registro' element={<RegistroP/>}/>
        <Route path='/Admin' element={<Dashboard/>}/>
        <Route path='/Visita' element={<VisitasU/>}/>
        <Route path='/Requisitos' element={<RequisitosU/>}/>
        <Route path='/Editar' element={<Editar/>}/>
        <Route path='/Usuario' element={<Usuario/>}/>
        <Route path='/EditarU' element={<EditarU/>}/>
        <Route path='/Solicita' element={<Solicita/>}/>
      </Routes>
    </>
    
  );
}

export default App;
