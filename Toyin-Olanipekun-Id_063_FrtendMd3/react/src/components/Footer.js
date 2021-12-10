import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; Toyin Olanipekun</p>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Footer
