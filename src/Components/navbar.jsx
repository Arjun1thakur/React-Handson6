import './Component.css'
import { NavLink } from "react-router-dom"

function Navbar(){
    return (
        // <>
            <div className="bg nav flex">
                <NavLink to='/' className='link'>Home</NavLink>
                <NavLink to='/student' className='link'>Student</NavLink>
                <NavLink to='/contact' className='link'>Contact</NavLink>
            </div>
        // </>
    )
}
export default Navbar