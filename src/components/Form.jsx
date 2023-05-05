import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        agreement: false,
        gender: '',
        food: ''
    })

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData(prev => {
            return { ...prev, [name]: type === 'checkbox' ? checked : value }; return newForm
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />

                Description: <textarea value={formData.description} name="description" cols="30" rows="10" onChange={handleChange}/>
                <br />
                <input value={formData.agreement} type="checkbox" name="agreement" onChange={handleChange} checked={formData.agreement}/>Agree?
                <br />
                Gender: <input type="radio" name="gender" onChange={handleChange} value="male" checked={formData.gender === 'male'}/>Male
                <input type="radio" name="gender" onChange={handleChange} value="female" checked={formData.gender === 'female'}/>Female
                <br />
                LikeFood: <select name="food" onChange={handleChange}>
                    <option value="pizza" label="pizza"></option>
                    <option value="burger" label="burger"></option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

};

export default Form;