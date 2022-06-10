import "./navbar.css";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="newContainer">
                <span className="logo">IsoBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;