import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Student from './student';
import About from './About';
import Entry from './Components/StudentEntry';
import Error0 from './Error';
import Navbar from "./Components/navbar"
import { useState } from 'react';
import { createContext } from 'react';
import Update from './Components/CreateEle';
let ContextX = createContext()
function Main(){
    let [DataX,updateData]=useState([])
    let getData=(mainD)=>{
        DataX.push(mainD)
        console.log(DataX)
    }
    return (
        <>
        <Navbar/>
        {
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={
                        <ContextX.Provider value={{data : DataX, updateData : updateData}}>
                            <Student/>
                        </ContextX.Provider>
                    }/>
                <Route path='/edit' element={
                        <ContextX.Provider value={{data : DataX, updateData : updateData}}>
                            <Update/>
                        </ContextX.Provider>
                    }/>
                <Route path='/contact' element={<About/>}/>
                <Route path='/Entry-Data' element={<Entry PropRes={getData}/>}/>
                <Route path='*' element={<Error0/>}/>
            </Routes>
        }
        </>
    )
}
export default Main
export {ContextX}