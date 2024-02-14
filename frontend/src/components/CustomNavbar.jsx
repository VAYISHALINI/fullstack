
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import "../assets/css/nav.css"
import logo from "../assets/images/logo1.png";

const CustomNavbar=()=>{
    return(
        <Navbar>
        <Nav>
        <Nav.Item className='logoo'><img src={logo} className='logo'/></Nav.Item>
          <Navbar.Brand className='brand'>GENISM</Navbar.Brand>
          <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
          <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
          <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
          <Nav.Item><Link to={'/login'}>Login</Link></Nav.Item>
          <Nav.Item><Link to={'/enroll'}>Enrolled Courses</Link></Nav.Item>
          {/* <Nav.Item className='userr'><Link to={'/dashboard'}><img src={user} className='user'/></Link></Nav.Item> */}
          {/* <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}
export default CustomNavbar;