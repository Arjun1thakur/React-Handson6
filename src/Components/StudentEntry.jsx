import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Create(check){
    const navigate = useNavigate();
    let [data,updataData]=useState({
        id:new Date().toLocaleString(),
        Name:'',
        Num:'',
        Batch:'',
        Course:''
        })
    const updateDataX=(e)=>{
        updataData({...data,[e.target.name]: e.target.value});
    }
    const Submit=(e)=>{
        e.preventDefault()
        check.PropRes(data);
        navigate('/student')
    }
    return (
        <>
            <form className="foam bg grid"  onSubmit={Submit}>
                <div className='center a'>
                    <input type="text" name="Name" className="input" value={data.Name} onChange={updateDataX} placeholder='Name'/>
                </div>
                <div className='center b'>
                    <input type='number' name="Num" className="input" value={data.Num} onChange={updateDataX} placeholder='Age'/>
                </div>
                <div className='center c'>
                    <input type="text" name="Course" className="input" value={data.Course} onChange={updateDataX} placeholder='Course'/>
                </div>
                <div className='center d'>
                    <input type="text" name="Batch" className="input" value={data.Batch} onChange={updateDataX} placeholder='Batch'/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value="reset" className='btn'/>
                    <input type="submit" className='btn'/>
                </div>
            </form>
        </>
    )
}
export default Create