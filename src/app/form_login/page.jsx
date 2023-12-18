'use client'
import { useState } from 'react'
import './createForm.css'

const Form = () => {
    const [data, setData] = useState({
        userName: '',
        Name: '',
        fatherName: '',
        motherName: '',
        email: '',
        password: '',
        education: '',
        number: '',
        telephone: '',
        address: '',
        board: '',
        district: '',
        state: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    };
    const submit = (e) => {
        e.preventDefault();
        localStorage.setItem(data.userName, JSON.stringify(data));
        setData({
            userName: '',
            Name: '',
            fatherName: '',
            motherName: '',
            email: '',
            password: '',
            education: '',
            number: '',
            telephone: '',
            address: '',
            board: '',
            district: '',
            state: ''
        })
    }
    return (
        <div>
        <form onSubmit={submit}>
            <div className='form'>
                <div className='heading'>Please fill the Form</div>
                <div className='container'>
                    <div className='input'>
                        <label forhtml='username'> Username</label>
                        <input type='text' placeholder='Username' onChange={handleChange} name='userName' id='userName' value={data.userName} />
                        <label forhtml='name'> Name</label>
                        <input type='text' placeholder='Name' onChange={handleChange} name='Name' id='Name' value={data.Name} />
                        <label forhtml='fathername'> Fathername</label>
                        <input type='text' placeholder="Fater'sname" onChange={handleChange} name='fatherName' id='fatherName' value={data.fatherName} />
                        <label forhtml='mothername'> Mothername</label>
                        <input type='text' placeholder="Mother'sname" onChange={handleChange} name='motherName' id='motherName' value={data.motherName} />
                        <label forhtml='email'> Email</label>
                        <input type='text' placeholder='Email' onChange={handleChange} name='email' id='email' value={data.email} />
                        <label forhtml='password'> Password</label>
                        <input type='text' placeholder='Password' onChange={handleChange} name='password' id='password' value={data.password} />
                        <label forhtml='education'> Education</label>
                        <input type='text' placeholder='Educationon' onChange={handleChange} name='education' id='education' value={data.education} />
                        <label forhtml='number'> number</label>
                        <input type='text' placeholder='ph.No.' onChange={handleChange} name='number' id='number' value={data.number} />
                        <label forhtml='telephone'> telephone</label>
                        <input type='text' placeholder='tel.ph.' onChange={handleChange} name='telephone' id='telephone' value={data.telephone} />
                        <label forhtml='address'> address</label>
                        <input type='text' placeholder='Adress' onChange={handleChange} name='address' id='address' value={data.address} />
                        <div className='button'>
                        <button onClick={submit}>Submit</button>
                        <a href='./login_update'><button>Update Form</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
       
                        already have an account<a href='/login_update'>login</a>
          </div>
    )
}

export default Form