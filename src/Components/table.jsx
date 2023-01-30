import { Link } from "react-router-dom"
import { ContextX } from '../Main'
import { useContext } from 'react'
function Table(){
  let arr=useContext(ContextX)
  console.log(arr.data)
    return (
        <>
          <div className='flex mainBox'>
            <div className='name'>Student Details</div>
            <div><Link className='btn' to='/Entry-Data' >Add New Student</Link></div>
          </div>
          <div className="table bg">
            <table>
              <thead>
                <tr>
                  <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>Name</td>
                  <td style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}}>Age</td>
                  <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>Course</td>
                  <td style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}}>Batch</td>
                  <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>Change</td>
                </tr>
              </thead>
              <tbody>
                {arr.data.map((data,index)=>{
                  return (
                    <tr key={index}>
                      <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>{data.Name}</td>
                      <td style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}}>{data.Num}</td>
                      <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>{data.Course}</td>
                      <td style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}}>{data.Batch}</td>
                      <td style={{backgroundColor:'rgba(255, 255, 255, 0.2)'} }><Link to='/edit' state={{data:index}}>Edit</Link></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      </>
    )
}
export default Table