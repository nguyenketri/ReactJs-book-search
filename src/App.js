import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Movie from './Movie';
import Booking from './Booking';
import Login from './Authentication/Login';
import Admin from './AccountController/Admin';
function App() {
    return (
        <Container>
      <BrowserRouter>
        <div className="container mt-3">
          <Routes>
            <Route path="/movies" element={<Movie />} />
            <Route path="/booking/create" element={<Booking />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
    )
}

export default App;