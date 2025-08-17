
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user,setUsers] = useState('')
    const [name, setName] = useState('')
    const nagative = useNavigate();
    const fetchUer = async () => {
        try {
            const res = await axios.get("http://localhost:9999/users");
            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };
     useEffect(() => {
            fetchUer();
        }, []);
    
    
    const handleLogin = (e) => {
           e.preventDefault();
           if(name === ''){
            window.alert("Please enter your name")
           }
           if(name === 'Tri123'){
            alert("Login Successful")
            nagative("/movies")
           }
    }

    return(
     <Container style={{maxWidth:'400px', marginTop:'100px'}} className='mx-auto'>
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
                <Form.Label>User Name</Form.Label>
                <Form.Control type='text' placeholder='Enter user name' value={name}
                onChange={(e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>PassWord</Form.Label>
                <Form.Control type='PassWord' placeholder='Enter Your passWord'></Form.Control>
            </Form.Group>
            <Button type='submit'>Login</Button>
        </Form>
     </Container>
    )

    


}
export default Login