import React ,{useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate()
    const[formData,setFormData]= useState({
       
        password:'',
       
        email:''
    })

    const handleChange =(e)=>{
        const { name,value} = e.target;
        setFormData({...formData,[name]:value})
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users/login",formData)
            sessionStorage.setItem('userToken',response.data.token)
            navigate('/')
            alert('success')
        } catch (error) {
            console.error(error);
            alert("signup failed")
        }
        
    }

  return (
    <div className='container'>
        <h2 className='title'>login</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='title'>Welcome</div>
            <div className='subtitle'> Let's create your account!</div>
           
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}

                 />
            </div>
           
            <div>
                <label htmlFor="name">Password:</label>
                <input 
                type="password"
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}

                 />
            </div>
            
          
            <button type='submit'>Sign Up</button>
        </form>
      
    </div>
  )
}

export default LoginForm
