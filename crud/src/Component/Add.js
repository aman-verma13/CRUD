import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const navigate = useNavigate();

    const addperson = () => {
        const addingData = {
            name: name,
            email: email,
            phone: num
        }

        let postData = axios.post('http://localhost:3001/product', addingData);
        navigate('/')
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '20%' }}>
            <h3>Add People</h3>
                <input style={{ marginTop:'5px', padding: '10px' }} type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' value={name} /> <br /><br />
                <input style={{ padding: '10px' }} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' value={email} /><br /><br />
                <input style={{ padding: '10px' }} type='number' onChange={(e) => setNum(e.target.value)} placeholder='Enter Number' value={num} /><br /><br />
                <input style={{ padding: '10px' }} type='submit' onClick={() => addperson()} value={'Update'} />
            </div>
        </div>
    )
}

export default Add
