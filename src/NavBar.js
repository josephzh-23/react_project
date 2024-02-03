import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <div className='navBar'>

            {/* Will match what you have in the actual code  */}
            <div className='Box'>
                <Link to="/box">Box</Link>
            </div>

            {/* Will match what you have in the actual code  */}
            <div className='Box'>
                <Link to="/box">Home</Link>
            </div>

            <div className='form'>
                <Link to="/form">Form</Link>
            </div>

            <div className='form'>
                <Link to="/list">List</Link>
            </div>
        </div>
    )

}
export default Navbar
