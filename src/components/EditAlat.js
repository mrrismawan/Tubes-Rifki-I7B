import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditAlat = () => {
    const [kode_alat, setKode] = useState('');
    const [nama_alat, setNama] = useState('');
    const [jenis_alat, setJenis] = useState('');
    const [pm_1, setPM1] = useState('');
    const [cm_1, setCM1] = useState('');
    const [pm_2, setPM2] = useState('');
    const [cm_2, setCM2] = useState('');
    const [pm_3, setPM3] = useState('');
    const [cm_3, setCM3] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const updateData = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/${id}`,{
            kode_alat: kode_alat,
            nama_alat: nama_alat,
            jenis_alat: jenis_alat,
            pm_alat_1: pm_1,
            cm_alat_1: cm_1,
            pm_alat_2: pm_2,
            cm_alat_2: cm_2,
            pm_alat_3: pm_3,
            cm_alat_3: cm_3,
        });
        navigate("/dashboard");
    }

    useEffect(() => {
        getAlatById();
    }, []);

    const getAlatById = async() => {
            const response = await axios.get(`http://localhost:5000/${id}`);
            setKode(response.data.kode_alat);
            setNama(response.data.nama_alat);
            setJenis(response.data.jenis_alat);
            setPM1(response.data.pm_alat_1);
            setCM1(response.data.cm_alat_1);
            setPM2(response.data.pm_alat_2);
            setCM2(response.data.cm_alat_2);
            setPM3(response.data.pm_alat_3);
            setCM3(response.data.cm_alat_3);
    }

    return (
        <div> 
            <form onSubmit={ updateData }>
                <div className='field'>
                    <label className='label'>Kode Alat</label>
                    <input 
                        class='input' 
                        type="text" 
                        placeholder='Kode Alat'
                        value = {kode_alat}
                        onChange={ (e) => setKode(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Nama Alat</label>
                    <input 
                        class='input'
                        type="text" 
                        placeholder='Nama Alat'
                        value = {nama_alat}
                        onChange={ (e) => setNama(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Jenis Alat</label>
                    <input 
                        class='input' 
                        type="text" 
                        placeholder='Jenis Alat'
                        value = {jenis_alat}
                        onChange={ (e) => setJenis(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>PM Alat 1</label>
                    <input 
                        class='input' 
                        type="text" 
                        placeholder='PM Alat 1'
                        value = {pm_1}
                        onChange={ (e) => setPM1(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>CM Alat 1</label>
                    <input 
                        class='input'
                        type="text" 
                        placeholder='CM Alat 1'
                        value = {cm_1}
                        onChange={ (e) => setCM1(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>PM Alat 2</label>
                    <input class='input' 
                        type="text" 
                        placeholder='PM Alat 2'
                        value = {pm_2}
                        onChange={ (e) => setPM2(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>CM Alat 2</label>
                    <input class='input' 
                        type="text" 
                        placeholder='CM Alat 2'
                        value = {cm_2}
                        onChange={ (e) => setCM2(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>PM Alat 3</label>
                    <input class='input' 
                        type="text" 
                        placeholder='PM Alat 3'
                        value = {pm_3}
                        onChange={ (e) => setPM3(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>CM Alat 3</label>
                    <input class='input' 
                        type="text" 
                        placeholder='CM Alat 3'
                        value = {cm_3}
                        onChange={ (e) => setCM3(e.target.value)}/>
                </div>
                <div className='field'>
                    <button className='button is-primary'>Update</button>
                </div>
            </form>
            
        </div>
    )
}

export default EditAlat
