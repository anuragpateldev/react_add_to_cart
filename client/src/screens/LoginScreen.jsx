import React,{useEffect, useState} from 'react';
import './LoginScreen.css';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import {loginUser} from '../actions/userAction';
import {useDispatch,useSelector} from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';
import ApSuccess from '../components/ApSuccess';
import ApError from '../components/ApError';

const LoginScreen = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const {error,loading} = useSelector(state=>state.loginUserReducer);

    useEffect( ()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href = '/';

        }
    },[]);

    const loginHandler = () =>{
        const user = {email,password};
        dispatch(loginUser(user));
    }

    return (
        <Container >
            <Row>
                <Col></Col>
                <Col>
                {error ? <ApError error={error}/> : null}
                
                <Form onSubmit={e=>e.preventDefault()} className='login__container'>
                    <div className='lock_icon_div'>
                        <LockIcon/>
                    </div>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                                placeholder="Enter email" 
                                name="email"
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                        />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                            placeholder="Password" 
                            value={password}
                            name="password"
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={loginHandler}>
                    Login
                    </Button>
                </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default LoginScreen;