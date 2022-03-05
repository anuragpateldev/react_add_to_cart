import React from 'react';
import './ApLoader.css';
import { Spinner } from 'react-bootstrap';

const ApLoader = () =>{
    return (
        <div className="ap__loader_wrapper">
            <Spinner animation="grow" variant="warning" />
        </div>
    )
}

export default ApLoader;