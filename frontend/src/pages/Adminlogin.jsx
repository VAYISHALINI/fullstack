import { Link } from 'react-router-dom';
import { Form, ButtonToolbar, Button} from 'rsuite';
import "../assets/css/login.css"
import {signIn} from "../services/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };

  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          email: email,
          password: password
      }
      signIn(form)
          .then((res) => {
              
              sessionStorage.setItem('token', res.data.token);
              setEmail("");
              setPassword("");
              navigate('/dashboard');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              console.log(err);
             
          });
  };
  return(
  <>
 <div className='gif'>

 </div>
  <div className='log'>
  <Form>
    <h1 style={{marginLeft:"-400px"}}>Login</h1>
    <br/>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email}  />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password}/>
    </Form.Group>
    
    <Form.Group>
      <ButtonToolbar>
       <Button appearance="primary"  onClick={handleFormSubmit}>Submit</Button>
        
      </ButtonToolbar>
    </Form.Group>
    <p>New user? <Link to={'/signup'}>Register</Link></p>
  </Form>
  </div>
  </>
  );
  };
export default Adminlogin;
