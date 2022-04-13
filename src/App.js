import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetails';
import Mail from './Mail';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/userdetails"  element={<UserDetails />} />
                    <Route path="/mail" element={<Mail />} />
               
                 </Routes>
             </BrowserRouter>
        </div>
    )

}
export default App;