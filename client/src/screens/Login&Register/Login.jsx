import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div id="form-div">
            
        <form onSubmit={(e)=> {
            e.preventDefault()
            props.handleLogin(formData)
        }} className = "sign-create-form">
            <h3>Login</h3>
            <label>Username:
            <input 
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            />
            </label>
            <label>Password:
            
            <input 
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
            </label>
            <Link to='/register'>Register</Link>
            <button id= 'submit-button'>Submit</button>
        </form>
            </div>
    )
}
