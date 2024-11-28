import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.js';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    let navigate = useNavigate(); // 경로조작함수
    //navigate('/detail');

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand>  {/* a태그를이용한 페이지이동 */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>  {/* Link to 를이용한 페이지이동 */}
                        <Nav.Link onClick={()=>{navigate('/detail')}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/info')}}>Info</Nav.Link>  {/* useNavigate 함수 를이용한 페이지이동 */}
                    </Nav>
                </Container>
            </Navbar>



            <Routes>
                <Route path='/' element={<Home foods={foods} />}/>
                <Route path='/detail' element={<h1>detail page</h1>} />
                <Route path='/info' element={<h1>info page</h1>} />
            </Routes>

        </div>
    )

}



export default FoodMarket;