import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Edit() {
    const [name, setName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [num, setNum] = useState(undefined)
    const [id, setId] = useState(undefined)
    const abc = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(abc.state);
        if (abc.state === null) {
            navigate('/')
        }
        else {
            setName(abc.state.name)
            setEmail(abc.state.email)
            setNum(abc.state.phone)
            setId(abc.state.id)
        }
    }, [])

    const updatebtn = () => {
        const updatingData = {
            name: name,
            email: email,
            phone: num
        }
        axios.patch(`http://localhost:3001/product/${id}`, updatingData);
        navigate('/')
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '20%' }}>
            <h3>Edit People</h3>
                <input style={{ marginTop:'10px', padding: '10px' }} type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' value={name} /> <br /><br />
                <input style={{ padding: '10px' }} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' value={email} /><br /><br />
                <input style={{ padding: '10px' }} type='number' onChange={(e) => setNum(e.target.value)} placeholder='Enter Number' value={num} /><br /><br />
                <input style={{ padding: '10px' }} type='submit' onClick={() => updatebtn()} value={'Update'} />
            </div>
        </div>
    )
}

export default Edit
