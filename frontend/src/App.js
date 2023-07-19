import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customer from './customer/Customer';
import Farmer from './farmer/Farmer';
import Distributor from './distributor/Distributor';
import Manufacturer from './manufacturer/Manufacturer';
import Login from './login/Login';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Customer/>} />
                <Route path="/login" element={<Login />} />
                <Route path='/manufacturer' element={<Manufacturer />}/>
                <Route path='/distributor' element={<Distributor />}/>
                <Route path='/farmer' element={<Farmer />}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
