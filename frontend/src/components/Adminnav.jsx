
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import "../assets/css/nav.css"
import logo from "../assets/images/logo1.png";
// import user from "../assets/images/user5.jpg";
const AdminNavbar=()=>{
    return(
        <Navbar>
        <Nav>
        <Nav.Item className='logoo'><img src={logo} className='logo'/></Nav.Item>
          <Navbar.Brand className='brand'>GENISM</Navbar.Brand>
          <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
          <Nav.Item><Link to={'/about'}>Dasboard</Link></Nav.Item>
          <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
          <Nav.Item>Logout</Nav.Item>
         
         
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}
export default AdminNavbar;