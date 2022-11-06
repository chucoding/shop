import {useState} from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data';
import Detail from './pages/Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  const [shoes] = useState(data);
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
                { shoes.map(data => <Card data={data} key={data.id}/>) }
              </div>
            </div>
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
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
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.data.id+1)+".jpg"} width="80%"/>
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  );
};

export default App;
