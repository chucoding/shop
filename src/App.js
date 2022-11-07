import {useState} from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data';
import Detail from './pages/Detail';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import axios from "axios";

function App() {

  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className='container'>
              <div className="row">
                { shoes.map(shoe => <Card shoe={shoe} key={shoe.id}/>) }
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                setShoes([...shoes, ...result.data]);
               }).catch(()=>{
                console.log("실페함 ㅅㄱ");
               })
            }}>더보기</button>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
      </Routes>
    </div>
  );
}

const Event = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoe.id*1+1)+".jpg"} width="80%"/>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
    </div>
  );
};


export default App;
