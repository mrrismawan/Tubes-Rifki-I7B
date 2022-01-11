import React,{useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate, Link } from 'react-router-dom'


const Dashboard = () => {
    //const [nama, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
 
    useEffect(() =>{
        refreshToken()
    },[]);

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            //setName(decoded.nama);
            setExpire(decoded.exp);
        } catch (error) {
            if(error.response){
                navigate("/", {replace: true});
            }
        }
    }

    const [alat, setAlat] = useState([]);

    useEffect(() => {
        getAlat();
        }, []);

    const getAlat = async () => {
        const response = await axios.get('http://localhost:5000');
                    setAlat(response.data);
        }
    
    const deleteAlat = async (id) => {
        const response = await axios.delete(`http://localhost:5000/${id}`);
        getAlat(response.data);
    }

    return (
    <div>
        <Link to='/adddata' className='button is-primary mt-3'>Tambah</Link>
            <table className='table is-stripped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kode Alat</th>
                        <th>Nama Alat</th>
                        <th>Jenis Alat</th>
                        <th>PM 1</th>
                        <th>CM 1</th>
                        <th>PM 2</th>
                        <th>CM 2</th>
                        <th>PM 3</th>
                        <th>CM 3</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { alat.map((ListAlat, index) => (
                        <tr key={ListAlat.id}>
                        <td>{index +1}</td>
                        <td>{ListAlat.kode_alat}</td>
                        <td>{ListAlat.nama_alat}</td>
                        <td>{ListAlat.jenis_alat}</td>
                        <td>{ListAlat.pm_alat_1}</td>
                        <td>{ListAlat.cm_alat_1}</td>
                        <td>{ListAlat.pm_alat_2}</td>
                        <td>{ListAlat.cm_alat_2}</td>
                        <td>{ListAlat.pm_alat_3}</td>
                        <td>{ListAlat.cm_alat_3}</td>
                        <td>
                            <Link to= {`editdata/${ListAlat.id}`} className="button is-small is-info"> Edit</Link>
                            <button onClick={ () => deleteAlat(ListAlat.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard

