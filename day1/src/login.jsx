import { Link } from 'react-router-dom';
import { Form, ButtonToolbar, Button} from 'rsuite';
import "../assets/css/login.css"


const Login = () => (
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
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    
    <Form.Group>
      <ButtonToolbar>
      <Link to={'/home'}> <Button appearance="primary">Submit</Button></Link>
        <Button appearance="default">Cancel</Button>
        <Link to={'/adminlogin'}> <Button appearance="primary">Admin</Button></Link>
      </ButtonToolbar>
    </Form.Group>
    <p>New user? <Link to={'/signup'}>Register</Link></p>
  </Form>
  </div>
  </>
 
);
export default Login;
