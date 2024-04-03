import './signin.css';
export function Signin(){
    return(
        <div className="container-fluid">
            <h3 className='heading'>Sign-in Component in React</h3>
            <button data-bs-target="#signin" data-bs-toggle="modal" className='btn btn-primary heading'>Sign-in</button>
            <div className='modal fade'id='signin'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='heading'>New Users Sign-in</h3>
                            <button data-bs-dismiss="modal" className='btn btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <dl>
                                <dt>UserName</dt>
                                <dd><input type="text" className='form-control' /></dd>
                                <dt>Mobile Number</dt>
                                <dd><input type="number" className='form-control' /></dd>
                                <dt>Password</dt>
                                <dd><input type="password" className='form-control' /></dd>
                                <dt>Re-Enter Password</dt>
                                <dd><input type="password" className='form-control' /></dd>
                            </dl>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-success'>Sign-In</button>
                            <button data-bs-dismiss="modal" className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}