import axios from 'axios'
import React, { useEffect, useState } from 'react'
import del from '../Images/delete.png'
import edit from '../Images/pen6.png'
import { useNavigate } from 'react-router-dom';

function Table() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = () => {
        let getData = axios.get('http://localhost:3001/product');
        getData.then((res) => setData(res.data))
    }

    const addperson = () => {
        navigate('/add')
    }

    const deleteperson = (id) => {
        let confir = window.confirm('Are you sure you want to delete');
        if (confir) {
            let dele = axios.delete(`http://localhost:3001/product/${id}`)
            dele.then((res) => res.data)
            getAllData();
        }
    }

    const editperson = (myData) => {
        navigate('/edit', { state: myData })
    }

    return (
        <div>
            <table border='1px' style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} cellPadding='10px' cellSpacing='20px'>
                <tbody>
                    <tr>
                        <th>
                            <input type='button' onClick={() => addperson()} value={'Add People'} />
                        </th>
                    </tr>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {
                        data.map((item, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img onClick={() => deleteperson(item.id)} style={{ width: '30%' }} src={del} /></td>
                            <td><img onClick={() => editperson(item)} style={{ width: '30%' }} src={edit} /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
