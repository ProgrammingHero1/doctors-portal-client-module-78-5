import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('');

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    
                    <p>{data}</p>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;