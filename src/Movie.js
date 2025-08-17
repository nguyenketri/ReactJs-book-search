import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Movie = () => {
     const [products, setProducts] = useState([]);
     const [genre, setGenre] = useState("");
     const [year, setYear] = useState("");
     const [searchTerm, setSearchTerm] = useState('');
    

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:9999/movies");
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

   
    const filteredProducts = products.filter(product => 
        (!genre || product.genre.toString() === genre) &&
        (!year || product.releaseYear.toString() === year) &&
        (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  return (
    <Container>
            <h1 className="text-center">Movie List</h1>
            <Row>
                 <Col md={3}>
            <Form.Group>
              <Form.Select
                as="select"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
            <option value="">All Genres</option>
                {products.map((p, index) => (
                  <option key={index} value={p.genre}>
                    {p.genre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
                </Col>
                <Col md={3}>
            <Form.Group>
              <Form.Select
                as="select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
            <option value="">All Years</option>
                {products.map((p, index) => (
                  <option key={index} value={p.releaseYear}>
                    {p.releaseYear}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
                </Col>
                
                <Col md={6}>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter title to search..." 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        className="mb-3" 
                    />
                </Col>
               </Row>
                <Row>
                <Col>
                  <Row >
                    <Link to={"/booking/create"} style={{display:'flex',justifyContent:'end',textDecoration:'none'}} className='mt-3 mb-3'>
                      <Button style={{width:'150px'}} variant='success'>Book Ticket</Button>
                    </Link>
                  
                  </Row>
                    <Row>
                        {filteredProducts.map(product => (
                            <Col md={3} key={product.id} className="mb-3">
                                <Card className="h-100 d-flex flex-column">
                                    <Card.Img style={{height:'200px'}} variant="top" src={`/images/${product.poster}`} />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                           <p > <strong>Genre</strong> {product.genre} <br/> </p>
                                            <p ><strong>Release Year</strong> {product.releaseYear} <br/> </p>
                                             <p ><strong>Duration:</strong> {product.duration} <br/> </p>
                                               <p ><strong>Rating:</strong> {product.rating} <br/> </p>
                                                 <p ><strong>Booked:</strong> {product.booked} <br/> </p>
                                         </Card.Text>
                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
         
        </Container>
  )
}

export default Movie
