import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Guidline from './Components/Guidline/guidline';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import MyForm from './Components/Form/MyForm';
import Tips from './Components/Tips/Tips';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        
          <Routes>
          <Route path="/donor" element={<Form />} />
            <Route path="/reciever" element={<MyForm />} />
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<Guidline />}/>
            <Route path="/tips" element={<Tips/>}/>
             
          </Routes>
         
            
        </div>
      </Router>
    </div>
  );
};

export default App;
