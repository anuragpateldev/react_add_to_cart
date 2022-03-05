import React,{useState} from 'react';
import './SignupScreen.css';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import {registerUser} from '../actions/userAction';
import {useDispatch,useSelector} from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';

import ApLoader from '../components/ApLoader';
import ApSuccess from '../components/ApSuccess';
import ApError from '../components/ApError';

const SignupScreen = () =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCPassword] = useState('');
 
    const dispatch = useDispatch();
    const {loading,success,error} = useSelector(state=>state.registerUserReducer);

    const registerHandler = (e) =>{
        console.log('registerHandler');
        e.preventDefault();
        if(password !== cpassword){
            alert('Re enter password');
        }
        const user = {name,email,password};
        dispatch(registerUser(user));
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>

                {error && (<ApError error={error}/>) }
                {success && (<ApSuccess success={'Registration Successful'}/>)} 

                { loading ? (<ApLoader/>) : (

                    
                    <Form onSubmit={e=>registerHandler(e)} className='signup__container'>
                    <div className='lock_icon_div'>
                        <LockIcon/>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" 
                                placeholder="Enter name" 
                                name="name"
                                value={name}
                                onChange={(event)=>setName(event.target.value)}
                        />
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" 
                            placeholder="Confirm Password" 
                            value={cpassword}
                            name="cpassword"
                            onChange={(event)=>setCPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={registerHandler}>
                    Signup
                    </Button>
                </Form>
                )}
                
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default SignupScreen;