import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddAlat = () => {
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

    const saveData = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000`,{
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
        navigate("/dashboard", {replace: true});
    }

    return (
        <div> 
            <form onSubmit={ saveData }>
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
                        value = {pm_3}
                        onChange={ (e) => setCM3(e.target.value)}/>
                </div>
                <div className='field'>
                    <button className='button is-primary'>Simpan</button>
                </div>
            </form>
            
        </div>
    )
}

export default AddAlat
