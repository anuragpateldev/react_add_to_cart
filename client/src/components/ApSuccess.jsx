import React , { useState } from 'react';
import { Alert } from 'react-bootstrap';

function ApSuccess() {
    const [show, setShow] = useState(true);
    return (
        <div style={{marginTop:'40px'}}>
            {show ? (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <p>
                Success
                </p>
            </Alert>
            )  : null}
        </div>
    )
}
  
export default ApSuccess;