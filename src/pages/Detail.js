import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Detail(props) {

    const [display, setDisplay] = useState(true);

    useEffect(()=>{
        let a = setTimeout(()=>{
            setDisplay(false);
            setFade("end");
        }, 2000);
        return () => {
            setFade("");
            clearTimeout(a);
        }
    }, []);

    const {id} = useParams();
    let object = props.shoes.find((x) => x.id == id)
    const [tab, setTab] = useState(0);
    const [fade, setFade] = useState("end");

    return (
        <div className={`container start ${fade}`}>
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
            <TabContent tab={tab}/>
        </div>
    ); 
}

function TabContent({tab}) {

    const [fade, setFade] = useState('');
    useEffect(()=>{
        let a = setTimeout(()=>setFade("end"), 100)
        return()=>{
            clearTimeout(a);
            setFade("")
        };
    }, [tab]);

    return (<div className={`start ${fade}`}>
        { [<div>내용0</div>, <div>내용1</div>,<div>내용2</div>][tab] }
    </div>);
}   

export default Detail;