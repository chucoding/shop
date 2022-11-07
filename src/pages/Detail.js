import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {Context1} from './../App.js'

function Detail(props) {

    const [display, setDisplay] = useState(true);

    useEffect(()=>{
        let a = setTimeout(()=>{
            setDisplay(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        }
    }, []);

    const {id} = useParams();
    let object = props.shoes.find((x) => x.id == id)
    const [tab, setTab] = useState(0);

    return (
        <div className={`container`}>
            {display ? 
            <div className="alert alert-warning">
                2초이내 구매시 할인
            </div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(object.id*1+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{object.title}</h4>
                    <p>{object.content}</p>
                    <p>{object.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>setTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>setTab(1)}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>setTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent shoes={props.shoes} tab={tab}/>
        </div>
    ); 
}

function TabContent({tab, shoes}) {

    let {재고} = useContext(Context1);
    console.log(재고);

    const [fade, setFade] = useState('');
    useEffect(()=>{
        let a = setTimeout(()=>setFade("end"), 100)
        return()=>{
            clearTimeout(a);
            setFade("")
        };
    }, [tab]);

    return (<div className={`start ${fade}`}>
        { [<div>{shoes[0].title}</div>, <div>내용1</div>,<div>내용2</div>][tab] }
    </div>);
}   

export default Detail;