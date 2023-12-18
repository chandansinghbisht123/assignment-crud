'use client'
import React from "react";
import { useState, useEffect } from "react";
import './update.css'
const UpdateForm = () => {
    const [data, setdata] = useState({
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
    const [fetchdata, setfetchdata] = useState(false)
    const [finduser, setfindUser] = useState({
        userName: ''
    })
    let fetchedUserdata;
    
    useEffect(()=>{
        fetchedUserdata = localStorage.getItem(finduser.userName)
        if (fetchedUserdata !== null || undefined) {
            let data = JSON.parse(fetchedUserdata)
            setdata({
                userName: data.userName,
                Name:data.Name,
                fatherName: data.fatherName,
                motherName: data.motherName,
                email: data.email,
                password:data.password,
                education: data.education,
                number: data.number,
                telephone: data.telephone,
                address: data.address,
                board: data.board,
                district: data.district,
                state: data.state    
                })
        }
    
    },[fetchdata])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }
    const handleChangedata = (e) => {
        const { name, value } = e.target;
        setfindUser({
            ...finduser,
            [name]: value
        })
    }

    const updateForm = (e) => {
        e.preventDefault();
        localStorage.setItem(data.userName, JSON.stringify(data))
        setdata({
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
    const deleteData=(e)=>{
        e.preventDefault()
        localStorage.removeItem(data.userName)
    }
    const fetchdatafun = (e) => {
        e.preventDefault();
        setfetchdata(!fetchdata) 
    }


    return (
        <div>
            <div className="username">
      <form>  
        <label forhtml='username'> Username</label>
    <input type='text' placeholder='Username' onChange={handleChangedata} name='userName' id='userName' value={finduser.userName} />
    <button type="button" onClick={fetchdatafun}>Get Data</button>
    </form>
    </div>
        
        <form>
            <div className='form'>
                <div className='heading'>Please fill the Form</div>
                <div className='container'>
                    <div className='input'>
                        <label forhtml='username' disabled> Username</label>
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
                        <input type='text' placeholder='Address' onChange={handleChange} name='address' id='address' value={data.address} />
                      <div className="button">
                        <button type='submit' onClick={updateForm}>UpdateForm</button>
                        <button type='submit' onClick={deleteData}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            </div>
    )
}

export default UpdateForm