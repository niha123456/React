import { useForm } from 'react-hook-form';
import './reacthookform.css';
export function HookFrormDemo() {
    const{register,handleSubmit,formState:{errors}} = useForm();
    const submit = (values)=>{
        console.log(values);
    }

    return(
        <div className="container">
            
           <form onSubmit={handleSubmit(submit)}>
                <h3 className='bi bi-person-fill'>User-Registration</h3>
            <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name='userName' className='form-control' {...register("userName",{required:true,minLength:4})} /></dd>
                    <dd className='text-danger'>
                        {
                            (errors.userName?.type==="required")?<span>Name Required</span>:<span></span> && (errors.userName?.type==="minLength")?<span>Name too short..-Min 4 Chars are required</span>:<span></span>
        
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="string" name='mobile' className='form-control' {...register("mobile",{required:true,pattern:/\+91\d{10}/})} /></dd>
                    <dd className='text-danger'>
                        {
                            (errors.mobile?.type==="required")?<span>Mobile Required</span>:<span></span> && (errors.mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                        }
                    </dd>
                    <dt>Age</dt>
                    <dd><input type="number" name='age' className='form-control' {...register("age",{required:true})} /></dd>
                    <dd className='text-danger'>
                        {
                            (errors.age?.type==="required")?<span>Age Required</span>:<span></span>
                        }
                    </dd>
                </dl>
                <button type = "submit" className='btn btn-primary progress-bar-striped progress-bar-striped-animated'>Register</button>
           </form>
        </div>
    )
}