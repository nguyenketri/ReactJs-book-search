
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
   
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const nagative = useNavigate();
    const fetchUer = async () => {
        try {
            const res = await axios.get("http://localhost:9999/users");
            
        } catch (err) {
            console.error(err);
        }
    };
     useEffect(() => {
            fetchUer();
        }, []);
    
    
    const handleLogin = async (e) => {
           e.preventDefault();
           if(userName === ""){
            window.alert("Please enter your name")
           }else if(passWord === ""){
            window.alert("Please enter your passWord")
           }else {
            // Gọi API để lấy danh sách accounts
            const res = await axios.get("http://localhost:9999/accounts");
            const accounts = res.data // Mảng accounts

            // Tím account trung userName và passWord
            const found = accounts.find((acc) => (
                acc.name === userName && acc.pass === passWord)
            )
            if(found){
               alert("Login Success")
            if(found.role === "admin"){
                nagative("/admin")
            }else if(found.role === "user"){
                nagative("/movies")
            }  
            }else{
                alert("UserName of PassWord Wrong, TRy again")
                nagative("/")
            }
           
           }
           
           
    }

    return(
     <Container style={{maxWidth:'400px', marginTop:'100px'}} className='mx-auto'>
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
                <Form.Label>User Name</Form.Label>
                <Form.Control type='text' placeholder='Enter user name' value={userName}
                onChange={(e) => setUserName(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>PassWord</Form.Label>
                <Form.Control type='PassWord' placeholder='Enter Your passWord'
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button type='submit'>Login</Button>
        </Form>
     </Container>
    )

    


}
export default Login