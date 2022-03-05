import React, { useEffect } from 'react';
import { Container , Row , Col , Button , ButtonGroup, Table} from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import  { getAllUsers , deleteUser} from '../actions/userAction';
import DeleteIcon from '@material-ui/icons/Delete';

const UserList = () =>{

    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllUsers());
    },[dispatch]);
      
    const userState = useSelector(state =>state.getAllUserReducer);
    console.log('userState ==>',userState);

    const { loading , success , users } = userState;

    const deleteUserHandler = (user_id) =>{
        console.log('deleteUserHandler');
        console.log('user_id ==>',user_id);
        dispatch(deleteUser(user_id));
    }

    return (
        <>
            <h3>User List</h3>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {users && users.map( (user , index)=>(
                <tr key={user._id}>
                    <td>{index  + 1 }</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><Button variant='danger' onClick={(e)=>deleteUserHandler(user._id)}><DeleteIcon/></Button></td>
                </tr>
            ))}
            </tbody>
            </Table>
        </>
      );
}

export default UserList;