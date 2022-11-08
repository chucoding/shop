import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice.js';
import { changeCount } from '../store/cartSlice.js';

const Cart = () => {

    const state = useSelector((state)=>{return state});
    const dispatch = useDispatch();

    return (
        <div>

            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>dispatch(changeAge(10))}>버튼</button>

            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td><button onClick={()=>{
                                dispatch(changeCount(item.id))
                            }}>+</button></td>
                        </tr>
                    );
                })}
                
            </tbody>
            </Table>
        </div>
    );
}

export default Cart;