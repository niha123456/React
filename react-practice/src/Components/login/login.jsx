import './login.css';
import { useCaptcha } from '../../hooks/captcha-hook';
import { useEffect, useState } from 'react';
export function Login() 
{
    let code = useCaptcha();
    const[captcha,setCaptcha] = useState('');

    useEffect(()=> {
        setCaptcha(code);
    },[])

    function handlereloadClick() {
       setCaptcha(code);
    }
    return(
        <div className='container-fluid'>
          <button data-bs-target = "#login" data-bs-toggle="modal" className='btn btn-primary'>Login</button>
          <div className='modal fade'id="login">
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h3>User-Login</h3>
                        <button data-bs-dismiss="modal" className='btn btn-close'></button>
                    </div>
                    <div className='modal-body'>
                        <dl>
                            <dt>User-Name</dt>
                            <dd><input type="text" className='form-control' /></dd>
                            <dt>Password</dt>
                            <dd><input type="password" className='form-control' /></dd>
                            <dt>Verify code <button onClick={handlereloadClick} className='btn bi bi-arrow-clockwise'></button></dt>
                            <dd>{captcha}</dd>
                        </dl>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-primary'>Login</button>
                        <button data-bs-dismiss="modal"className='btn btn-danger'>Cancel</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}