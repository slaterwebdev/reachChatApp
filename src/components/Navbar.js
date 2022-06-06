const Navbar = ({ login }) => {

    return ( 
        <div className="d-flex justify-space-around align-center">
            {login && <div className="d-flex align-center">
                <img src="" alt="member image" />
                <h3>Member Name</h3>
                <img src="/imgs/icons/dropdown.png" alt="" className="dropdown"/>
            </div>}
        </div>
     );
}
 
export default Navbar;