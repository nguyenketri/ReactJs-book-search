import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Movie from './Movie';
import Booking from './Booking';
function App() {
    return (
        <Container>
      <BrowserRouter>
        <div className="container mt-3">
          <Routes>
            <Route path="/movies" element={<Movie />} />
            <Route path="/booking/create" element={<Booking />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
    )
}

export default App;