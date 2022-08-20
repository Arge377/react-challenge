import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormComponent from '../components/FormComponent';
import GridComponent from '../components/GridComponent';
import NavbarComponent from '../components/nav/NavbarComponent';

const Rutas = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
        <Route path="/" element={<FormComponent/>}/>
        <Route path="/members" element={<GridComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Rutas