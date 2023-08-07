import React from 'react'
import { useState, useEffect } from 'react';
import './SignIn.css'
const SignIn = () => {
  const initial={name:'',email:'',Password:''};
  const[formvalue,setFormvalue]=useState(initial)
  const[formerror,setFormError]=useState({})
  const[isSubmit,setIsSubmit]=useState(false);
  const handleChange=(e)=>{
      const {name,value} = e.target;
      setFormvalue({...formvalue,[name]:value})
  }
  const HandleSubmit=(e)=>{
    e.preventDefault();
    setFormError(validation(formvalue));
    setIsSubmit(true);
  }

  useEffect(()=>{
    if(Object.keys(formerror).length===0 && isSubmit){
    }
  },[formerror,isSubmit])
  const validation=(values)=>{
    const errors={};
    if(!values.name){
      errors.name="Name is Required";
    }
    if(!values.email){
      errors.email="Email is Required";
    }
    if(!values.Password){
      errors.Password="Password is Required";
    }
    return errors;
  }
return (
  <div className='sign'>
    <form onSubmit={HandleSubmit}>
      <h1 className='sign-head'>SignIn</h1>
      <div className='forminput'>
      <div className='field'>
      <label className='label' htmlFor='name'>Name</label><br/>
      <input type='text' name='name' value={formvalue.name} onChange={handleChange}/>
      <p className='required'>{formerror.name}</p>
      </div>
      <div className='field'>
      <label className='label' htmlFor='email'>Email</label><br/>
      <input type='email' name='email' value={formvalue.email} onChange={handleChange}/>
      <p className='required'>{formerror.email}</p>
      </div>
      <div className='field'>
      <label className='label' htmlFor='password'>password</label><br/>
      <input type='password' name='Password' value={formvalue.Password} onChange={handleChange}/>
      <p className='required'>{formerror.Password}</p>
      </div>
      <div>
          <button type="submit"  className='sign-button'>Submit</button>
      </div>
      </div>
    </form>
  </div>
)
}

export default SignIn