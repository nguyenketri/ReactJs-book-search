import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {
     const [users, setUsers] = useState([]);
         const [user, setUser] = useState("");
         const [movie, setMovie] = useState("");
         const [searchTerm, setSearchTerm] = useState('');
         const [products, setProducts] = useState([]);
         useEffect(() => {
        fetchUer();
        fetchProduct();
       
    }, []);

    const fetchUer = async () => {
        try {
            const res = await axios.get("http://localhost:9999/users");
            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchProduct = async () => {
        try {
            const res = await axios.get("http://localhost:9999/movies");
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

   
    
  return (
    <Container>
                <h1 className="text-center">Movie List</h1>
                <Row>
                     <Col md={2}>
                <Form.Group>
                  <Form.Select
                    as="select"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  >
                <option value="">Select User</option>
                    {users.map((u, index) => (
                      <option key={index} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                    </Col>

                    <Col md={2}>
                <Form.Group>
                  <Form.Select
                    as="select"
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                  >
                <option value="">Select Movie</option>
                    {products.map((p, index) => (
                      <option key={index} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                    </Col>

                     <Col md={2}>
                <Form.Group>
                 <Form.Control
                  type='date'>

                  </Form.Control>
                </Form.Group>
                    </Col>
                 

                    <Col md={2}>
                      <Form.Control 
                            type="text" 
                            placeholder="Seats" 
                            value={searchTerm} 
                            onChange={e => setSearchTerm(e.target.value)} 
                            className="mb-3" 
                        />
                    </Col>
                    <Col md={3}>
                    <Button variant='success' className='text-center' style={{width:'100%'}}>Submit</Button>
                    </Col>
                   </Row>
                   
             
            </Container>
  )
}

export default Booking
