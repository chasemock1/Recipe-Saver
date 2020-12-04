import {useState} from 'react'

export default function RecipeCreate(props) {
    const [formData, setFormData] = useState({
        name: '',
        description:'',
        ingredients: '',
        steps:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prevState =>({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div id = 'form-div'>
            
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.handleCreate(formData)
        }} className = 'sign-create-form'>
            <h3>Create Recipe</h3>
            <label>Name:</label>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
            <label>Description:</label>
            <input
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
                />
            <label>Ingredients:</label>
            <input
                type='text'
                name='ingredients'
                value={formData.ingredients}
                onChange={handleChange}
                />
            <label>Steps:</label>
            <input
                type='text'
                name='steps'
                value={formData.steps}
                onChange={handleChange}
                />
            
            <button id= 'submit-button'>Submit</button>
        </form>
                </div>
    )
}
