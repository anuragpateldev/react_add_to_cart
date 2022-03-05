import React , { useState } from 'react';
import { Alert } from 'react-bootstrap';

function ApError({error}) {
    const [show, setShow] = useState(true);
    return (
        <div style={{marginTop:'40px'}}>
            {show ? (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                {error}
                </p>
            </Alert>
            )  : null}
        </div>
    )
}
  
export default ApError;