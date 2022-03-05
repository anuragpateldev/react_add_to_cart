import React ,{ useEffect } from 'react';
import './AdminScreen.css';
import { Container , Row , Col , Button , ButtonGroup } from 'react-bootstrap';
import { Link, Switch , Route , useHistory} from 'react-router-dom';

import { useSelector } from 'react-redux';
import AddNewPizzas from '../Admin/AddNewPizzas';
import OrderList from '../Admin/OrderList';
import PizzasList from '../Admin/PizzasList';
import UserList from '../Admin/UserList';
import EditPizza from '../Admin/EditPizza';

const AdminScreen = () => {

    const history = useHistory();
    const userState = useSelector(state =>state.loginUserReducer);
    console.log('userState ==>',userState);
    const currentUser = userState.currentUser;

    useEffect( ()=>{
        console.log('useEffect');
        if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin){
            history.push('/');
        }
    },[]);
    
    return (
        <Container>
            <Row>
                <h1 style={{textAlign:'center',background:'orange'}} onClick={(e)=>history.push('/')}>Admin Panel</h1>
                <Col xs={2}>
                    <ButtonGroup vertical>
                        <Button><Link className='admin_link' to="/admin/userlist">All Users</Link></Button>
                        <Button><Link className='admin_link' to="/admin/pizzalist">All Pizzas</Link></Button>
                        <Button><Link className='admin_link' to="/admin/addnewpizza">Add Pizzas</Link></Button>
                        <Button><Link className='admin_link' to="/admin/orderlist">All Orders</Link></Button>
                    </ButtonGroup>  
                </Col>
                <Col xs={10}>
                    <Switch>
                        <Route path="/admin/userlist" component={UserList} exact/>
                        <Route path="/admin/editpizza/:id" component={EditPizza} exact/>
                        <Route path="/admin/pizzalist" component={PizzasList} exact/>
                        <Route path="/admin/addnewpizza" component={AddNewPizzas} exact/>
                        <Route path="/admin/orderlist" component={OrderList} exact/>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminScreen;