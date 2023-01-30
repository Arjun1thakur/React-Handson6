import { useNavigate,useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ContextX } from '../Main';

function Update(){
    const navigate = useNavigate();
    let arr=useContext(ContextX)
    const location = useLocation();
    const index = (location.state.data);

    const dataX = {
        Name : arr.data[index].Name,
        Num:arr.data[index].Num,
        Batch:arr.data[index].Batch,
        Course:arr.data[index].Course,
    }
    const UpdateX = (e) =>{
        dataX[e.target.name] = e.target.value;
    }
    const SubmitX = (e) =>{
        e.preventDefault()
        arr.updateData(
         (data)=>{
             data[index] = dataX;
             return (data)
         }
        );
        navigate('/student');
     }

    return (
        <>
            <div className="foam bg grid">
                <div className='center a'>
                    <input type="text" name="Name" onChange={UpdateX} className="input" placeholder={arr.data[index].Name}/>
                </div>
                <div className='center b'>
                    <input type='number' name="Num" onChange={UpdateX} className="input" placeholder={arr.data[index].Num}/>
                </div>
                <div className='center c'>
                    <input type="text" name="Course" onChange={UpdateX} className="input" placeholder={arr.data[index].Course}/>
                </div>
                <div className='center d'>
                    <input type="text" name="Batch" onChange={UpdateX} className="input" placeholder={arr.data[index].Batch}/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value="Reset" className='btn'/>
                    <input type="submit" onClick={SubmitX} value='Update'  className='btn'/>
                </div>
            </div>
        </>
    )
}
export default Update